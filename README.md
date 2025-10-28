<h1 align="center">
	<span>My Love SPA</span>
</h1>

A responsive single-page React experience crafted as a heartfelt digital gift. The app features six interactive views with a Name-only gate and Spotify-powered soundtrack.

## Features

- "Evening Bloom" visual theme with glassmorphism cards, starfield backdrop, and  hero mockups
- Name-only landing gate: personalize with a name challenge before revealing the experience
- Randomized "Reasons I Love You" affirmations
- Multi-question relationship quiz with score reveal
- Memory lane gallery featuring a concept art thumbnails (or videos when added)
- "Open When..." letter collection with detail views
- Playlist view with an embedded Spotify playlist for shared listening

## Tech Stack

- React + Vite
- React Router DOM
- Tailwind CSS

## Scripts

```bash
npm install   # install dependencies
npm run dev   # start the development server
npm run build # create a production build
npm run preview # preview the production build locally
```

## Tailwind CSS

Tailwind directives are defined in `src/index.css`. Run `npm run dev` (or `npm run build`) to compile Tailwind classes via PostCSS.

## Audio Notes

- The soundtrack now relies entirely on the Spotify embed in `src/pages/Playlist.jsx`. Update `spotifyShareUrl` to change the playlist.
- If you want to reintroduce local audio later, create a `public/audio` directory, add tracks, and rewire `App.jsx` along with a custom player component.
- Authorization is handled in `src/App.jsx`; adjust the `Landing` and `NotForYou` pages if you want a different greeting flow or to accept additional names.
