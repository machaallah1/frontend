// app/ui/sections/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-gray-950 text-white">
      <h2 className="text-3xl font-bold mb-6">Me contacter</h2>
      <p className="text-gray-400 mb-4">Vous pouvez me contacter via LinkedIn ou GitHub.</p>
      <div className="space-x-6">
        <a href="https://github.com/ton-github" className="text-cyan-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/ton-linkedin" className="text-cyan-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}
