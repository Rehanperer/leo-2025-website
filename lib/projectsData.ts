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
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Signature Coastal Cleanup & Restoration",
        category: "Environment",
        date: "2024-08-25",
        month: "August",
        description: "Our club's flagship project for the year, focusing on the restoration of the Negombo coastal belt. This massive operation involved over 150 volunteers from 5 different Leo clubs. We successfully removed over 500kg of plastic waste and planted 200 mangrove saplings to prevent coastal erosion. The day concluded with an environmental awareness session for the local fishing community, educating them on sustainable waste disposal practices. This project was recognized as the 'Best Environmental Project' at the quarterly district awards.",
        image: "/globe.svg",
        instagramUrl: "https://www.instagram.com/p/C-abc12345", // Placeholder: Replace with a real link like https://www.instagram.com/p/CwKvX....
        stats: {
            beneficiaries: "3000+",
            volunteers: "150",
            hours: "750",
            value: "LKR 650,000",
        },
    },
    {
        id: "2",
        title: "Vision for All",
        category: "Health",
        date: "2024-08-10",
        month: "August",
        description: "Free eye checkup camp organized for rural communities. Provided free spectacles to 300 elderly individuals. Doctors from the National Eye Hospital volunteered their time to perform screenings for cataracts and glaucoma.",
        image: "/window.svg",
        instagramUrl: "https://www.instagram.com/p/C_987654321",
        stats: {
            beneficiaries: "500+",
            volunteers: "45",
            hours: "200",
            value: "LKR 350,000",
        },
    },
    {
        id: "3",
        title: "NextGen Leaders Workshop",
        category: "Youth",
        date: "2024-07-28",
        month: "July",
        description: "A two-day leadership development workshop for school prefects, focusing on soft skills, public speaking, and team building. Guest speakers included prominent corporate leaders and motivational coaches.",
        image: "/file.svg",
        instagramUrl: "https://www.instagram.com/p/C_abcdef123",
        stats: {
            beneficiaries: "100+",
            volunteers: "20",
            hours: "150",
            value: "LKR 100,000",
        },
    },
    {
        id: "4",
        title: "Hunger Relief Drive",
        category: "Community",
        date: "2024-09-05",
        month: "September",
        description: "Distributed dry ration packs to 100 low-income families affected by recent floods in the Kalutara district. Each pack contained rice, dhal, sugar, and other essentials sufficient for two weeks.",
        image: "/logo.png",
        instagramUrl: "https://www.instagram.com/p/C_Hunger456",
        stats: {
            beneficiaries: "400+",
            volunteers: "30",
            hours: "100",
            value: "LKR 400,000",
        },
    },
    {
        id: "5",
        title: "Tech for Kids",
        category: "Education",
        date: "2024-08-20",
        month: "August",
        description: "Donated 10 refurbished computers and set up a smart classroom for a rural school. We also conducted a basic IT literacy workshop for the students and teachers.",
        image: "/globe.svg",
        instagramUrl: "https://www.instagram.com/p/C_Tech789",
        stats: {
            beneficiaries: "300+",
            volunteers: "15",
            hours: "80",
            value: "LKR 800,000",
        },
    },
    {
        id: "6",
        title: "Elderly Care Day",
        category: "Community",
        date: "2024-10-01",
        month: "October",
        description: "Spent a day at a local elders' home to mark World Elders' Day. The event included a musical show, drama performance, and a special lunch service for the 50 residents.",
        image: "/window.svg",
        instagramUrl: "https://www.instagram.com/p/C_Elderly101",
        stats: {
            beneficiaries: "50",
            volunteers: "25",
            hours: "120",
            value: "LKR 150,000",
        },
    },
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
