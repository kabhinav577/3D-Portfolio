import { bseb, cbse, codingNinjas, vksu, hablar } from '../assets/images';
import {
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
    title: 'Soft Skills Training',
    company_name: 'Hablar',
    icon: hablar,
    iconBg: '#accbe1',
    date: 'Oct 2023 - Present',
    points: [
      'Engaged in group activities and discussions to reinforce learned concepts and apply them in real-world scenarios.',
      ' Developed interpersonal skills to build positive relationships with colleagues, clients, and stakeholders.',
      'Utilized teamwork and collaboration strategies in group projects, reflecting the importance of these skills in a development team.',
    ],
  },
  {
    title: 'Full Stack Developer Training',
    company_name: 'Coding Ninjas',
    icon: codingNinjas,
    iconBg: '#fbc3bc',
    date: 'Dec 2022 - Present',
    points: [
      'Applied theoretical knowledge to real-world projects, gaining practical insights into MERN stack development.',
      'Collaborated with peers on projects, simulating a team-based development environment.',
      'Demonstrated adaptability by learning and working with a wide range of technologies within the MERN stack.',
    ],
  },
  {
    title: 'Java and Data Structures & Algorithms (DSA) Program',
    company_name: 'Coding Ninjas',
    icon: codingNinjas,
    iconBg: '#b7e4c7',
    date: 'Dec 2022 - April 2023',
    points: [
      'Gained proficiency in Java programming language, mastering its syntax, data structures, and object-oriented programming (OOPs) concepts.',
      'Developed a strong foundation in Data Structures & Algorithms, enhancing problem-solving skills and algorithmic thinking.',
      'Acquired knowledge of key programming paradigms and design principles, contributing to writing efficient and scalable code.',
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

export const educations = [
  {
    name: 'Full Stack Development',
    academic_name: 'Coding Ninjas',
    place: 'Online',
    date: '2022-2023',
    icon: codingNinjas,
    iconBg: '#accbe1',
    points: [
      'Developed strong problem-solving skills through algorithmic challenges and coding exercises.',
      'Developed a comprehensive understanding of how data flows between the front-end and back-end, ensuring seamless communication.',
      'Implemented secure user authentication using industry-standard practices, ensuring user data protection.',
      'Willingness to acquire new skills and knowledge, embracing a continuous learning mindset.',
    ],
  },
  {
    name: "Bachelor's Of Science",
    academic_name: 'Veer Kunwar Singh University (VKSU)',
    place: 'Arrah, Bihar',
    date: '2018-2021',
    icon: vksu,
    iconBg: '#fbc3bc',
    points: [
      "Completed Bachelor's degree in Science with a 68% score, showcasing a solid foundation in a diverse range of subjects.",

      'Actively engaged in self-directed learning during free time, focusing on programming and IT-related subjects.',

      'Demonstrated a commitment to continuous learning, staying updated with the latest advancements in the tech industry.',

      'Showcase adaptability by successfully transitioning from a science background to pursuing a passion in technology.',
    ],
  },
  {
    name: 'Intermediate Of Science',
    academic_name: 'Bihar Secondary Educational Board (BSEB)',
    place: 'Dehri, Bihar',
    date: '2016-2018',
    icon: bseb,
    iconBg: '#b7e4c7',
    points: [
      'Completed Intermediate education with a 55% score in the PCM (Physics, Chemistry, Mathematics) stream.',
      'Engaged with challenging problems in Physics, Chemistry, and Mathematics, fostering the ability to tackle complex issues.',
      'Acquired cross-functional skills by navigating through different science subjects, showcasing adaptability and versatility.',
      'Embraced a mindset of continuous learning, recognizing that challenges are opportunities for growth.',
    ],
  },
  {
    name: 'Matriculation',
    academic_name: 'Central Board of Secondary Education (CBSE)',
    place: 'Aurangabad, Bihar',
    date: '2016',
    icon: cbse,
    iconBg: '#a2d2ff',
    points: [
      'Achieved a perfect CGPA of 10, reflecting consistent high performance across all subjects in the CBSE curriculum.',
      'Successfully managed time to balance multiple subjects, assignments, and extracurricular activities.',
      'Demonstrated punctuality and regular attendance, contributing to a disciplined academic environment.',
      'Shared knowledge and insights with classmates, contributing to a collaborative learning environment.',
    ],
  },
];
