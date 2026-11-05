"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// ✏️ Editá estos datos con los tuyos
const facts = [
  { label: "Ubicación", value: "Buenos Aires, Argentina" },
  { label: "Me dedico a", value: "Desarrollo web full stack" },
  { label: "Stack favorito", value: "Next.js + Supabase" },
  { label: "Idiomas", value: "Español nativo" },
];

const timeline = [
  { year: "2022", title: "Empecé a programar", text: "Primeros pasos con HTML, CSS y JavaScript." },
  { year: "2025", title: "Me recibi como", text: "Tecnico en Programación en Secundaria." },
  { year: "2025-2026", title: "Curso de WordPress", text: "Completé el curso y armé mis primeros sitios administrables." },
  { year: "2026", title: "Full stack con Next.js", text: "Proyectos con Supabase, SQL y autenticación." },
  { year: "Hoy", title: "Buscando nuevos desafíos", text: "Abierto a proyectos freelance y oportunidades." },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <Reveal><h2 className="mb-12 text-4xl font-bold">Sobre mí</h2></Reveal>

      <div className="grid items-start gap-12 md:grid-cols-[280px_1fr]">
        {/* FOTO / AVATAR */}
        <Reveal>
          <motion.div
            data-hover
            whileHover={{ rotate: -3, scale: 1.03 }}
            className="relative mx-auto aspect-square w-full max-w-[280px]"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[var(--violet)] via-[var(--teal)] to-[var(--peach)] opacity-70 blur-lg" />
            <div className="card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-[#0b1020]">
              {/* Con foto: poné tu imagen en /public/foto.jpg y descomentá la línea de abajo */}
              {/* <img src="/foto.jpg" alt="Tu Nombre" className="h-full w-full object-cover" /> */}
              <span className="gradient-text text-7xl font-extrabold">DL</span>
            </div>
          </motion.div>
        </Reveal>

        {/* TEXTO */}
        <div>
          <Reveal>
            <p className="text-xl leading-relaxed">
              Soy <span className="font-semibold text-[var(--teal)]">Danilo Lobato</span>, desarrollador web
              full stack. Me gusta construir sitios que se vean bien, anden rápido y resuelvan un problema real.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Trabajo tanto el frontend como el backend: diseño la interfaz, armo la base de datos y conecto todo.
              Además tengo un curso completo de WordPress, así que también puedo entregar sitios que el cliente
              administra por su cuenta. Siempre estoy aprendiendo algo nuevo.
            </p>
          </Reveal>

          {/* DATOS RÁPIDOS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={0.15 + i * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="card p-4">
                  <small className="text-[var(--muted)]">{f.label}</small>
                  <p className="mt-1 font-semibold">{f.value}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* LÍNEA DE TIEMPO */}
      <Reveal><h3 className="mb-8 mt-20 text-2xl font-bold">Mi camino</h3></Reveal>
      <div className="relative ml-3 border-l border-white/15 pl-8">
        {timeline.map((t, i) => (
          <Reveal key={t.year} delay={i * 0.1}>
            <div className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[#0b1020] bg-[var(--teal)]" />
              <small className="font-semibold text-[var(--teal)]">{t.year}</small>
              <h4 className="text-lg font-semibold">{t.title}</h4>
              <p className="text-[var(--muted)]">{t.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}