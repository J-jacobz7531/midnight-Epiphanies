export interface Post {
    id: number;
    categories: Array<{
        name: string;
        tag: string;
    }>;
    title: string;
    imageUrl: string;
    excerpt: string;
    link: string;
}

export interface TeamMember {
    name: string;
    title: string;
    imageUrl: string;
    bio?: string;
}
