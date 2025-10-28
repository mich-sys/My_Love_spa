import PropTypes from 'prop-types';

export default function PageCard({ children }) {
  return (
    <div className="starfield flex min-h-screen flex-col items-center pb-32 pt-12">
      <div className="relative w-full max-w-5xl px-4">
        <div className="rounded-[2.5rem] border border-indigo-500/40 bg-gradient-to-br from-slate-900/70 via-[#1c1f3a]/80 to-slate-900/60 p-[3px] shadow-[0_30px_80px_rgba(12,15,40,0.55)]">
          <div className="rounded-[2.3rem] bg-gradient-to-br from-[#1f1c3d]/95 via-[#261636]/95 to-[#1a1c44]/90 p-10 text-[#f4ecff]">
            {children}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] blur-3xl" aria-hidden="true"></div>
      </div>
    </div>
  );
}

PageCard.propTypes = {
  children: PropTypes.node.isRequired
};
