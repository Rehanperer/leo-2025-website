import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatWeDo } from "@/components/WhatWeDo";
import { ExcoTeam } from "@/components/ExcoTeam";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats"; // Changed from named import to default if I exported default
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function getStats() {
  try {
    const snapshot = await getDocs(collection(db, "projects"));
    const projects = snapshot.docs.map(doc => doc.data());

    let beneficiaries = 0;
    let hours = 0;

    projects.forEach(p => {
      // Robust parsing of stats
      const b = typeof p.stats?.beneficiaries === 'string'
        ? parseInt(p.stats.beneficiaries.replace(/[^0-9]/g, "") || "0")
        : (p.stats?.beneficiaries || 0);

      const h = typeof p.stats?.hours === 'string'
        ? parseInt(p.stats.hours.replace(/[^0-9]/g, "") || "0")
        : (p.stats?.hours || 0);

      beneficiaries += b;
      hours += h;
    });

    return {
      beneficiaries,
      hours,
      projects: projects.length,
      members: 34
    };
  } catch (e) {
    console.error("Home Stats Fetch Error", e);
    return { beneficiaries: 0, hours: 0, projects: 0, members: 34 };
  }
}

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  const stats = await getStats();

  return (
    <main className="min-h-screen text-white selection:bg-brand-green selection:text-black">
      <Hero />
      <About />
      <WhatWeDo />
      <ImpactStats stats={stats} />
      <ExcoTeam />
      <Projects />
      <Footer />
    </main>
  );
}
