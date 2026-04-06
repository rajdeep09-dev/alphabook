import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { cn } from '../lib/utils';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  videoClassName?: string;
  poster?: string;
  fadeTop?: boolean;
  fadeBottom?: boolean;
}

export function VideoBackground({ src, className, videoClassName, poster, fadeTop, fadeBottom }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !src) return;

    const video = videoRef.current;
    let hls: Hls | null = null;

    if (Hls.isSupported() && src.endsWith('.m3u8')) {
      hls = new Hls({
        autoStartLoad: true,
        startPosition: -1,
        capLevelToPlayerSize: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log('Auto-play blocked', e));
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl') || !src.endsWith('.m3u8')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.log('Auto-play blocked', e));
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden z-0", className)}>
      <video
        ref={videoRef}
        className={cn("absolute inset-0 w-full h-full object-cover", videoClassName)}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
      />
      {fadeTop && (
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-background to-transparent z-[1]" />
      )}
      {fadeBottom && (
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent z-[1]" />
      )}
    </div>
  );
}