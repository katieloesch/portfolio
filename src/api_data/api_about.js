import { aboutIcons } from './../assets/icons/icons_about';

const intros = [
  "Hi! I'm Katie. I'm a full-stack developer with a background in biomedical science, currently based in London.",
  "I'm passionate about designing user-centric applications and building purpose-driven solutions. I'm currently open to job opportunities where I can contribute, learn and grow.",
];

const abouts = [
  {
    title: 'background.',
    description:
      'As a biomedical science graduate, I had the opportunity to work with databases that store genetic data and algorithms for comparing sequence information. This experience sparked my interest in how software and technology can be used to improve and innovate healthcare and medical research.',
    imgUrl: aboutIcons.background,
  },
  {
    title: 'coding journey.',
    description:
      'My interest in coding led me to join the General Assembly software engineering immersive course to secure a solid foundation in programming fundamentals to build upon. I’m currently looking for opportunities to further develop my skills and learn new languages, frameworks and technologies.',
    imgUrl: aboutIcons.codingJourney,
  },
  {
    title: 'interests.',
    description:
      "I'm fascinated by sci-fi books, movies, and TV shows like Star Trek and Black Mirror that have often predicted technological advancements before they became mainstream, such as video calls, mobile phones, wireless headphones, credit cards, solar power and AI.",
    imgUrl: aboutIcons.interests,
  },
];

const media = [
  {
    name: 'techlore',
    img: '',
    alt: '',
    url: '',
    description: '',
  },
  {
    name: 'the new oil',
    img: '',
    alt: '',
    url: '',
    description: '',
  },
  {
    name: 'Lama dev',
    img: '',
    alt: '',
    url: '',
    description: '',
  },
  {
    name: 'Andy Sterkowitz',
    img: '',
    alt: '',
    url: 'https://www.youtube.com/@AndySterkowitz',
    description: '',
  },
];

const aboutData = {
  intros: intros,
  abouts: abouts,
  media: media,
};

export { aboutData };
