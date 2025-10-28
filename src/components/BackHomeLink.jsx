import { Link } from 'react-router-dom';

export default function BackHomeLink() {
  return (
    <div className="mt-10 text-center">
      <Link
        to="/home"
        className="inline-flex items-center justify-center rounded-full border border-[#f7c6f6]/60 bg-[#fdf2ff]/10 px-7 py-2 text-sm font-semibold text-[#f7c6f6] backdrop-blur transition hover:border-[#fdf2ff] hover:bg-[#fdf2ff]/20"
      >
        Home
      </Link>
    </div>
  );
}
