export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Leo Club of Ethos International</h2>
                <div className="flex flex-col items-center gap-6 mb-8">
                    <div className="flex justify-center gap-6 text-gray-400">
                        <a href="https://www.instagram.com/leoclubofeic/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Instagram</a>
                        <a href="https://www.tiktok.com/@eic.leo.club" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">TikTok</a>
                        <a href="https://www.youtube.com/@LeoClubofEthosInternational" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">YouTube</a>
                    </div>
                    <div className="text-gray-500 text-sm max-w-md">
                        <p>51 Sir Ernest De Silva Mawatha, Flower Terrace Rd, 00700</p>
                    </div>
                </div>
                <p className="text-gray-600">
                    © {new Date().getFullYear()} Leo Club of Ethos International. All rights reserved.
                </p>
                <p className="text-gray-700 text-sm mt-2">
                    Website made by <span className="text-brand-cyan">Rehan Perera</span>
                </p>
            </div>
        </footer >
    );
}
