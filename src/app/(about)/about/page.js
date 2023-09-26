import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "Sobre Mi",
  description: `Estos son algunos detalles sobre mí.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
        ¿Tienes un proyecto en mente? Pongase en contacto conmigo 📞 desde <Link href="/contact" className="!underline font-bold underline-offset-2">aquí</Link> y hagámoslo realidad.
      </h2>
    </>
  );
}
