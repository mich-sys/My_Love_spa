import { Link, useParams } from 'react-router-dom';
import PageCard from '../components/PageCard.jsx';
import BackHomeLink from '../components/BackHomeLink.jsx';
import { letters } from '../data/letters.js';

export default function LetterDetail() {
  const { letterId } = useParams();
  const letter = letters.find((item) => item.id === letterId);

  if (!letter) {
    return (
      <PageCard>
        <h2 className="text-3xl font-semibold text-[#ffd5ff]">Letter not found</h2>
        <p className="mt-2 text-[#d7ccff]">Let\'s head back and pick another envelope.</p>
        <Link
          to="/letters"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[#ffbfee]/70 bg-[#2b1a3f]/70 px-6 py-3 font-semibold text-[#fddcff] transition hover:border-[#ffdffc]"
        >
          &lt; Back to Letters
        </Link>
        <BackHomeLink />
      </PageCard>
    );
  }

  return (
    <PageCard>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ffc6ea]/50 bg-gradient-to-br from-[#281432]/85 via-[#1f1636]/90 to-[#171233]/90 px-10 py-12 text-center shadow-[0_28px_72px_rgba(22,8,38,0.65)]">
        <span className="pointer-events-none absolute -left-24 top-10 h-40 w-40 rounded-full bg-[#ffbde8]/25 blur-[120px]" aria-hidden="true"></span>
        <span className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#92a7ff]/30 blur-[140px]" aria-hidden="true"></span>

        <p className="text-sm uppercase tracking-[0.35em] text-[#ffd6f8]/80">sealed with starlight</p>
        <h2 className="mt-5 text-3xl font-semibold text-[#ffe9ff]">{letter.title}</h2>
        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-[#f0ddff]">{letter.body}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/letters"
            className="inline-flex items-center gap-2 rounded-full border border-[#ffc6f3]/70 bg-[#2b1c44]/80 px-6 py-3 text-sm font-semibold text-[#ffeaff] transition hover:border-[#ffe0fb] hover:shadow-[0_0_30px_rgba(255,198,243,0.35)]"
          >
            <span aria-hidden="true">↺</span>
            Back to letters
          </Link>
          <BackHomeLink />
        </div>
      </div>
    </PageCard>
  );
}
