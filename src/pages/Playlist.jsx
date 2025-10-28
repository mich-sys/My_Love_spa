import { useEffect, useState } from 'react';
import PageCard from '../components/PageCard.jsx';
import BackHomeLink from '../components/BackHomeLink.jsx';
import { spotifyShareUrl, spotifyEmbedUrl } from '../data/spotify.js';

export default function Playlist() {
  const [playerKey, setPlayerKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAssist, setShowAssist] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowAssist(false);

    if (typeof window === 'undefined') {
      return undefined;
    }

    const timer = window.setTimeout(() => setShowAssist(true), 4500);
    return () => window.clearTimeout(timer);
  }, [playerKey]);

  const handleLoad = () => {
    setIsLoading(false);
    setShowAssist(false);
  };

  const handleRefresh = () => {
    setPlayerKey((prev) => prev + 1);
  };

  return (
    <PageCard>
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#9fe9ff]/70">nightfall soundtrack</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#e5f6ff]">Our Playlist</h2>
        <p className="mt-2 text-[#cfe7ff]">Let the Spotify mix set the mood.</p>
      </div>

      <div className="mt-10 space-y-6">
        <div className="rounded-[1.8rem] border border-[#4b517a]/70 bg-[#141533]/80 p-8 text-left shadow-[0_20px_60px_rgba(14,15,48,0.55)]">
          <h3 className="text-xl font-semibold text-[#f1f5ff]">Let's make sure the music is ready</h3>
          <ol className="mt-4 space-y-3 text-sm text-[#cfe7ff]">
            <li>1. Welcome Love of My Life, this page opens automatically to confirm Spotify playback.</li>
            <li>2. If you see the player at the bottom, press play there to start the soundtrack.</li>
            <li>3. If nothing appears, open the playlist directly, sign in to Spotify, then return here.</li>
          </ol>
          {showAssist ? (
            <div className="mt-5 rounded-2xl border border-[#ffbfd8]/60 bg-[#2c1e40]/70 px-4 py-3 text-sm text-[#ffd9f1]">
              Spotify sometimes throws an “upstream connect” message when it needs a moment. Use the refresh button below or pop the playlist open in a new tab—once Spotify signs you in, the player will settle in here.
            </div>
          ) : null}
        </div>

        <div className="rounded-[1.6rem] border border-[#6b7fff]/40 bg-[#0b1026] p-2 shadow-[0_18px_40px_rgba(11,16,38,0.55)]">
          {isLoading ? (
            <p className="pb-2 text-center text-xs uppercase tracking-[0.3em] text-[#9fe9ff]/70">loading player...</p>
          ) : null}
          <iframe
            title="Spotify playlist preview"
            key={playerKey}
            src={spotifyEmbedUrl}
            width="100%"
            height="200"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            onLoad={handleLoad}
            className="rounded-[1.2rem]"
          ></iframe>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleRefresh}
            className="inline-flex items-center justify-center rounded-full border border-[#9fe9ff]/70 bg-[#113148]/70 px-6 py-2 text-sm font-semibold text-[#9fe9ff] transition hover:border-[#c5f4ff] hover:text-white"
          >
            Refresh player
          </button>
          <a
            href={spotifyShareUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#ffcbff]/60 bg-[#2b1f42]/70 px-6 py-2 text-sm font-semibold text-[#ffdfff] transition hover:border-[#ffe9ff] hover:bg-[#392454]"
          >
            Open playlist in Spotify (new tab)
          </a>
        </div>
      </div>

      <BackHomeLink />
    </PageCard>
  );
}
