// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE ONLY.
// Every name, photo, message and line of copy on the site comes
// from this one object. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const birthdayData = {
  // Names
  boyName: 'Mirchi Pakoda',
  girlName: 'Appu',

  // Media — replace these two files, keep the same filenames,
  // and everything on the site updates automatically.
  photo: '/images/birthday.jpeg',
  music: '/music/ily.mp3',

  // SECTION 1 — Opening gate
  opening: {
    lineOne: 'Some days are special...',
    lineTwo: "But today is a little more special.",
    lineThree: "Because it's your day.",
    cta: 'Open Your Surprise',
  },

  // SECTION 2 — Hero
  hero: {
    title: 'Happy Birthday',
    subtitle: 'Today is all about celebrating you.',
    smallLine: "And honestly... you deserve a little more than just a birthday wish.",
  },

  // SECTION 3 — The message
  message: {
    heading: 'A Little Something For You',
    body: `Happy Birthday to someone who has become a really special part of my life.

I don't know if words will ever be enough to explain how much you mean to me, but today I just want you to know one thing — I'm genuinely grateful that you exist.

You have this beautiful way of making ordinary moments feel special. Your smile, your presence, your little habits, even the things you probably don't notice about yourself... somehow they all became things I quietly started loving.

I hope this new year of your life brings you everything you've been wishing for — happiness, peace, success, and countless reasons to smile.

And selfishly, I hope I get to be there for many of those smiles.

So today, forget everything else for a moment.

Just know that somewhere in this world, there is someone who is incredibly happy that you were born.

Happy Birthday.`,
  },

  // SECTION 4 — One photo, one memory
  memory: {
    heading: 'One Picture. So Many Feelings.',
    textOne: 'Maybe it\u2019s just one picture, but sometimes one picture is enough to hold a thousand feelings.',
    textTwo: "Some moments don't need hundreds of pictures to become unforgettable.",
  },

  // SECTION 5 — Things I wish for you (icon name must match lucide-react export)
  wishes: [
    { icon: 'Sparkles', title: 'More happiness', description: 'In the smallest, quietest moments of your everyday life.' },
    { icon: 'BookHeart', title: 'More beautiful memories', description: 'Ones worth holding onto, and worth looking back on.' },
    { icon: 'Trophy', title: 'More success', description: 'In everything you set your mind and heart toward.' },
    { icon: 'Smile', title: 'More reasons to smile', description: 'Even on the days that don\u2019t make it easy to.' },
  ],
  wishesFooter: 'And maybe... a little more of me in your life.',

  // SECTION 6 — Interactive surprise
  surprise: {
    intro: "Wait... there's one more thing.",
    buttonLabel: 'Open It',
    revealMessage: 'Whatever this year brings, I hope you never forget how special you are.',
    revealSubMessage: 'Happy Birthday, {boyName}.',
    signaturePrefix: 'With love,',
  },

  // SECTION 7 — Final cinematic screen
  final: {
    heading: 'Happy Birthday, {boyName}',
    lineOne: 'May this year be kinder, brighter,',
    lineTwo: 'and more beautiful than you imagine.',
    lineThree: 'Keep smiling.',
    lineFour: 'You look good doing it.',
    footer: 'Made with love by {girlName}',
  },
};

export default birthdayData;
