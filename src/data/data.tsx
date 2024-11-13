import {
  ArrowDownTrayIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background.webp';
import florals from '../images/florals.png';
import porfolioImage9 from '../images/portfolio/engagement.jpg';
import porfolioImage1 from '../images/portfolio/p1.jpg';
import porfolioImage2 from '../images/portfolio/p2.jpg';
import porfolioImage3 from '../images/portfolio/p3.jpg';
import porfolioImage4 from '../images/portfolio/p4.jpg';
import porfolioImage5 from '../images/portfolio/p5.jpg';
import porfolioImage6 from '../images/portfolio/p6.jpg';
import porfolioImage7 from '../images/portfolio/p7.jpg';
import porfolioImage8 from '../images/portfolio/p8.jpg';
import porfolioImage11 from '../images/praiano.png';
import porfolioImage10 from '../images/sorrento.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  // SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Home',
  Contact: 'RSVP',
  Portfolio: 'Events',
  Resume: 'Welcome',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Notes',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Insiya And Ryan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">We're getting married! </strong>,
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Details',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: porfolioImage9,
  description: `We look forward to sharing this special day with you and all our other loved ones.`,
  aboutItems: [
    {label: 'Location', text: 'Toronto,ON', Icon: MapIcon},
    {label: 'Date', text: 'Oct 4th 2025', Icon: SparklesIcon},
    {label: 'Time', text: '5pm', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Spoken languages',
//     skills: [
//       {
//         name: 'English',
//         level: 10,
//       },
//       {
//         name: 'French',
//         level: 4,
//       },
//       {
//         name: 'Spanish',
//         level: 3,
//       },
//     ],
//   },
//   {
//     name: 'Frontend development',
//     skills: [
//       {
//         name: 'React',
//         level: 9,
//       },
//       {
//         name: 'Typescript',
//         level: 7,
//       },
//       {
//         name: 'GraphQL',
//         level: 6,
//       },
//     ],
//   },
//   {
//     name: 'Backend development',
//     skills: [
//       {
//         name: 'Node.js',
//         level: 8,
//       },
//       {
//         name: 'Rust',
//         level: 5,
//       },
//       {
//         name: 'Golang',
//         level: 4,
//       },
//     ],
//   },
//   {
//     name: 'Mobile development',
//     skills: [
//       {
//         name: 'React Native',
//         level: 9,
//       },
//       {
//         name: 'Flutter',
//         level: 4,
//       },
//       {
//         name: 'Swift',
//         level: 3,
//       },
//     ],
//   },
// ];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Oct 2025',
    location: 'Mississauga',
    title: 'Mehndi',
    content: <p>Private ceremony with Insiya's family</p>,
  },
  {
    date: 'Oct 2025',
    location: 'Brampton/Toronto',
    title: 'Roce',
    content: <p>Private ceremony with Ryan's family</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 4th 2025 5pm sharp',
    location: 'Toronto',
    title: 'Storys Wedding Ceremony',
    content: (
      <p>
         Join us as we tie the knot.
      </p>
    ),
  },
  {
    date: 'Oct 5 6pm',
    location: 'Toronto',
    title: 'Storys Wedding Reception',
    content: (
      <p>
        Let's celebrate
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: florals,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'RSVP',
  description: 'Please RSVP with any dietary restrictions. Also let us know your favourite song to get you moving on the dancefloor',
  items: [
    {
      type: ContactType.Email,
      text: 'insiyaryan@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Instagram,
      text: '@insiyaryan',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'insiyaryan',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
