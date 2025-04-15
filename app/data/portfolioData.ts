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

interface PortfolioData {
    name: string;
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
    name: 'John Doe',
    headline: 'Creative Developer & UI/UX Designer',
    introduction: 'I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I specialize in creating applications with Vue.js and crafting beautiful user interfaces.',
    heroImage: '',
    footerTagline: 'Building digital products, brands, and experiences',
    skills: [
        { name: 'Vue.js', description: 'Front-end framework', icon: 'fab fa-vuejs' },
        { name: 'TypeScript', description: 'Typed JavaScript', icon: 'fab fa-js' },
        { name: 'Responsive Design', description: 'Mobile-first approach', icon: 'fas fa-mobile-alt' },
        { name: 'UI/UX Design', description: 'User-centered design', icon: 'fas fa-pencil-ruler' },
        { name: 'Node.js', description: 'Backend development', icon: 'fab fa-node-js' },
        { name: 'Git', description: 'Version control', icon: 'fab fa-git-alt' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS', icon: 'fas fa-paint-brush' },
        { name: 'API Integration', description: 'REST & GraphQL', icon: 'fas fa-plug' }
    ],
    projects: [
        {
            title: 'E-commerce Platform',
            description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
            image: '',
            tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
            link: '#'
        },
        {
            title: 'Task Management App',
            description: 'A drag-and-drop task management application with real-time updates and team collaboration features.',
            image: '',
            tags: ['Vue.js', 'Firebase', 'TypeScript'],
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
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'GitHub', url: '#', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' },
    { name: 'Dribbble', url: '#', icon: 'fab fa-dribbble' }
]
};

export default portfolioData;
