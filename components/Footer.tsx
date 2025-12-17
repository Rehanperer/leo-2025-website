export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Leo Club of Ethos International</h2>
                <div className="flex justify-center gap-6 mb-8 text-gray-400">
                    <a href="#" className="hover:text-brand-green transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-green transition-colors">TikTok</a>
                    <a href="#" className="hover:text-brand-green transition-colors">YouTube</a>
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
