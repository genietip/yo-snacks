import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';

export const SCENE_DURATIONS: Record<string, number> = {
  hook: 4000,
  product: 6000,
  flavors: 5000,
  lifestyle: 5000,
  certifications: 5000,
  outro: 5000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  hook: Scene1,
  product: Scene2,
  flavors: Scene3,
  lifestyle: Scene6,
  certifications: Scene4,
  outro: Scene5,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const bgColors = [
  '#1A1A1A',
  '#1A1A1A',
  '#1A1A1A',
  '#0F0F0F',
  '#111111',
  '#1A1A1A',
];

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const AUDIO_SEEK_EPSILON_SEC = 0.18;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden font-body">
        {/* Persistent background */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: bgColors[sceneIndex] ?? '#1A1A1A' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Ambient glow orb — drifts across scenes */}
        <motion.div
          className="absolute rounded-full filter blur-[120px] opacity-25 pointer-events-none"
          style={{ width: '60vw', height: '60vw' }}
          animate={{
            x: ['-15vw', '50vw', '20vw', '-10vw', '45vw'][sceneIndex] ?? '0vw',
            y: ['-5vh', '10vh', '40vh', '-10vh', '20vh'][sceneIndex] ?? '0vh',
            backgroundColor: ['#FF4D4D', '#FFE000', '#FF4D4D', '#B8D4A8', '#FFE000'][sceneIndex] ?? '#FF4D4D',
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Floating grid accent — transforms with scene */}
        <motion.div
          className="absolute w-[2px] bg-white/10 pointer-events-none"
          animate={{
            left: ['8vw', '85vw', '15vw', '75vw', '50vw'][sceneIndex] ?? '50vw',
            top: '0',
            height: '100vh',
            opacity: [0.12, 0.06, 0.15, 0.08, 0.04][sceneIndex] ?? 0.1,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Persistent yellow accent bar */}
        <motion.div
          className="absolute h-[3px] bg-[#FFE000] pointer-events-none"
          animate={{
            left: ['0%', '30%', '60%', '10%', '40%'][sceneIndex] ?? '0%',
            width: ['40%', '25%', '35%', '50%', '20%'][sceneIndex] ?? '30%',
            top: ['15%', '85%', '50%', '25%', '70%'][sceneIndex] ?? '50%',
            opacity: sceneIndex === 4 ? 0.3 : 0.8,
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        <AnimatePresence mode="popLayout">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
      </div>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </>
  );
}
