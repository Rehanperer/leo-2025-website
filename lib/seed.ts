import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { projects } from "./projectsData";

export const seedDatabase = async () => {
    // 1. Seed Projects
    const projectsRef = collection(db, "projects");
    const existingProjects = await getDocs(projectsRef);
    if (existingProjects.empty) {
        console.log("Seeding Projects...");
        for (const p of projects) {
            // Remove ID as Firestore generates it, or keep it if we want to preserve legacy IDs
            // For now, let Firestore generate typical IDs but we could store 'legacyId'
            const { id, ...data } = p;
            await addDoc(projectsRef, {
                ...data,
                createdAt: new Date()
            });
        }
    }

    // 2. Seed Team (Mock data for now as we don't have a real source file with all details)
    const teamRef = collection(db, "team");
    const existingTeam = await getDocs(teamRef);
    if (existingTeam.empty) {
        console.log("Seeding Team...");
        const roles = ["President", "Secretary", "Treasurer", "Vice President"];
        for (const role of roles) {
            await addDoc(teamRef, {
                name: "Member Name",
                role: role,
                category: "Executive Officer",
                image: "", // Placeholder
                createdAt: new Date()
            });
        }
    }
};
