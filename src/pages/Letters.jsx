import { Link } from 'react-router-dom';
import PageCard from '../components/PageCard.jsx';
import BackHomeLink from '../components/BackHomeLink.jsx';
import { letters } from '../data/letters.js';

export default function Letters() {
  return (
    <PageCard>
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#ffc6e9]/70">sealed for you</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#fde6ff]">Open When...</h2>
        <p className="mt-2 text-[#dfcdfd]">Choose a moment and open a note written just for you.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {letters.map((letter) => (
          <Link
            key={letter.id}
            to={`/letters/${letter.id}`}
            className="group relative overflow-hidden rounded-[2.2rem] border border-[#ffb1eb]/50 bg-gradient-to-br from-[#2d163a]/85 via-[#2a183c]/85 to-[#1f142e]/85 px-7 py-8 text-center text-lg font-semibold text-[#fbe6ff] shadow-[0_20px_48px_rgba(34,12,46,0.6)] transition hover:border-[#ffd2f4]/70 hover:shadow-[0_26px_60px_rgba(42,14,54,0.65)]"
          >
            <span className="pointer-events-none absolute -top-32 right-8 h-40 w-40 rounded-full bg-[#ffbde8]/25 blur-3xl transition group-hover:scale-110 group-hover:opacity-90" aria-hidden="true"></span>
            <span className="pointer-events-none absolute -bottom-36 left-6 h-44 w-44 rounded-full bg-[#9aa9ff]/20 blur-[120px] transition group-hover:scale-105 group-hover:opacity-100" aria-hidden="true"></span>

            <span className="relative inline-flex items-center justify-center rounded-full border border-[#ffc6f1]/70 bg-[#3a1c4b]/70 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#ffd6f8]">
              open me
            </span>
            <span className="mt-6 flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="h-12 w-12 text-[#ffe0f9] transition group-hover:scale-110"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 20c0-2.209 1.791-4 4-4h40c2.209 0 4 1.791 4 4v24c0 2.209-1.791 4-4 4H12c-2.209 0-4-1.791-4-4V20z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 22l22 16L54 22"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="relative mt-6 text-base font-semibold text-[#feeaff]">{letter.label}</p>
          </Link>
        ))}
      </div>

      <BackHomeLink />
    </PageCard>
  );
}
