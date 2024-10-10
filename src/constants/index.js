export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Ayesha Khan',
    position: 'Project Manager at Online Bookstore',
    img: 'assets/review1.png', // Make sure to replace this with the correct path to your image
    review:
      'Working with Mohd Areeb has been a game changer for our online bookstore. He transformed our platform into a user-friendly and visually appealing site, and his dedication to quality is evident in every aspect of the project.',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    position: 'Co-founder of E-Learning Hub',
    img: 'assets/review2.png', // Replace with the correct image path
    review:
      'Areeb’s expertise in Java and React was crucial for developing our e-learning platform. The solutions he delivered were robust and scalable, leading to a significant increase in our user engagement and satisfaction. Highly recommended!',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    position: 'Director of Tech Innovations',
    img: 'assets/review3.png', // Update with the appropriate image path
    review:
      'Mohd Areeb exceeded our expectations during the project. He took our complex requirements and turned them into an efficient, functional website. His problem-solving skills and attention to detail are exceptional.',
  },
  {
    id: 4,
    name: 'Vinay Kapoor',
    position: 'CEO of Retail Solutions',
    img: 'assets/review4.png', // Ensure this path is correct
    review:
      'It was a pleasure collaborating with Areeb. He perfectly understood our needs and delivered a website that not only met but exceeded our expectations. His skills in both frontend and backend development are outstanding!',
  },
];

export const myProjects = [
  {
    title: 'Online Bookstore Management',
    desc: 'A comprehensive platform for managing an online bookstore, allowing users to browse, purchase, and review books, with an admin interface for inventory management and sales tracking.',
    subdesc:
      'Built with Java, Spring, Hibernate, and MySQL, this system ensures a seamless user experience for both customers and admins, providing advanced features like search, categorization, and secure payment integration.',
    href: 'https://your-online-bookstore-link.com',
    texture: '/textures/project/online-bookstore.mp4',
    logo: '/assets/project-logo-bookstore.png',
    logoStyle: {
      backgroundColor: '#FFDEAD',
      border: '0.2px solid #CD853F',
      boxShadow: '0px 0px 60px 0px #D2691E4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.svg',
      },
      {
        id: 2,
        name: 'Spring',
        path: '/assets/spring.svg',
      },
      {
        id: 3,
        name: 'Hibernate',
        path: '/assets/hibernate.svg',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/mysql.svg',
      },
    ],
  },
  {
    title: 'Portfolio 3D',
    desc: 'A dynamic and interactive 3D portfolio showcasing skills, projects, and contact details using cutting-edge web technologies.',
    subdesc:
      'Created with React.js, Three.js, and TailwindCSS, this portfolio integrates AOS (Animate On Scroll) and provides an immersive experience for visitors, including smooth animations and responsive design.',
    href: 'https://your-portfolio-3d-link.com',
    texture: '/textures/project/portfolio3d.mp4',
    logo: '/assets/project-logo-portfolio3d.png',
    logoStyle: {
      backgroundColor: '#0A2540',
      border: '0.2px solid #1A5276',
      boxShadow: '0px 0px 60px 0px #2E86C14D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Three.js',
        path: '/assets/threejs.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'AOS',
        path: '/assets/aos.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'TRISECT',
    pos: 'Java Developer',
    duration: 'October 2023 - March 2024',
    title:
      'At TRISECT, I worked as a Java Developer where I developed an Online Bookstore Management system. Using Java, Spring, Hibernate, and MySQL, I built efficient backend services and implemented core features such as user management, book cataloging, and order processing.',
    icon: '/assets/java.svg',
    animation: 'clapping',
  },
];
