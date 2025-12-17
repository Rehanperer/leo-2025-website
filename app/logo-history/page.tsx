import { NavBarWrapper } from "@/components/NavBarWrapper";
import { Footer } from "@/components/Footer";

export default function LogoHistoryPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <NavBarWrapper />
            <div className="container mx-auto px-4 py-40 text-center">
                <h1 className="text-4xl font-bold mb-4 text-brand-cyan">Club Logo History</h1>
                <p className="text-gray-400">Content coming soon...</p>
            </div>
            <Footer />
        </main>
    );
}
