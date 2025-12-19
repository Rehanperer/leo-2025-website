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
    },
    {
        id: "9",
        title: "Sugar Rush",
        category: "Community Service",
        date: "2025-11-10",
        month: "November",
        description: "The primary goal of “Sugar Rush” was to enhance fellowship among members of the Leo Club of Ethos International while promoting teamwork, creativity, and leadership through an enjoyable and engaging activity. The initiative aimed to establish a fun atmosphere that encouraged Leos to collaborate, communicate, and strengthen their interpersonal relationships beyond their usual service and meeting contexts. Another important aim was to elevate the overall morale of the school community by arranging a lively and interactive event that united students and staff. Through the processes of planning, baking, and selling, Leos acquired essential skills in event coordination, time management, and customer interaction all contributing to their personal growth and leadership development. Moreover, the project intended to generate funds that could later support upcoming service projects which is the donation to the cancer hospital undertaken by the club. By merging enjoyment, teamwork, and a sense of purpose, “Sugar Rush” was designed to reflect the Leo values of Leadership, Experience, and Opportunity, demonstrating that service can also manifest as unity, joy, and collective effort.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DQ9HQ7njNOr/",
        stats: {
            beneficiaries: "41",
            volunteers: "29",
            hours: "2",
            value: "8,340.00",
        },
    },
    {
        id: "10",
        title: "Geoguesser",
        category: "Youth Development",
        date: "2025-11-14",
        month: "November",
        description: "The main objective of the GeoGuessr fellowship project was to create a fun and interactive way for students to develop global awareness, teamwork, and critical thinking skills. It aimed to engage players in an educational activity that encourages observation, problem-solving, and cultural understanding, while also fostering a sense of community and collaboration among students Through this students were able to compete in a lively atmosphere while guessing certain geographic locations which enhances their critical thinking and effective communication skills between their partners along with their attention to detail. The project aimed for a team bonding experience with the opportunity to learn while making it fun and interactive while strengthening their essential skills.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DRO2poDiY-M/",
        stats: {
            beneficiaries: "38",
            volunteers: "34",
            hours: "2",
            value: "11,000",
        },
    },
    {
        id: "11",
        title: "Illuminating Futures",
        category: "Community Service",
        date: "2025-11-06",
        month: "November",
        description: "The main objective was to bridge the educational gap at Warapitiya Kanishta Vidyalaya. It aimed to introduce modern technology to improve teaching and learning. The Leo Club wanted to support both students and teachers by donating a projector. This would enable more interactive, visual, and engaging lessons. The project also aimed to promote equal access to quality education for underprivileged communities. It sought to build leadership, teamwork, and compassion among Leo members through meaningful service and community involvement. while doing this the club also sought out to empower the educational community by providing quality learning experiences to increase the capacity of each and every single student. It inspired young learners and enhanced the classroom environment while also reflecting the Leo spirit and the clubs dedication for community service as it fostered teamwork and contributed to the long term betterment of education in society.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DQydI0WCWRf/",
        stats: {
            beneficiaries: "209",
            volunteers: "23",
            hours: "3",
            value: "63,900",
        },
    },
    {
        id: "12",
        title: "Service with Spice",
        category: "Community Service",
        date: "2025-10-29",
        month: "October",
        description: "The primary objective of the ''Service with Spice'' initiative was to raise enough funds through a collectively well organized bake sale in order to provide a projector and bridge the educational divide that underprivileged schools like Warapitiya Kanishta Vidyalaya in society face today. The project aimed to aid modernized learning methods and grow out from traditional learning methods to make education more interactive and effective while promoting better understanding and retention for the youth. Furthermore another key objective was create a meaningful and youth driven initiative to help make a change and aid a significant cause. This allowed Leo members to showcase their leadership skills, teamwork, unity and spread awareness through the youth for a vital issue such as inequality in education provided for certain groups in society who lack the sufficient resources needed. This was demonstrated through the skillfully planned bake sale held which fostered a sense of purpose and sense of collaboration between both the Leo members, student body and educators of Ethos International college.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DQZzzO4k3Uh/",
        stats: {
            beneficiaries: "52",
            volunteers: "18",
            hours: "1",
            value: "10,930.00",
        },
    }
];

export const allMonths = ["July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"];
export const allCategories = ["Environment", "Health", "Youth", "Community", "Education"];
