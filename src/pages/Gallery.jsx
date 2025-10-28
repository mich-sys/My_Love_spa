import PageCard from '../components/PageCard.jsx';
import BackHomeLink from '../components/BackHomeLink.jsx';
import { galleryItems } from '../data/gallery.js';

export default function Gallery() {
  return (
    <PageCard>
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#b9c5ff]/70">illustrated memories</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#f0e6ff]">Our Memory Lane</h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-[2rem] border border-[#2f365c]/60 bg-[#11172f]/70 shadow-[0_18px_44px_rgba(12,18,44,0.6)]"
          >
            {item.mediaType === 'video' && item.video ? (
              <video
                src={item.video}
                controls
                poster={item.thumbnail}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            )}
          </div>
        ))}
      </div>

      <BackHomeLink />
    </PageCard>
  );
}
