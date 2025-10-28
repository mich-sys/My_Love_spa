import { Link } from 'react-router-dom';
import PageCard from '../components/PageCard.jsx';

export default function NotForYou() {
  return (
    <PageCard>
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#ffb6cf]/80">access denied</p>
        <h2 className="mt-6 text-3xl font-semibold text-[#ffe7f6]">This website is not for you.</h2>
        <p className="mt-4 text-[#d9c9ff]">
          Only The Chosen Heart can step through this doorway. If that is you, try again. Otherwise, thank you for understanding.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-[#f7c6f6]/60 bg-[#2a1839]/70 px-7 py-3 text-sm font-semibold text-[#f7c6f6] transition hover:border-[#ffdff9]"
        >
          Return to gate
        </Link>
      </div>
    </PageCard>
  );
}
