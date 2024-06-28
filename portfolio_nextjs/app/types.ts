type Project = {
    name: string,
    image: string,
    description: string,
    skills: string[],
    demoLink: string,
    codeLink: string,
}

type WorkExperience = {
    date : string,
    title : string,
    company? : string,
    companyUrl? : string,
    location : string,
    skills : string[],
}

export type { Project, WorkExperience };
