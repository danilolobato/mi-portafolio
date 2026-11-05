"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";
import About from "@/components/About";

type Project = {
  title: string;
  text: string;
  tech: string;
  cat: "Next.js" | "WordPress";
  long: string;
};

const roles = ["full stack.", "con Next.js.", "con SQL.", "con WordPress.", "con React"];
const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "SQL", "PostgreSQL", "Python",],
  Herramientas: ["Git", "GitHub", "VS Code", "Vercel", "Clerk", "Supabase"],
  CMS: ["WordPress"],
};
const filters = ["Todos", "Next.js", "WordPress"] as const;

const projects: Project[] = [
  { title: "Tienda online", text: "Catálogo, carrito y panel de administración.", tech: "Next.js · SQL", cat: "Next.js",
    long: "Plataforma e-commerce full-stack desarrollada para ofrecer una experiencia de compra fluida y en tiempo real. Implementé gestión de inventario con transacciones atómicas en PostgreSQL, un panel de administración protegido, modal de vista rápida y un sistema de rastreo de pedidos con almacenamiento persistente. Aprendí a optimizar la arquitectura serverless en Next.js 15, manejar estados globales complejos con Zustand y garantizar la integridad de datos en compras concurrentes. link: https://nexus-store-three-navy.vercel.app/" },
  { title: "Sistema de turnos", text: "Reservas con usuarios y roles.", tech: "Next.js · SQL", cat: "Next.js",
    long: "Describí cómo diseñaste las tablas, la autenticación y los permisos de cada rol." },
  { title: "Sitio para negocio", text: "Web que el cliente edita solo.", tech: "WordPress", cat: "WordPress",
    long: "Contá qué tema y plugins usaste y cómo dejaste el sitio listo para que el cliente lo administre." },
];

export default function Home() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const shown = projects.filter((p) => filter === "Todos" || p.cat === filter);

  // cerrar el modal con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("tu@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="mx-auto max-w-5xl px-6">
      {/* HERO */}
      <section className="flex min-h-screen flex-col justify-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}
          className="mb-4 text-[var(--teal)]">
          Hola, soy
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8, duration: 0.8 }}
          className="text-6xl font-extrabold leading-tight md:text-8xl">
          <span className="gradient-text">Danilo</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.1, duration: 0.8 }}
          className="mt-6 max-w-xl text-2xl text-[var(--muted)]">
          Desarrollador web <span className="text-[var(--text)]"><Typewriter words={roles} /></span>
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }} className="mt-10 flex gap-4">
          <Magnetic href="#proyectos" className="rounded-full bg-[var(--violet)] px-8 py-3 font-semibold text-white">
            Ver proyectos
          </Magnetic>
          <Magnetic href="#contacto" className="rounded-full border border-white/30 px-8 py-3 font-semibold">
            Contacto
          </Magnetic>
        </motion.div>
      </section>

      <About />

      {/* SKILLS */}
      <section className="py-24">
  <Reveal><h2 className="mb-10 text-4xl font-bold">Con qué trabajo</h2></Reveal>
  <div className="grid gap-8 md:grid-cols-2">
    {Object.entries(skills).map(([cat, items], i) => (
      <Reveal key={cat} delay={i * 0.1}>
        <h3 className="mb-3 text-lg font-semibold text-[var(--teal)]">{cat}</h3>
        <div className="flex flex-wrap gap-3">
          {items.map((s) => (
            <motion.span key={s} data-hover whileHover={{ scale: 1.12, rotate: -3 }}
              className="card inline-block cursor-default px-5 py-2">
              {s}
            </motion.span>
          ))}
        </div>
      </Reveal>
    ))}
  </div>
</section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24">
        <Reveal><h2 className="mb-6 text-4xl font-bold">Proyectos</h2></Reveal>

        <div className="mb-8 flex gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-1.5 text-sm font-semibold transition-colors ${
                filter === f ? "border-transparent bg-[var(--violet)] text-white" : "border-white/20 text-[var(--muted)] hover:text-white"
              }`}>
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.div key={p.title} layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                <TiltCard onClick={() => setSelected(p)}>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[var(--muted)]">{p.text}</p>
                  <small className="mt-4 block text-[var(--teal)]">{p.tech}</small>
                  <small className="mt-2 block text-[var(--muted)]">Click para ver más</small>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold">Hablemos</h2>
          <button onClick={copyEmail} data-hover
            className="gradient-text mt-4 inline-block text-2xl font-bold md:text-4xl">
            danilolobato02@gmail.com
          </button>
          <p className="mt-3 text-sm text-[var(--muted)]">Click para copiar</p>
        </Reveal>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="card w-full max-w-lg bg-[#0b1020] p-8"
              initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold">{selected.title}</h3>
              <small className="mt-1 block text-[var(--teal)]">{selected.tech}</small>
              <p className="mt-4 text-[var(--muted)]">{selected.long}</p>
              <button onClick={() => setSelected(null)}
                className="mt-6 rounded-full bg-[var(--violet)] px-6 py-2 font-semibold text-white">
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AVISO DE COPIADO */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="card fixed bottom-5 left-1/2 z-50 -translate-x-1/2 px-5 py-2"
          >
            ¡Email copiado!
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}