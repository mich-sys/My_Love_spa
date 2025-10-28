import { useState } from 'react';
import PageCard from '../components/PageCard.jsx';
import BackHomeLink from '../components/BackHomeLink.jsx';
import { reasons } from '../data/reasons.js';

export default function Reasons() {
  const [currentReason, setCurrentReason] = useState('Click the button below!');

  const handleNextReason = () => {
    if (!reasons.length) {
      setCurrentReason('I could list reasons forever, but let\'s start with your smile.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * reasons.length);
    const newReason = reasons[randomIndex];
    setCurrentReason(newReason);
  };

  return (
    <PageCard>
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#ffc7ff]/70">love notes</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#ffe1ff]">A Few Reasons...</h2>
        <p className="mt-2 text-[#d8c9ff]">Because reminders are wonderful.</p>
      </div>

      <div className="mt-10 rounded-[1.8rem] border border-[#f7baff]/50 bg-[#22163f]/70 p-8 text-center shadow-[0_20px_50px_rgba(18,10,35,0.55)]">
        <p className="text-xl font-medium text-[#ffe4ff]">{currentReason}</p>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={handleNextReason}
          className="rounded-full border border-[#ff9fea] bg-gradient-to-r from-[#ff9fea] via-[#ffbbe0] to-[#ffcfe0] px-8 py-3 text-base font-semibold text-[#2b1740] transition hover:brightness-110"
        >
          Show Another Reason
        </button>
      </div>

      <BackHomeLink />
    </PageCard>
  );
}
