

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];
export const myProjects = [
  {
    title: 'Patronus - Consent Manager Platform',
    desc: 'Patronus Consent Manager is a powerful Software-as-a-Service platform that simplifies data privacy and compliance management. With features like a policy engine, purpose-driven consent management, a secure data privacy vault, DSAR workflows, consent logs with expiry tracking, it provides businesses with an all-in-one solution for managing privacy and regulatory requirements.',
    subdesc:
      'Built using Next.js, Tailwind CSS, TypeScript, Django, Flask, and integrated with Keycloak for secure authentication, Patronus Consent Manager delivers a scalable, secure, and seamless experience for privacy compliance and consent management.',
    href: 'https://getpatronus.com/',
    spotlight: '/1.png',
    tags: [
      {
        id: 1,
        name: 'Next Js',
        icon: 'SiNextdotjs',
      },
      {
        id: 2,
        name: 'Django',
        icon: 'SiDjango',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        icon: 'SiTailwindcss',
      },
      {
        id: 4,
        name: 'Flask',
        icon: 'SiFlask',
      },
      {
        id: 5,
        name: 'TypeScript',
        icon: 'SiTypescript',
      },
    ],
  },
  {
    title: 'Techsnap - EdTech Platform',
    desc: 'Techsnap is a comprehensive Learning Management System (LMS) offered as a Software-as-a-Service solution for educational institutions. The platform streamlines the entire learning process with features like course management, student progress tracking, automated assessment systems, and real-time analytics. Working on the backend, I implemented robust APIs, automated task scheduling, and scalable cloud infrastructure to support thousands of concurrent users.',
    subdesc: 'Developed using Django REST Framework for API development, Celery for asynchronous task processing, containerized with Docker for consistent deployment, and hosted on AWS for scalability and reliability.',
    href: 'https://techsnap.in',
    spotlight: '/2.png',
    tags: [
      {
        id: 1,
        name: 'Django',
        icon: 'SiDjango',
      },
      {
        id: 2,
        name: 'AWS',
        icon: 'FaAws',
      },
      {
        id: 3,
        name: 'Docker',
        icon: 'FaDocker',
      },
      {
        id: 4,
        name: 'Celery',
        icon: 'SiCelery',
      }
    ],
  },
  {
    title: 'DomSell - Domain Reselling Marketplace',
    desc: 'DomSell is an innovative mobile marketplace designed for buying and selling premium domain names. The platform features a sleek user interface, real-time domain availability checking, secure payment processing, and an intelligent domain valuation system. Users can easily list their domains, negotiate prices through an in-app chat system, and complete transactions securely.',
    subdesc: 'Built as a mobile-first application using React Native and Node.js, with Clerk for authentication and TailwindCSS for styling. The app delivers a smooth, native-like experience while maintaining robust security for domain transactions.',
    href: 'https://domsell.store/',
    spotlight: '/3.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        icon: 'FaReact',
      },
      {
        id: 2,
        name: 'Node.js',
        icon: 'FaNode',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        icon: 'SiTailwindcss',
      }
    ],
  },
  {
    title: 'UnStartED - EdTech Platform',
    desc: 'UnStartED is a comprehensive online learning platform offering job-assured certification programs in executive management. The platform features hands-on learning with India-specific case studies, direct networking opportunities with industry experts, and dedicated placement assistance. Students gain practical insights through real-world case studies of companies like Tata Nano, Flipkart, and Ola.',
    subdesc: 'Built with Django REST Framework for robust API development, containerized with Docker for seamless deployment, and hosted on AWS for scalability. The frontend utilizes JavaScript for interactive learning experiences.',
    href: 'https://unstarted.in/',
    spotlight: '/4.png',
    tags: [
      {
        id: 1,
        name: 'Django',
        icon: 'SiDjango',
      },
      {
        id: 2,
        name: 'Docker',
        icon: 'FaDocker',
      },
      {
        id: 3,
        name: 'AWS',
        icon: 'FaAws',
      }
    ],
  },
  {
    title: 'Helpful Genie - AI Powered Chat',
    desc: 'Oro is a generative AI chatbot designed for e-commerce and retail, enhancing customer interactions with seamless sales and service support. With 70% of people preferring chat or messaging for quicker solutions, Oro ensures they find what they need efficiently.',
    subdesc: 'Built using Python and Flask for the backend API, with a modern frontend styled using TailwindCSS. The platform delivers an intelligent, responsive chatbot experience that accelerates sales and improves customer service.',
    href: 'https://www.helpfulgenie.app/',
    spotlight: '/5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        icon: 'FaPython',
      },
      {
        id: 2,
        name: 'Flask',
        icon: 'SiFlask',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        icon: 'SiTailwindcss',
      }
    ],
  }
];


export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];