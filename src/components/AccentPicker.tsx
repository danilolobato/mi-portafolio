"use client";
import { useState } from "react";

const themes = [
  { name: "Violeta", a: "#7c6cff", b: "#3dd9c4" },
  { name: "Océano", a: "#4da3ff", b: "#5eead4" },
  { name: "Atardecer", a: "#ff7a90", b: "#ffb38a" },
  { name: "Bosque", a: "#5bd68a", b: "#c6f36b" },
];

export default function AccentPicker() {
  const [active, setActive] = useState(0);

  const pick = (i: number) => {
    setActive(i);
    document.documentElement.style.setProperty("--violet", themes[i].a);
    document.documentElement.style.setProperty("--teal", themes[i].b);
  };

  return (
    <div className="card fixed bottom-5 right-5 z-40 flex gap-2 p-2">
      {themes.map((t, i) => (
        <button
          key={t.name}
          onClick={() => pick(i)}
          aria-label={`Paleta ${t.name}`}
          title={t.name}
          className={`h-7 w-7 rounded-full transition-transform hover:scale-125 ${active === i ? "ring-2 ring-white" : ""}`}
          style={{ background: `linear-gradient(135deg, ${t.a}, ${t.b})` }}
        />
      ))}
    </div>
  );
}