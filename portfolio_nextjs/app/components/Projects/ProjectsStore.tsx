interface Project {
    name: string;
    image: string;
    description: string;
    skills: string[];
    demoLink: string;
    codeLink: string;
}

const web2Projects:Project[] = [
    {
        "name": "Devnode",
        "image": "/assets/project_images/devnode.png",
        "description": "A community-based web platform where people can post their needs for team members to participate \
        alongside them in upcoming hackathons, coding events and opensource projects.",
        "skills": [
            "Flask",
            "Javascript",
            "BootStrap",
            "Twilio"
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/Devnode",
        "codeLink": "https://github.com/yaswanthsaivendra/Devnode",
    },
    {
        "name": "convoHub",
        "image": "/assets/project_images/web2/convoHub.png",
        "description": "A chat server app which concerns about expressing the human feelings and mood to the maximum extent possible",
        "skills": [
            "Django",
            "django-channels",
            "Tailwind CSS",
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/convoHub",
        "codeLink": "https://github.com/yaswanthsaivendra/convoHub",
    },

]


const blockchainProjects:Project[] = [
    {
        "name": "SocialXchange",
        "image": "/assets/project_images/blockchain/socialXchange.png",
        "description": "A platform where individuals earn and sell social credits to companies for fulfilling Corporate Social \
        Responsibility (CSR) goals. Users engage in social activities, earning credits in education, health, hunger, environment, \
        and more. Companies purchase credits using cryptocurrency (MATIC) for transparent CSR fulfillment.",
        "skills": [
            "Solidity",
            "Hardhat",
            "React",
            "Polygon"
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/socialXchange",
        "codeLink": "https://github.com/yaswanthsaivendra/socialXchange",
    },
    {
        "name": "homeStay",
        "image": "/assets/project_images/blockchain/homeStay.png",
        "description": "HomeStay is a decentralized P2P home rental service application. It uses the concepts of Smart Contract based agreements and Timebased wallet transactions in manging the \
        rental service.",
        "skills": [
            "Solidity",
            "React",
            "Truffle",
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/homeStay",
        "codeLink": "https://github.com/yaswanthsaivendra/homeStay",
    },
]



const otherProjects:Project[] = [
    {
        "name": "The Noob Pentester",
        "image": "/assets/project_images/others/theNoobPentester.png",
        "description": "It consists of 3 CLI tools that can be helpful in the Network Reconnaissance phase. Tools have the \
        capability of performing Host scanning, ARP Scanning, ARP Spoofing and 802.11 wireless de-authentication attacks.",
        "skills": [
            "Python",
            "Scapy",
            "Networks",
            "Reconnaissance"
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/the_noob_pentester",
        "codeLink": "https://github.com/yaswanthsaivendra/the_noob_pentester",
    },
    {
        "name": "Automate",
        "image": "/assets/project_images/others/automate.png",
        "description": "AUTOMATE is a Desktop startup application which always runs in background helping students to attend the meeting on time. Student just have to schedule his time table in the application ,he can also change from time to time. Student have to give their meeting links to the application. It is very helpful for the student who doesn’t want to miss a class.",
        "skills": [
            "Python",
            "Tkinter",
            "Twilio"
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/Code-Innovation-Series-SVNIT",
        "codeLink": "https://github.com/yaswanthsaivendra/Code-Innovation-Series-SVNIT",
    },
]


export const Categories:{
    name: string;
    projects: Project[];
}[] = [
    {
        name: 'Web 2.0',
        projects: web2Projects
    },
    {
        name: 'Blockchain',
        projects: blockchainProjects
    },
    {
        name: 'CLI/Desktop',
        projects: otherProjects
    },
]