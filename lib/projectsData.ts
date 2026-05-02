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
        gallery: [
            "/gallery/gallery-image-38.jpg",
            "/gallery/gallery-image-41.jpg",
            "/gallery/gallery-image-42.jpg",
            "/gallery/gallery-image-43.jpg"
        ],
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
    },
    {
        id: "13",
        title: "Threads of Hope",
        category: "Community Service",
        date: "2025-10-29",
        month: "October",
        description: "The primary objective of \"Threads of Hope\" was to bridge the gap in educational resources faced by underprivileged schools by providing them with a projector to enhance the quality of teaching and learning. The project aimed to promote equal access to modern education through a sustainable and student-led initiative. By organizing a non-uniform day, Leos sought to create an engaging and inclusive fundraising activity that encouraged every student to participate in service. Beyond fundraising, the project also aimed to raise awareness among students about the importance of community support, empathy, and sustainable responsibility. It encouraged young people to recognize the impact of small collective actions in driving meaningful change towards the betterment of society. Through this initiative, the Leo Club aspired to strengthen its commitment to service, leadership, and youth empowerment while leaving a lasting impact on both the beneficiaries and the volunteers involved.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DQZzzO4k3Uh/",
        stats: {
            beneficiaries: "52",
            volunteers: "35",
            hours: "4",
            value: "11,190.00",
        },
    },
    {
        id: "14",
        title: "Bright Beginnings",
        category: "Education",
        date: "2025-12-31",
        month: "December",
        description: "The Bright Beginnings project was initiated in response to a request raised by the school principal to the Lions Club of Dehiwela Legends. This request was informed to us, in order for us to join our hands too to the project to make a better impact and enhance the bond between the Leo and Lions Club. Many students had lost essential school materials such as stationery, books and learning resources, creating barriers to continuing their education smoothly. Without immediate assistance, these students risk falling behind academically and experiencing increased stress at the beginning of the new academic year. Beyond the material losses, the flood had a significantly psychological impact on the students. Exposure to a natural disaster at a young age caused fear, anxiety, stress and emotional instability, which negatively affected the students’ ability to concentrate on learning and maintain a positive outlook. The community therefore required a holistic intervention that addressed both educational continuity and emotional recovery. Bright Beginnings was designed to meet these dual needs by combining educational assistance with mental health support.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DS6zH1zDIjT/",
        stats: {
            beneficiaries: "450",
            volunteers: "22",
            hours: "24",
            value: "93,675.00",
        },
    },
    {
        id: "15",
        title: "Donation Drive",
        category: "Community Service",
        date: "2025-12-10",
        month: "December",
        description: "In response to the Sri Lanka flood crisis, Leo members organized a donation drive to collect dry rations and essential items for flood-affected families in Kandy. The collected items included food supplies and other basic necessities required for daily living. These donations were handed over to ATD Lanka, an organization actively involved in disaster relief and community support. Leo members visited Kandy to personally deliver the donations, ensuring transparency and meaningful engagement with the relief process. Through this initiative, the project contributed to alleviating the immediate hardships faced by affected families while supporting ongoing relief efforts led by ATD Lanka.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DSHa89Bk-qH/",
        stats: {
            beneficiaries: "14",
            volunteers: "6",
            hours: "2",
            value: "126,300.00",
        },
    },
    {
        id: "16",
        title: "Shine and Drive",
        category: "Community Service",
        date: "2026-01-10",
        month: "January",
        description: "The objective of the car wash project was to provide a practical and convenient service to the local community in Colombo 7 while promoting fellowship and active engagement among Leo members. The project aimed to strengthen community relations, develop teamwork and leadership skills within the club, and promote the core Leo values of service, responsibility, and fellowship. The benefiting community included parents, staff, and members of the public. The initiative catered to individuals seeking a convenient service within their local community. The car wash project provided Leo members with a valuable service opportunity to actively engage with the community while working together in a spirit of fellowship.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DTvLaXUDGvS/",
        stats: {
            beneficiaries: "8",
            volunteers: "N/A",
            hours: "N/A",
            value: "N/A",
        },
    },
    {
        id: "17",
        title: "Vision Bites",
        category: "Health",
        date: "2026-01-20",
        month: "January",
        description: "The need for the Vision Bites project was identified through the Leo Club's aim to support the Vision Care Project, which focuses on helping individuals who lack access to proper eye care. It was recognized that many people are unable to afford basic vision services, creating a clear social need. At the same time, within the school, there was an opportunity to organize an engaging and affordable activity for students. By combining both needs, the project was designed to raise funds for vision care while also providing a fun experience for the school community. The Vision Bites project created a service opportunity by allowing students to enjoy affordable ice cream connecting a fun experience with supporting vision care.",
        image: "gradient-placeholder",
        instagramUrl: "",
        stats: {
            beneficiaries: "15",
            volunteers: "N/A",
            hours: "N/A",
            value: "N/A",
        },
        gallery: [
            "/gallery/gallery-image-44.jpg",
            "/gallery/gallery-image-45.jpg",
            "/gallery/gallery-image-46.jpg"
        ],
    },
    {
        id: "18",
        title: "Sweet Spot",
        category: "Community Service",
        date: "2026-02-10",
        month: "February",
        description: "The primary objective of the Sweet Spot project was to organize and operate a small-scale dessert sale within the school environment, offering students a variety of affordable and appealing treats during interval time. This aimed to meet the need for convenient and enjoyable snack options while enhancing the overall student experience. Another key objective was to raise funds through the sale of these products in order to support a selected community cause as part of the Leo Club's service initiatives. The project intended to ensure that the proceeds contributed meaningfully towards individuals or groups in need, thereby creating a positive social impact beyond the school. In addition, the project aimed to develop essential life skills among the participating members.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DVzk3z9DA1p/",
        stats: {
            beneficiaries: "22",
            volunteers: "N/A",
            hours: "N/A",
            value: "N/A",
        },
    },
    {
        id: "19",
        title: "Sugar Rush is back",
        category: "Community Service",
        date: "2026-02-15",
        month: "February",
        description: "The objective of Sugar Rush was to provide an enjoyable and interactive service for the school community while promoting fellowship among Leo members. The project aimed to enhance school spirit, encourage participation in Leo activities, and provide a platform for members to develop teamwork, organisational, and leadership skills within a school-based service environment. The Sugar Rush bake sale benefited the school community, including students, teachers, and staff. Providing baked treats offered a way to engage students and staff in a positive, interactive manner while promoting the Leo Club and encouraging participation in club activities.",
        image: "gradient-placeholder",
        instagramUrl: "",
        stats: {
            beneficiaries: "25",
            volunteers: "N/A",
            hours: "N/A",
            value: "N/A",
        },
    },
    {
        id: "20",
        title: "Leo Day",
        category: "Youth",
        date: "2025-12-05",
        month: "December",
        description: "The objective of the project was to strengthen fellowship and unity among Leo Club members while creating a platform for active engagement and collaboration. Through interactive games and reflective activities conducted during International Leo Day, the project aimed to encourage teamwork, leadership development, and creative thinking. Activities included dividing into groups to develop and present project ideas, reflecting on personal learning experiences through the 'Leo Wall,' and playing 'Leo Imposter' to encourage teamwork and fun interaction.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DT8GZWgDIMY/",
        stats: {
            beneficiaries: "30",
            volunteers: "28",
            hours: "2",
            value: "0.00",
        },
    },
    {
        id: "21",
        title: "Meal of Thanks",
        category: "Community",
        date: "2026-01-25",
        month: "January",
        description: "The objective of the Meal of Thanks project was to recognize and appreciate the efforts of municipal council workers who play a vital role in maintaining public services. The project aimed to provide support through the distribution of rice packets, while also fostering a sense of gratitude, morale, and encouragement among the workers. These workers play a vital role in maintaining the cleanliness and safety of the community, often working long hours outside in the heat. Providing rice packets was a meaningful way to acknowledge their hard work and show gratitude for their continuous contribution to the community.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DUV4HW1jGqN/",
        stats: {
            beneficiaries: "14",
            volunteers: "5",
            hours: "1",
            value: "6,300.38",
        },
    },
    {
        id: "22",
        title: "Beyond Bullying",
        category: "Youth",
        date: "2026-02-05",
        month: "February",
        description: "The Beyond Bullying seminar was organized by the Leo Club and the Prefects' Guild of Ethos International School with the objective of enlightening the students about the critical issue of bullying and its effects on mental health. Facilitated by Sir Jenoosh Lawrance, the program aimed to raise awareness about verbal, physical, and social bullying. The speaker explained the importance of empathy and encouraged students to speak up and report bullying cases to the relevant authority figures, helping to create a safer, more inclusive, and supportive school environment.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DVu-zwfCcRf/",
        stats: {
            beneficiaries: "38",
            volunteers: "26",
            hours: "1",
            value: "0.00",
        },
        gallery: [
            "/gallery/gallery-image-38.jpg",
            "/gallery/gallery-image-41.jpg",
            "/gallery/gallery-image-42.jpg",
            "/gallery/gallery-image-43.jpg"
        ],
    },
    {
        id: "23",
        title: "Vision with Heart",
        category: "Health",
        date: "2026-03-15",
        month: "March",
        description: "The 'Vision with Heart' project was a community service initiative aimed at improving eye health and overall well-being of elderly residents at the Help for Life Elderly Care Home. The project focused on identifying individuals with vision difficulties and providing them with appropriate spectacles and other necessary optical aids in collaboration with Vision Care. Students and volunteers played an active role in assessing the needs of the residents, organizing donations, and interacting with the elderly to better understand their challenges, ultimately improving their independence and quality of life.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DV0RNGkjDbW/",
        stats: {
            beneficiaries: "11",
            volunteers: "5",
            hours: "2",
            value: "46,999.85",
        },
        gallery: [
            "/gallery/gallery-image-44.jpg",
            "/gallery/gallery-image-45.jpg",
            "/gallery/gallery-image-46.jpg"
        ],
    },
    {
        id: "24",
        title: "Leo Canteen",
        category: "Youth",
        date: "2026-03-20",
        month: "March",
        description: "The main objective of the Leo Canteen project was to provide affordable and accessible snacks and treats to students within the school community while ensuring quality and hygiene standards were maintained. The project sought to promote teamwork, responsibility, and leadership among the members involved by assigning roles such as planning, sourcing, preparation, sales, and financial management. It also aimed to generate revenue to support future Leo Club activities while creating a positive and engaging environment within the school.",
        image: "gradient-placeholder",
        instagramUrl: "",
        stats: {
            beneficiaries: "40",
            volunteers: "5",
            hours: "5",
            value: "99,125.00",
        },
    },
    {
        id: "25",
        title: "Charitable Chews",
        category: "Environment",
        date: "2026-04-10",
        month: "April",
        description: "Charitable Chews was an Animal Welfare project carried out by the Leo Club of Ethos International in collaboration with Justice for Animals Sri Lanka. At a marketplace in Narahenpita, members distributed meals consisting of rice, chicken, and fish to stray dogs and cats. The project helped build a sense of responsibility and care towards animals while raising awareness among Leo members and onlookers. It provided the street animals with necessary nutrition, helping prevent illness and offering consolation to the starving animals in the area.",
        image: "gradient-placeholder",
        instagramUrl: "https://www.instagram.com/p/DXrW1Dtiaqn/",
        stats: {
            beneficiaries: "56",
            volunteers: "4",
            hours: "1",
            value: "10,000.00",
        },
        gallery: [
            "/gallery/gallery-image-37.jpg",
            "/gallery/gallery-image-39.jpg",
            "/gallery/gallery-image-40.jpg"
        ],
    },
    {
        id: "26",
        title: "LeoLynk",
        category: "Youth",
        date: "2026-04-20",
        month: "April",
        description: "LeoLynk aims to revolutionize the operational landscape of Leo Clubs across Sri Lanka by transitioning from fragmented, manual workflows to a centralized, AI-enhanced digital ecosystem. The project automates the generation of official documents, streamlines financial auditing, and facilitates seamless cross-club collaboration. By leveraging context-aware AI tools and interactive impact maps, LeoLynk empowers youth leaders to focus on high-impact service projects rather than administrative burdens, fostering a more efficient, transparent, and sustainable model for youth leadership.",
        image: "/leolynk_preview.png",
        instagramUrl: "https://www.instagram.com/p/DTSDXn5jMLm/",
        stats: {
            beneficiaries: "179",
            volunteers: "179",
            hours: "55",
            value: "1,019.75",
        },
    }
];

export const allMonths = ["July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"];
export const allCategories = ["Environment", "Health", "Youth", "Community", "Education"];
