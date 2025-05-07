
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 flex flex-col items-center justify-center gap-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Salut, je suis Machaallah 👋
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
          Développeur passionné par le web moderne. Je travaille avec React, Firebase, Next.js, et j’aime construire des applications performantes et élégantes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
        >
          Mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-gray-400 hover:bg-gray-800 transition"
        >
          Me contacter
        </a>
      </div>

      <div className="flex gap-6 mt-10 text-gray-400">
        <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

