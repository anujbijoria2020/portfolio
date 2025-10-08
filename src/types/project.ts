export type Project = {
    logo:string,
    title:string,
    description:string,
    techStack?:string[],
    link:string,
    source?:string
}

export interface Heading {
    title: string
}

export interface Blog {
    id: string;
    title: string;
    author: string;
    createdAt: string;
    image_public_id: string;
    content: string;
}

export interface I_Education {
    institute_link?: string,
    institute_logo: string,
    course_title: string,
    ending_date: string,
    institute_name: string,
    cgpa: number,
}