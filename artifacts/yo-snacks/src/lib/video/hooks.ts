import { useState, useEffect } from 'react';

declare global {
  interface Window {
    startRecording?: () => void;
    stopRecording?: () => void;
  }
}

export function useVideoPlayer({ durations }: { durations: Record<string, number> }) {
  const [currentScene, setCurrentScene] = useState(0);
  const keys = Object.keys(durations);
  
  useEffect(() => {
    window.startRecording?.();
    let hasCompletedFirstPass = false;

    let totalElapsed = 0;
    let current = 0;
    let timer: any;

    const runLoop = () => {
      const currentDuration = durations[keys[current]];
      timer = setTimeout(() => {
        current = (current + 1) % keys.length;
        if (current === 0 && !hasCompletedFirstPass) {
          hasCompletedFirstPass = true;
          window.stopRecording?.();
        }
        setCurrentScene(current);
        runLoop();
      }, currentDuration);
    };

    runLoop();
    return () => clearTimeout(timer);
  }, []);

  return { currentScene };
}
