export default function Footer() {
    return (
        <footer className="w-full h-40 bg-black flex text-gray-400 text-sm py-6 px-6 bottom-0">
            <div className="max-w-7xl mx-auto flex sm:flex-row flex-row">
                <div className="flex flex-row sm:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col mb-4 w-64 ml-2">
                        <h2 className="text-2xl font-bold text-white">MachCoders</h2>
                        <p className="text-gray-500">Développeurs Web</p>
                        <p>&copy; {new Date().getFullYear()} Machaallah. Tous droits réservés.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="/about" className="hover:text-white">À propos</a>
                        <a href="/projects" className="hover:text-white">Projets</a>
                        <a href="/contact" className="hover:text-white">Contact</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com/ton-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com/ton-instagram/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
