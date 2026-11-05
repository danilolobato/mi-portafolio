import Particles from "./Particles";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="blob a" />
      <div className="blob b" />
      <div className="blob c" />
      <Particles />
    </div>
  );
}