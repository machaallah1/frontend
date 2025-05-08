'use client';

import Typography from "../design/typography/typography";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 flex flex-col items-center justify-center gap-12">
      <div className="text-center">
        <Typography
          variant="display"
        >
          Salut, je suis Machaallah 👋
        </Typography>

        <Typography variant="body-lg">
          Développeur passionné par le web moderne. Je travaille avec React, Firebase, Next.js, et j\’aime construire des applications performantes et élégantes.
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
        >
          Mes projets
        </a>
        <a
          href="/contact"
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
