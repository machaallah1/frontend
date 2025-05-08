// app/ui/sections/Projects.tsx
export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Mes projets</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Exemple de carte projet */}
        <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Projet 1</h3>
          <p className="text-gray-400">Description du projet 1</p>
        </div>
        <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Projet 2</h3>
          <p className="text-gray-400">Description du projet 2</p>
        </div>
      </div>
    </section>
  );
}
