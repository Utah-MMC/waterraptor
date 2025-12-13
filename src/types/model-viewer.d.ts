declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': {
      src: string;
      alt?: string;
      'auto-rotate'?: boolean;
      'camera-controls'?: boolean;
      'camera-orbit'?: string;
      'camera-target'?: string;
      'field-of-view'?: string;
      'exposure'?: number;
      'shadow-intensity'?: number;
      'shadow-softness'?: string;
      'environment-image'?: string;
      'skybox-image'?: string;
      'ar'?: boolean;
      'ar-modes'?: string;
      'interaction-prompt'?: string;
      'interaction-policy'?: string;
      style?: React.CSSProperties;
      className?: string;
      ref?: React.Ref<any>;
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'model-viewer': {
      cameraOrbit: string;
      cameraTarget: string;
      exposure?: number;
      shadowIntensity?: number;
      requestFullscreen?: () => void;
      addEventListener?: (event: string, callback: () => void) => void;
    } & HTMLElement;
  }
}
