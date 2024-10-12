
export type Qualification = {
    title: string;
    subtitle: string;
    date: string;
    target: string;
    src: string;
}


export type Achievement = {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    img: string;
    icon: string;
}

export type Contact = {
    title: string;
    value: string;
    href: string;
    img: string;
}


export type NavbarItem = {
    title: string;
    img: string;
}

export type Project = {
    title: string;
    slug: string;
    thumbnail: string;
    color: string;
    tags: string[];
    description: string;
    src: string;
    imageDetails: {
        img: string;
        color: string;
        type: number; // 0 landscape, 1 portrait
        width: number;
        height: number;
    }[]
}


export type Tag = {
    name: string;
    color: string;
    icon: string;
    slug?: string;
}