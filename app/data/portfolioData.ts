// Define types for portfolio data
    interface Skill {
        name: string;
        description: string;
        icon: string;
    }

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

interface Testimonial {
    name: string;
    position: string;
    avatar: string;
    quote: string;
}

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

interface About {
    text: string;
}

interface PortfolioData {
    name: string;
    about: About[];
    headline: string;
    introduction: string;
    heroImage: string;
    footerTagline: string;
    skills: Skill[];
    projects: Project[];
    testimonials: Testimonial[];
    socialLinks: SocialLink[];
}

const portfolioData: PortfolioData = {
    name: 'Denali Therrien',
    about: [
        { text: 'Hello! Denali Therrien, a passionate developer and' +
                'designer with over 2 years of experience' +
                'creating intuitive and impactful digital experiences. I believe in combining creative thinking' +
                'with technical expertise to build solutions that not only work flawlessly but also delight users.'},
        { text: 'My fascination with technology began in the computer labs at school,' +
                'where I developed my skills through creative exploration and pushing' +
                'system boundaries—discovering how things worked by occasionally finding their limits.' +
                'Since then, I\'ve cultivated my skills across various domains of software development,' +
                'from frontend frameworks to backend architectures. I\'m particularly interested' +
                'in user experience design and accessibility, ensuring that everything I create' +
                'can be enjoyed by everyone.'},
        { text: 'When I\'m not coding, you can find me reading my latest fantasy fixation, playing' +
                'competitive video games,' +
                'or calculating the odds of surviving that next encounter in my D&D campaign.' +
                'I believe in continuous learning and am currently enjoying web development'}
    ],
    headline: 'Creative Developer & UI/UX Designer',
    introduction: 'I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I specialize in creating applications with Vue.js and crafting beautiful user interfaces.',
    heroImage: '',
    footerTagline: 'Building digital products, brands, and experiences',
    skills: [
        { name: 'Vue.js', description: 'Front-end framework', icon: 'fab fa-vuejs' },
        { name: 'Database Management', description: 'Administration', icon: 'fab fa-db' },
        { name: 'Cloud Infrastructure', description: 'AWS and Azure', icon: 'fas fa-cloud' },
        { name: 'UI/UX Design', description: 'User-centered design', icon: 'fas fa-pencil-ruler' },
        { name: 'Node.js', description: 'Backend development', icon: 'fab fa-node-js' },
        { name: 'Git', description: 'Version control', icon: 'fab fa-git-alt' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS', icon: 'fas fa-paint-brush' },
        { name: 'API Integration', description: 'REST', icon: 'fas fa-plug' }
    ],
    projects: [
        // Game Jam, Hippotherapy Profile
        {
            title: 'Bubble Brawl',
            description: 'A local multiplayer platformer created during the Saskatoon Global Game Jam 2025',
            image: '',
            tags: ['godot'],
            link: 'https://ltngkarbn.itch.io/bubble-brawl'
        },
        {
            title: 'Hippotherapy Research',
            description: 'An class group project that took 8 months and 4 agile releases to develop',
            image: '',
            tags: ['Flutter', 'Firebase', 'ASP.NET'],
            link: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'A custom portfolio website template with smooth animations and a responsive design.',
            image: '',
            tags: ['Vue.js', 'GSAP', 'Tailwind CSS'],
            link: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'A weather dashboard that displays forecasts based on user location with interactive maps.',
            image: '',
            tags: ['Vue.js', 'TypeScript', 'OpenWeatherAPI'],
            link: '#'
        },
        {
            title: 'Blog Platform',
            description: 'A full-featured blog platform with rich text editing, comments, and analytics.',
            image: '',
            tags: ['Vue.js', 'Nuxt.js', 'MongoDB'],
            link: '#'
        },
        {
            title: 'Music Player',
            description: 'A streaming music player with playlist management and audio visualization.',
            image: '',
            tags: ['Vue.js', 'TypeScript', 'Web Audio API'],
            link: '#'
        }
    ],
    testimonials: [
        {
            name: 'Sarah Johnson',
            position: 'CEO, TechStart',
            avatar: '',
            quote: 'John delivered an exceptional website that exceeded our expectations. His attention to detail and creative approach transformed our online presence.'
        },
        {
            name: 'Michael Chen',
            position: 'Product Manager, InnovateX',
            avatar: '',
            quote: 'Working with John was a pleasure. He understood our requirements perfectly and delivered a polished product on time and on budget.'
        },
        {
            name: 'Emily Rodriguez',
            position: 'Marketing Director, GrowthLabs',
            avatar: '',
            quote: 'John\'s work on our web application dramatically improved user engagement. His UI/UX skills are top-notch, and he\'s incredibly responsive to feedback.'
}
],
socialLinks: [
    { name: 'GitHub', url: 'https://github.com/denalitherrien', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/denali-therrien-987144246/', icon: 'fab fa-linkedin' },
]
};

export default portfolioData;
