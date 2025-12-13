"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  onDone: () => void;
  durationMs?: number; // safety timer
};

const VIDEOS = [
  { src: "/intro/raptor-1_prob4.mp4", id: "raptor-1_prob4" },
];

export default function IntroSplash({ onDone, durationMs = 30000 }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const safetyTimeoutRef = useRef<number | null>(null);
  const [canShow, setCanShow] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false); // Start with audio enabled
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalDurationRef = useRef(0);
  const videoDurationRef = useRef<number>(0);
  const hasTriggeredTransitionRef = useRef(false);

  useEffect(() => {
    // Check for test mode via URL parameter (e.g., ?showIntro=true)
    const urlParams = new URLSearchParams(window.location.search);
    const forceShow = urlParams.get("showIntro") === "true";
    
    // In development, check localStorage flag or allow showing on first load
    const devForceShow = 
      typeof window !== "undefined" && 
      (localStorage.getItem("forceIntro") === "true" || 
       (process.env.NODE_ENV === "development" && !sessionStorage.getItem("intro_seen")));
    
    if (forceShow || devForceShow) {
      // Clear session storage for testing
      if (forceShow) {
        sessionStorage.removeItem("intro_seen");
        console.log("✅ Intro forced to show via ?showIntro=true");
      } else {
        console.log("✅ Intro showing (development mode)");
      }
    }

    // Respect reduced motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Only show once per session (unless forced)
    const seen = sessionStorage.getItem("intro_seen") === "1";

    if (reduceMotion && !forceShow && !devForceShow) {
      console.log("Intro skipped: prefers-reduced-motion");
      onDone();
      return;
    }

    if (seen && !forceShow && !devForceShow) {
      console.log("Intro skipped: already seen in this session");
      console.log("💡 To see it again:");
      console.log("   1. Add ?showIntro=true to URL");
      console.log("   2. Or run: localStorage.setItem('forceIntro', 'true'); location.reload();");
      console.log("   3. Or run: sessionStorage.removeItem('intro_seen'); location.reload();");
      onDone();
      return;
    }

    setCanShow(true);
    if (!forceShow && !devForceShow) {
      sessionStorage.setItem("intro_seen", "1");
    }

    // Set safety timeout (will be cleared if video ends naturally)
    safetyTimeoutRef.current = window.setTimeout(() => {
      console.log("Intro timeout: safety timer expired (video may not have ended properly)");
      onDone();
    }, durationMs);

    return () => {
      if (safetyTimeoutRef.current) {
        window.clearTimeout(safetyTimeoutRef.current);
      }
    };
  }, [onDone, durationMs]);

  useEffect(() => {
    if (!canShow) return;

    const root = document.documentElement;
    root.dataset.intro = "1";

    return () => {
      delete root.dataset.intro;
    };
  }, [canShow]);

  useEffect(() => {
    if (!canShow) return;
    const v = videoRef.current;
    if (!v) return;

    // Reset total duration and transition flag when starting first video
    if (currentVideoIndex === 0) {
      totalDurationRef.current = 0;
      hasTriggeredTransitionRef.current = false;
      videoDurationRef.current = 0;
    }

    // Only load/play if this is the initial load (not a transition)
    // Transitions are handled by transitionToNextVideo
    if (currentVideoIndex === 0) {
      // Load and play the first video
      v.src = VIDEOS[currentVideoIndex].src;
      v.load();
      
      // Try to play with audio immediately (no muted)
      v.muted = false;
      setIsMuted(false);
      
      // Attempt to play with sound - browsers may block this, but we try anyway
      v.play()
        .then(() => {
          console.log(`Playing video ${currentVideoIndex + 1}/${VIDEOS.length}: ${VIDEOS[currentVideoIndex].id}`);
        })
        .catch((err) => {
          console.warn("Autoplay with audio blocked, trying muted:", err);
          v.muted = true;
          return v.play();
        })
        .then(() => {
          if (v && v.muted) {
            console.log("Video playing muted (browser autoplay policy) - click speaker to unmute");
          }
        })
        .catch((err) => {
          console.error("Video play failed completely:", err);
          setVideoError("Video failed to play. Click to skip.");
        });
    }

    // Cleanup function
    return () => {
      const handler = (v as any)?._timeUpdateHandler;
      if (handler && v) {
        v.removeEventListener('timeupdate', handler);
        delete (v as any)._timeUpdateHandler;
      }
    };
  }, [canShow, currentVideoIndex]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (v) {
      v.muted = !v.muted;
      setIsMuted(v.muted);
      // Ensure video continues playing when unmuting
      if (!v.muted && v.paused) {
        v.play().catch((err) => {
          console.error("Failed to play after unmute:", err);
        });
      }
    }
  };

  const handleVideoError = () => {
    console.error("Intro video load error");
    setVideoError("Video failed to load. Click to skip.");
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
    }
  };

  const transitionToNextVideo = () => {
    if (hasTriggeredTransitionRef.current) return; // Prevent multiple calls
    
    const nextIndex = currentVideoIndex + 1;
    
    if (nextIndex < VIDEOS.length) {
      hasTriggeredTransitionRef.current = true;
      
      // Transition to next video
      console.log(`Video ${currentVideoIndex + 1} ending early (2s cutoff), transitioning to video ${nextIndex + 1}`);
      setIsTransitioning(true);
      
      // Smooth fade transition with longer duration
      setTimeout(() => {
        const v = videoRef.current;
        if (v) {
          // Remove all event listeners first
          const handler = (v as any)?._timeUpdateHandler;
          if (handler) {
            v.removeEventListener('timeupdate', handler);
            delete (v as any)._timeUpdateHandler;
          }
          
          const wasMuted = v.muted;
          v.pause();
          v.currentTime = 0; // Reset to start
          v.src = VIDEOS[nextIndex].src;
          v.load();
          v.muted = wasMuted; // Preserve mute state
          
          // Wait for video metadata to load first, then play
          const loadedMetadataHandler = () => {
            // Reset transition flag for the new video
            hasTriggeredTransitionRef.current = false;
            
            // Now wait for video to be ready to play
            const canPlayHandler = () => {
              v.play()
                .then(() => {
                  setIsTransitioning(false);
                  setCurrentVideoIndex(nextIndex);
                  console.log(`Now playing video ${nextIndex + 1}/${VIDEOS.length}: ${VIDEOS[nextIndex].id}`);
                })
                .catch((err) => {
                  console.error("Failed to play next video:", err);
                  setIsTransitioning(false);
                  onDone();
                });
            };
            
            v.addEventListener('canplay', canPlayHandler, { once: true });
            
            // Also try to play immediately if video is already ready
            if (v.readyState >= 3) { // HAVE_FUTURE_DATA or higher
              canPlayHandler();
            }
          };
          
          v.addEventListener('loadedmetadata', loadedMetadataHandler, { once: true });
          
          // If metadata is already loaded, trigger immediately
          if (v.readyState >= 1) { // HAVE_METADATA or higher
            loadedMetadataHandler();
          }
        }
      }, 500); // Longer fade transition for smoother effect
    } else {
      // All videos finished
      console.log("All intro videos completed");
      if (safetyTimeoutRef.current) {
        clearTimeout(safetyTimeoutRef.current);
      }
      onDone();
    }
  };

  const handleVideoEnded = () => {
    transitionToNextVideo();
  };

  if (!canShow) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black cursor-pointer"
      aria-label="Intro animation"
      onClick={onDone}
      onTouchStart={onDone}
    >
      <video
        ref={videoRef}
        className={`h-full w-full object-cover transition-opacity duration-500 ease-in-out cursor-pointer ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        playsInline
        autoPlay
        preload="auto"
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        onClick={onDone}
        onTouchStart={onDone}
        onLoadedMetadata={() => {
          const v = videoRef.current;
          if (v && v.duration > 0) {
            const videoDuration = v.duration;
            videoDurationRef.current = videoDuration;
            const effectiveDuration = videoDuration - 2; // Subtract 2 seconds cutoff
            totalDurationRef.current += effectiveDuration;
            console.log(`Video ${currentVideoIndex + 1} loaded - duration: ${videoDuration.toFixed(2)}s (will cut at ${effectiveDuration.toFixed(2)}s)`);
            
            // Add timeupdate listener to monitor playback and cut off last 2 seconds
            // Only add if we haven't already added one for this video
            if (!(v as any)._timeUpdateHandler) {
              const timeUpdateHandler = () => {
                if (!v || !videoDurationRef.current || hasTriggeredTransitionRef.current) return;
                const cutoffTime = videoDurationRef.current - 2;
                if (v.currentTime >= cutoffTime) {
                  // Trigger transition when we hit the cutoff point
                  hasTriggeredTransitionRef.current = true;
                  transitionToNextVideo();
                }
              };
              v.addEventListener('timeupdate', timeUpdateHandler);
              
              // Store handler for cleanup
              (v as any)._timeUpdateHandler = timeUpdateHandler;
            }
            
            // Adjust safety timeout for total duration of all videos
            if (currentVideoIndex === 0) {
              // Only set timeout on first video load
              if (safetyTimeoutRef.current) {
                clearTimeout(safetyTimeoutRef.current);
              }
              // Estimate total duration (will be updated as videos load)
              const estimatedTotal = effectiveDuration * VIDEOS.length;
              safetyTimeoutRef.current = window.setTimeout(() => {
                console.log("Intro timeout: safety timer expired");
                onDone();
              }, (estimatedTotal * 1000) + 5000); // Total duration + 5 second buffer
            }
          }
        }}
      />

      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="text-center text-white">
            <p className="mb-4">{videoError}</p>
            <button
              className="rounded-full bg-white/20 px-6 py-2 text-white hover:bg-white/30"
              onClick={onDone}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Cinematic overlay / vignette - stronger for professional look */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      {/* Subtle edge vignette for cinematic effect */}
      <div className="pointer-events-none absolute inset-0" style={{
        boxShadow: "inset 0 0 200px rgba(0, 0, 0, 0.5)"
      }} />


      <div className="absolute right-4 top-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
        <button
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          aria-label={isMuted ? "Unmute" : "Mute"}
          title={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M17 10l2 2m0 0l2 2m-2-2l-2 2m2-2l-2-2" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
        <button
          className="rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onDone();
          }}
          aria-label="Skip intro"
        >
          Skip
        </button>
      </div>

    </div>
  );
}
