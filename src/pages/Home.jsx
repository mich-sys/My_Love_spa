import { Link } from 'react-router-dom';
import PageCard from '../components/PageCard.jsx';

const navLinks = [
  { to: '/reasons', label: 'Reasons I Love You', color: 'from-[#f6b7ff] to-[#ff9fd9]' },
  { to: '/quiz', label: 'Our Relationship Quiz', color: 'from-[#a8c3ff] to-[#cfa8ff]' },
  { to: '/gallery', label: 'Memory Lane Gallery', color: 'from-[#ffb3c6] to-[#ffe0b5]' },
  { to: '/letters', label: 'Open When... Letters', color: 'from-[#a0ffe8] to-[#b6d7ff]' },
  { to: '/playlist', label: 'Our Songs Playlist', color: 'from-[#ffcf9f] to-[#ff9fcf]' }
];

const highlights = [
  {
    title: 'Constellation of Notes',
    tag: 'letters',
    body: 'Love letters, reasons, and stories gathered in one glowing place.'
  },
  {
    title: 'Soundtrack on Standby',
    tag: 'playlist',
    body: 'A curated playlist that waits for your cue to fill the room.'
  },
  {
    title: 'Moments in Bloom',
    tag: 'memories',
    body: 'Illustrated memories refreshed in a night-sky palette.'
  }
];

export default function Home() {
  return (
    <PageCard>
      <div className="space-y-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ffc6ff]/40 bg-[#120d2c]/80 px-10 py-16 text-center shadow-[0_28px_80px_rgba(16,6,38,0.65)]">
          <div className="pointer-events-none absolute -left-24 top-0 h-60 w-60 rounded-full bg-[#ffb3ec]/25 blur-3xl" aria-hidden="true"></div>
          <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#8fbaff]/25 blur-[120px]" aria-hidden="true"></div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,196,255,0.2),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(154,201,255,0.18),transparent_62%)]" aria-hidden="true"></div>
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.35em] text-[#ffb6ff]/80">my evening bloom</p>
            <h1 className="mt-4 text-4xl font-semibold text-[#fde6ff]">Welcome, My Love! <span aria-hidden="true">♥</span></h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-[#d4c8ff]">
              Everything past these gates glows with the moments we have shared. Choose where to wander first and I will
              keep the soundtrack humming softly in the background.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`group inline-flex items-center justify-between rounded-[1.5rem] border border-transparent bg-gradient-to-r ${link.color} px-7 py-4 text-base font-semibold text-[#1a1233] transition hover:shadow-[0_20px_40px_rgba(34,12,45,0.35)]`}
            >
              <span>{link.label}</span>
              <span className="rounded-full border border-[#1a1233]/20 bg-[#000000]/10 px-3 py-1 text-xs font-semibold text-[#1a1233]/70">
                Enter
              </span>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#3f4679]/60 bg-gradient-to-br from-[#171b38]/85 via-[#13162f]/85 to-[#10142a]/85 p-7 text-left shadow-[0_26px_70px_rgba(10,14,34,0.65)] transition hover:border-[#aebaff]/60 hover:shadow-[0_30px_80px_rgba(19,26,54,0.65)]"
            >
              <div className="pointer-events-none absolute -top-28 left-10 h-36 w-36 rounded-full bg-[#ffbde8]/25 blur-3xl opacity-70 transition group-hover:scale-125 group-hover:opacity-100" aria-hidden="true"></div>
              <div className="pointer-events-none absolute -bottom-32 right-0 h-40 w-40 rounded-full bg-[#87b7ff]/25 blur-3xl opacity-60 transition group-hover:scale-110 group-hover:opacity-90" aria-hidden="true"></div>

              <div className="relative space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ffcdfa]/50 bg-[#2b1a44]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#ffcdfa]">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.tag}</span>
                </span>
                <h3 className="text-xl font-semibold text-[#f5ecff]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#c9cdff]">{item.body}</p>
                <span className="block h-px w-16 bg-gradient-to-r from-[#ffbde8]/80 via-[#ffd7ff]/40 to-transparent"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageCard>
  );
}
