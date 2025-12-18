export interface Project {
    id: string;
    title: string;
    category: string;
    date: string;
    month: string;
    description: string;
    image: string;
    instagramUrl: string;
    stats: {
        beneficiaries: string;
        volunteers: string;
        hours: string;
        value: string;
    };
    gallery?: string[];
}

export const projects: Project[] = [
    // Example data removed
    // Real projects start here
    {
        id: "7",
        title: "Leo Orientation",
        category: "Youth Development",
        date: "2025-09-30",
        month: "September",
        description: "The main objective of the orientation was to introduce students to the mission, vision, and structure of the LEO Club and its parent organization, Lions Clubs International. The session aimed to highlight the core values of the LEO movement—Leadership, Experience, and Opportunity—and show how these principles translate into real-world service and personal growth. Another key goal was to encourage more students to participate in volunteer activities, develop leadership skills, and contribute positively to their community. Ultimately, the orientation sought to spark enthusiasm, teamwork, and a lifelong passion for humanitarian service among the youth.",
        image: "/logo.png",
        instagramUrl: "", // No instagram post provided
        stats: {
            beneficiaries: "42",
            volunteers: "0",
            hours: "2",
            value: "N/A",
        },
    },
    {
        id: "8",
        title: "EcoTide",
        category: "Environment",
        date: "2025-11-18",
        month: "November",
        description: "The main objective of the Eco Tide project was to restore the cleanliness and natural beauty of Soul Beach by reducing the growing levels of waste and pollution. Through a structured cleanup initiative, we aimed to create a safer, healthier, and more enjoyable environment for the surrounding community, beachgoers, and tourists. Another key objective was to protect marine life and the coastal ecosystem by removing harmful plastics and debris that pose long-term environmental threats. The project also sought to raise awareness about environmental responsibility and promote sustainable habits among the public. Additionally, through active participation, the project aimed to provide Leo members with opportunities to develop leadership, teamwork, and community service skills while working together to create positive, lasting change.",
        image: "/globe.svg",
        instagramUrl: "https://www.instagram.com/p/DRSQlP1ifw9/",
        stats: {
            beneficiaries: "20",
            volunteers: "20",
            hours: "3",
            value: "N/A",
        },
    }
];

export const allMonths = ["July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"];
export const allCategories = ["Environment", "Health", "Youth", "Community", "Education"];
