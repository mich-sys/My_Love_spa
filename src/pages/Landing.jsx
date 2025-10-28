import { useState } from 'react';
import PropTypes from 'prop-types';
import PageCard from '../components/PageCard.jsx';

export default function Landing({ onAuthorize, onReject }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = name.trim();
    const normalized = trimmed.toLowerCase();

    if (normalized === 'naomi') {
      onAuthorize();
      setError('');
      return;
    }

    setError('Sorry, this constellation only unlocks for Naomi.');
    onReject();
  };

  return (
    <PageCard>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#9ec9ff]/80">private invitation</p>
        <h1 className="mt-6 text-4xl font-semibold text-[#f6e9ff]">Who is visiting tonight?</h1>
        <p className="mt-4 text-[#d5d0ff]">
          This space was crafted for a single heart. Type the magic name to reveal the stories woven inside.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div className="rounded-3xl border border-[#4a5e9f]/60 bg-[#141a34]/70 p-2 shadow-[0_16px_40px_rgba(13,19,45,0.55)]">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-[1.5rem] border border-transparent bg-[#0b1024] px-6 py-4 text-lg text-[#f2f5ff] focus:border-[#b8c6ff] focus:outline-none"
            />
          </div>
          {error ? <p className="text-sm text-[#ffadc2]">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-full border border-[#ffc7ff]/70 bg-gradient-to-r from-[#ffc0ff] via-[#ffd2f4] to-[#ffe3ff] px-8 py-3 text-base font-semibold text-[#201437] transition hover:brightness-110"
          >
            Unlock
          </button>
        </form>
      </div>
    </PageCard>
  );
}

Landing.propTypes = {
  onAuthorize: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired
};
