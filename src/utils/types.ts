export interface Experience {
    period: string;
    duration: string;
    grade: string;
    job: string;
    points: string[];
    logo: string; // Assuming logo is a React component
    videoThumbnail?: string;
    videoUrl?: string;
    imageUrl?: string;
}