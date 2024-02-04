export type Experience = {
    period: string;
    duration: string;
    grade: string;
    job: string;
    points: string[];
    logo: string;
    videoThumbnail?: string;
    videoUrl?: string;
    imageUrl?: string;
}

export type MenuItem = {
    name: string;
};

// export type User = {
//     name: string;
//     position: string;
//     avatarUrl: string;
//     topLeftIcon: React.ReactNode;
//     bottomRightIcon: React.ReactNode;
// }

export type User = {
    name: string;
    position: string;
    avatarUrl: string;
    topLeftIcon: boolean;
    bottomRightIcon: string;
    rate: number;
}

export type Card = {
    title: string;
    description: string;
    rate: number;
    users: User[];
}