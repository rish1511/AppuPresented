# A Birthday Surprise 🕯️

A cinematic, one-photo birthday website built with React, Vite, Tailwind CSS, and Framer Motion.

## 1. Install dependencies

You need [Node.js](https://nodejs.org) 18+ installed. Then, inside this folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.

## 3. Add the photo

Replace the placeholder file at:

```
public/images/birthday.jpg
```

Just drop your real photo in with **that exact same filename** — a portrait-orientation photo works best for the hero section, but a landscape photo also looks good since it's reused with a wide crop in the memory section. If you'd rather use a different filename or format (`.png`, `.webp`), update the `photo` path in the one config file (see step 5).

## 4. Add the music (optional)

Put a song file at:

```
public/music/birthday.mp3
```

Music never autoplays — there's a small floating button in the bottom-right corner for the person to press if they want it. If you don't add a file, that button just stays quietly disabled; nothing breaks.

## 5. The one file you edit

Everything personal — both names, every line of text, the birthday letter, the four wishes, and the file paths for the photo/music — lives in:

```
src/data/birthdayData.js
```

Open it, change the values, save. You don't need to touch any component file. A few notes:
- `boyName` and `girlName` are used everywhere automatically, including inside message strings that contain `{boyName}` or `{girlName}`.
- `message.body` is one template string — leave blank lines between paragraphs, since that's how the letter section knows where to break.
- `wishes` is a list of 4 cards; each needs an `icon` name (from [lucide-react](https://lucide.dev/icons/), e.g. `"Sparkles"`, `"Trophy"`, `"Heart"`), a `title`, and a `description`.

## 6. Changing the colors

Open `tailwind.config.js` and edit the hex values under `theme.extend.colors`:

| Token      | Used for                                  |
|------------|--------------------------------------------|
| `noir`     | main background (near-black)               |
| `noirDeep` | deeper background blends                   |
| `wine`     | mid-tone gradient burgundy                 |
| `crimson`  | buttons, borders, accents                  |
| `rose`     | glow highlights, icons, hearts             |
| `blush`    | primary text color                         |
| `dust`     | secondary/muted text                       |

Change `crimson` and `rose` first if you want a different overall mood (e.g. more pink, more deep red, or a completely different accent color) — most of the site's color comes from those two.

## 7. Changing the text

Almost all text is in `src/data/birthdayData.js` (step 5). The only text living in components is a couple of static section headings that don't need personalizing (e.g. "Things I Wish For You" in `src/components/sections/Wishes.jsx`) — edit those directly in the component file if you want to reword them.

## 8. Deploying it

The easiest free options, in order of simplicity:

**Vercel**
```bash
npm run build
npx vercel deploy --prod
```

**Netlify**
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

Or drag-and-drop: run `npm run build`, then drag the generated `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) — no account needed for a quick share link.

Once deployed, send the link. Open it once yourself first on your own phone to make sure the photo and (if added) music show up correctly.

---

### Project structure

```
src/
  components/
    MusicPlayer.jsx        floating play/pause button
    FloatingParticles.jsx  ambient drifting hearts
    sections/
      OpeningGate.jsx       full-screen intro sequence
      Hero.jsx              main title + the photo
      Message.jsx           the letter
      Memory.jsx            the photo again, different treatment
      Wishes.jsx            4 wish cards
      Surprise.jsx          click-to-reveal card
      Finale.jsx            closing screen
  data/
    birthdayData.js        ← the one file you edit
  App.jsx
  main.jsx
  index.css
public/
  images/birthday.jpg      ← replace with the real photo
  music/birthday.mp3       ← optional, add your own
```

No backend, no database, no tracking — it's a fully static site once built.
