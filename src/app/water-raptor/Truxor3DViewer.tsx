"use client";

/// <reference path="../../types/model-viewer.d.ts" />

import { useState, useRef, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcw, Eye, EyeOff, Camera, Maximize2, Sun, Moon, Smartphone } from "lucide-react";

type CameraPreset = {
  name: string;
  orbit: string;
  target: string;
  icon: React.ReactNode;
};

const CAMERA_PRESETS: CameraPreset[] = [
  { name: "Side View", orbit: "90deg 90deg 2.5m", target: "0m 0m 0m", icon: <Camera className="h-4 w-4" /> },
  { name: "Front View", orbit: "0deg 90deg 2.5m", target: "0m 0m 0m", icon: <Camera className="h-4 w-4" /> },
  { name: "Back View", orbit: "180deg 90deg 2.5m", target: "0m 0m 0m", icon: <Camera className="h-4 w-4" /> },
  { name: "Top View", orbit: "90deg 0deg 3m", target: "0m 0m 0m", icon: <Camera className="h-4 w-4" /> },
  { name: "Isometric", orbit: "45deg 75deg 3m", target: "0m 0m 0m", icon: <Camera className="h-4 w-4" /> },
];

export default function Truxor3DViewer() {
  const [isExploded, setIsExploded] = useState(false);
  const [show3DViewer, setShow3DViewer] = useState(true);
  const [currentPreset, setCurrentPreset] = useState(0);
  const [exposure, setExposure] = useState(1.0);
  const [shadowIntensity, setShadowIntensity] = useState(0.3);
  const [isLoading, setIsLoading] = useState(true);
  const [showPresets, setShowPresets] = useState(false);
  const modelViewerRef = useRef<HTMLElement & { cameraOrbit?: string; cameraTarget?: string; exposure?: number; shadowIntensity?: number }>(null);

  useEffect(() => {
    if (modelViewerRef.current) {
      const viewer = modelViewerRef.current as any;
      viewer.addEventListener('load', () => {
        setIsLoading(false);
      });
      viewer.addEventListener('error', () => {
        setIsLoading(false);
      });
    }
  }, []);

  // Close presets dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showPresets && !(event.target as Element).closest('.presets-container')) {
        setShowPresets(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPresets]);

  const resetView = () => {
    if (modelViewerRef.current) {
      const viewer = modelViewerRef.current as any;
      const preset = CAMERA_PRESETS[currentPreset];
      if (viewer.cameraOrbit !== undefined) {
        viewer.cameraOrbit = preset.orbit;
      }
      if (viewer.cameraTarget !== undefined) {
        viewer.cameraTarget = preset.target;
      }
    }
  };

  const setCameraPreset = (index: number) => {
    if (modelViewerRef.current) {
      const viewer = modelViewerRef.current as any;
      const preset = CAMERA_PRESETS[index];
      if (viewer.cameraOrbit !== undefined) {
        viewer.cameraOrbit = preset.orbit;
      }
      if (viewer.cameraTarget !== undefined) {
        viewer.cameraTarget = preset.target;
      }
      setCurrentPreset(index);
      setShowPresets(false);
    }
  };

  const adjustExposure = (delta: number) => {
    const newExposure = Math.max(0.1, Math.min(3.0, exposure + delta));
    setExposure(newExposure);
    if (modelViewerRef.current) {
      const viewer = modelViewerRef.current as any;
      if (viewer.exposure !== undefined) {
        viewer.exposure = newExposure;
      }
    }
  };

  const toggleFullscreen = () => {
    if (modelViewerRef.current) {
      const viewer = modelViewerRef.current as any;
      if (viewer.requestFullscreen) {
        viewer.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60 h-[600px]">
      {show3DViewer ? (
        <div className="relative h-full w-full bg-gradient-to-br from-slate-800 to-slate-900">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-slate-900/80">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
                <p className="text-white text-sm">Loading 3D model...</p>
              </div>
            </div>
          )}
          <div className="w-full h-full flex items-center justify-center">
            <model-viewer
              ref={modelViewerRef}
              src="/8_20_2025.glb"
              alt="Truxor T50 amphibious machine 3D model"
              auto-rotate
              camera-controls
              camera-orbit={CAMERA_PRESETS[currentPreset].orbit}
              camera-target={CAMERA_PRESETS[currentPreset].target}
              field-of-view="45deg"
              exposure={exposure}
              shadow-intensity={shadowIntensity}
              shadow-softness="0.5"
              environment-image="neutral"
              skybox-image=""
              ar
              ar-modes="webxr scene-viewer quick-look"
              interaction-prompt="none"
              interaction-policy="allow-when-focused"
              style={{width: '100%', height: '100%'}}
            />
          </div>
          
          {/* Camera Presets Dropdown */}
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
            <div className="relative presets-container">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPresets(!showPresets)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Camera className="h-4 w-4 mr-1" />
                Views
              </Button>
              {showPresets && (
                <div className="absolute right-0 top-full mt-2 bg-slate-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-2 min-w-[180px] shadow-xl z-30">
                  {CAMERA_PRESETS.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => setCameraPreset(index)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center gap-2 ${
                        currentPreset === index
                          ? "bg-emerald-500 text-slate-950"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {preset.icon}
                      {preset.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShow3DViewer(!show3DViewer)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {show3DViewer ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                {show3DViewer ? "Hide" : "Show"} 3D
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetView}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                title="Reset to current view"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustExposure(-0.2)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                title="Decrease brightness"
              >
                <Moon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustExposure(0.2)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                title="Increase brightness"
              >
                <Sun className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                title="Fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              variant={isExploded ? "default" : "outline"}
              size="sm"
              onClick={() => setIsExploded(!isExploded)}
              className={isExploded ? "bg-emerald-500 text-slate-950" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}
            >
              {isExploded ? "Assembled" : "Exploded"} View
            </Button>
          </div>
          
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            <Badge className="bg-emerald-500 text-slate-950">
              3D Model
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">
              <Smartphone className="h-3 w-3 mr-1" />
              AR Available
            </Badge>
          </div>
          
          {/* Claw trademark in bottom right */}
          <div className="absolute bottom-3 right-3 z-10">
            <img
              src="/images/graphics/clawssss.svg"
              alt="Water Raptor trademark"
              className="w-8 h-8 opacity-80"
              style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7499%) hue-rotate(200deg) brightness(100%) contrast(100%)' }}
            />
          </div>
        </div>
      ) : (
        <div className="relative h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🚤</div>
            <div className="text-lg font-semibold text-white mb-2">
              {isExploded ? "Exploded View" : "Truxor T50 3D Model"}
            </div>
            <div className="text-sm text-slate-300 mb-4">
              Click "Show 3D" to view the interactive model
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShow3DViewer(!show3DViewer)}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Eye className="h-4 w-4 mr-1" />
              Show 3D Model
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

