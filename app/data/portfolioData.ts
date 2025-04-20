import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCode, faDatabase, faCloud, faPalette, faTerminal, faSyncAlt, faPuzzlePiece, faPhone, faFileCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import bubbleBrawlTitle from '@/assets/images/bubble-brawl-title.webp';
import characters from '@/assets/images/characters.webp';
import inGame from '@/assets/images/in-game.webp';
import evaluationForm from '@/assets/images/evaluation-form.webp';
import graph from '@/assets/images/graph.webp';
import login from '@/assets/images/login.webp';
import patientList from '@/assets/images/patient-list.webp';
import portfolioAbout from '@/assets/images/portfolio-about.webp';
import portfolioSkills from '@/assets/images/portfolio-skills.webp';

export interface Skill {
    name: string;
    description: string;
    icon: Component;
}

export interface Project {
    title: string;
    description: string;
    images: string[];
    tags: string[];
    link: string;
    currentImageIndex: number;
}

export interface Testimonial {
    name: string;
    position: string;
    avatar: string;
    quote: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: Component;
}

export interface About {
    text: string;
}

export interface PortfolioData {
    name: string;
    email: string;
    phone: string;
    about: About[];
    headline: string;
    introduction: string;
    heroImage: string;
    footerTagline: string;
    skills: Skill[];
    projects: Project[];
    socialLinks: SocialLink[];
}

const email: string = "denalitherrien@gmail.com";
const phone: string = "+1 (306)-212-8881";

const portfolioData: PortfolioData = {
    name: 'Denali Therrien',
    email: email,
    phone: phone,
    about: [
        {
            text: 'Hello! Denali Therrien, a passionate developer and ' +
                'designer with over 2 years of experience ' +
                'creating intuitive and impactful digital experiences. I believe in combining creative thinking ' +
                'with technical expertise to build solutions that not only work flawlessly but also delight users.'
        },
        {
            text: 'My fascination with technology began in the computer labs at school, ' +
                'where I developed my skills through creative exploration and pushing  ' +
                'system boundaries — discovering how things worked by occasionally finding their limits. ' +
                'Since then, I\'ve cultivated my skills across various domains of software development, ' +
                'from frontend frameworks to backend architectures. I\'m particularly interested ' +
                'in user experience design and accessibility, ensuring that everything I create ' +
                'can be enjoyed by everyone.'
        },
        {
            text: 'When I\'m not coding, you can find me reading my latest fantasy fixation, playing ' +
                'competitive video games, ' +
                'or calculating the odds of surviving that next encounter in my D&D campaign. ' +
                'I believe in continuous learning and am currently enjoying web development'
        }
    ],
    headline: 'Creative Developer & UI/UX Designer',
    introduction: 'I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I specialize in creating applications with Vue.js and crafting beautiful user interfaces.',
    heroImage: '',
    footerTagline: 'Building digital products, brands, and experiences',
    skills: [
        {name: 'Vue.js', description: 'Front-end framework', icon: faCode },
        {name: 'Database Management', description: 'Administration', icon: faDatabase },
        {name: 'Cloud Infrastructure', description: 'AWS and Azure', icon: faCloud },
        {name: 'UI/UX Design', description: 'User-centered design', icon: faPalette },
        {name: 'Node.js', description: 'Backend development', icon: faTerminal },
        {name: 'Git', description: 'Version control', icon: faSyncAlt },
        {name: 'Tailwind CSS', description: 'Utility-first CSS', icon: faFileCode },
        {name: 'API Integration', description: 'REST', icon: faPuzzlePiece },
    ],
    projects: [
        {
            title: 'Bubble Brawl',
            description: 'A local multiplayer platformer created during the Saskatoon Global Game Jam 2025',
            images: [bubbleBrawlTitle, characters, inGame],
            tags: ['godot'],
            link: 'https://ltngkarbn.itch.io/bubble-brawl',
            currentImageIndex: 0
        },
        {
            title: 'Hippotherapy Research',
            description: 'A session tracker application that took 8 months and 4 agile releases to develop',
            images: [login, patientList, evaluationForm, graph],
            tags: ['Flutter', 'Firebase', 'ASP.NET'],
            link: 'https://hippotherapy.ca',
            currentImageIndex: 0
        },
        {
            title: 'Portfolio Website',
            description: 'A custom portfolio website template with smooth animations and a responsive design.',
            images: [portfolioAbout, portfolioSkills],
            tags: ['Vue.js', 'Tailwind CSS'],
            link: 'https://github.com/denalitherrien/denalitherrien.github.io',
            currentImageIndex: 0
        },
    ],
    socialLinks: [
        { name: 'GitHub', url: 'https://github.com/denalitherrien', icon: faGithub },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/denali-therrien-987144246/', icon: faLinkedin }
    ],
};

export default portfolioData;
