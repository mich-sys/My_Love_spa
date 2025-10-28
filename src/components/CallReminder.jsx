import { useCallback } from 'react';

export default function CallReminder() {
  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.alert('remember you can always call me');
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
  className="call-reminder-floating group fixed bottom-24 right-6 z-50 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#ffcef6]/60 bg-[#2b1a44]/80 text-[#ffe5fa] shadow-[0_18px_40px_rgba(34,10,46,0.55)] backdrop-blur transition hover:border-[#ffd9ff] hover:shadow-[0_22px_48px_rgba(40,16,54,0.65)]"
    >
      <span className="sr-only">remember you can always call me</span>
  <span className="pointer-events-none absolute inset-0 h-full w-full rounded-full bg-[#ffcef6]/20 opacity-0 transition group-hover:opacity-70"></span>
  <span className="pointer-events-none absolute inset-0 h-full w-full rounded-full border border-[#ffdaf8]/40 opacity-0 transition group-hover:opacity-70"></span>
  <span className="pointer-events-none absolute inset-0 h-full w-full rounded-full border border-[#ffdaf8]/40 opacity-0 transition group-hover:scale-110 group-hover:opacity-70"></span>
  <span className="pointer-events-none absolute top-3 right-3 h-2 w-2 rounded-full bg-[#ffd9ff] opacity-80"></span>
  <span className="pointer-events-none absolute top-3 right-3 h-2 w-2 rounded-full bg-[#ffd9ff] opacity-60 animate-ping"></span>
      <svg
        aria-hidden="true"
        className="pointer-events-none h-7 w-7 text-[#ffe9ff] transition group-hover:scale-110"
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
    </button>
  );
}
