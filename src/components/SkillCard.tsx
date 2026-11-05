"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SkillCard({ name, desc }: { name: string; desc: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      data-hover
      className="h-32 cursor-pointer"
      style={{ perspective: 800 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)} // en celular funciona con toque
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="card absolute inset-0 flex items-center justify-center text-xl font-semibold"
          style={{ backfaceVisibility: "hidden" }}
        >
          {name}
        </div>
        <div
          className="card absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-[var(--muted)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {desc}
        </div>
      </motion.div>
    </div>
  );
}