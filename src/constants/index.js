import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  messenger,
  tailwindcss,
  weather,
  threads,
  typescript,
  bootstrap,
  music,
  java,
  figma,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },

  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: bootstrap,
    name: 'Bootstrap',
    type: 'Frontend',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'Backend',
  },
  {
    imageUrl: figma,
    name: 'Figma',
    type: 'Designing',
  },
];

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: messenger,
    theme: 'btn-back-blue',
    name: 'Messenger Clone App',
    description:
      'Designed and developed a real-time messaging application using cutting-edge technologies to emulate the user experience of popular messaging platforms.',
    link: 'https://github.com/kabhinav577/Messenger-app',
  },
  {
    iconUrl: music,
    theme: 'btn-back-green',
    name: 'Lyriks Music Player App',
    description:
      'Lyriks Music application offers an immersive music playback experience, allowing users to explore and enjoy their favorite tunes in a seamless and intuitive manner.',
    link: 'https://github.com/kabhinav577/Lyrix_Music_App',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Social Media App',
    description:
      'Built a SocioVerse App, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/kabhinav577/SocioVerse',
  },
  {
    iconUrl: weather,
    theme: 'btn-back-green',
    name: 'Weather Forecast App',
    description:
      'WeatherForecast is a dynamic weather application offering users real-time weather information and forecasts for locations worldwide. ',
    link: 'https://github.com/kabhinav577/weather_app',
  },
  {
    iconUrl: music,
    theme: 'btn-back-green',
    name: 'Mini Ipod',
    description:
      'Developed a nostalgic iPod simulator application using React class components to recreate the iconic UI and UX of the classic iPod.',
    link: 'https://github.com/kabhinav577/iPod-Classic',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-red',
    name: 'Issue Tracker App',
    description:
      'Developed a robust issue tracker application using Node.js and Express.js on the backend, coupled with EJS for dynamic templating and Bootstrap for a clean and responsive user interface.',
    link: 'https://github.com/kabhinav577/IssueTracker_App',
  },
];
