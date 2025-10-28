import { useEffect, useState } from 'react';
import { spotifyEmbedUrl } from '../data/spotify.js';

export default function MusicPlayerBar() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsReady(true), 300);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 w-[min(480px,90%)] -translate-x-1/2 rounded-[1.5rem] border border-[#6b7fff]/50 bg-[#0b1026]/80 p-2 shadow-[0_15px_40px_rgba(11,16,38,0.55)] backdrop-blur">
      <iframe
        title="Spotify soundtrack"
        src={spotifyEmbedUrl}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="pointer-events-auto rounded-[1.2rem]"
      ></iframe>
    </div>
  );
}
