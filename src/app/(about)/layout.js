import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
    "20+ Proyectos Completados",
    "3+ Años en Proyectos Inretail",
    "99% Satisfacción del Cliente",
    "10+ Años de Experiencia en TI",
    "Autorizado como Instructor en Base de Datos",
    "Contribuidor Técnico de Cursos TI 📝",
    "Premiado en Concursos Universitarios 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
