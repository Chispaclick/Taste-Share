import CopyRight from "@/components/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="bg-background text-gray-300 p-8 mt-10">
        <h1 className="text-3xl text-amber-600 font-bold my-4 animate__animated animate__fadeInUp">
          ¿Por Qué Donar a Taste Share?
        </h1>

        <p className="animate__animated animate__fadeInUp text-md mb-8">
          <strong>Taste Share</strong> es una plataforma gratuita en constante
          construcción que busca ofrecerte experiencias auténticas y un espacio
          único para compartir tus momentos especiales. Cada donación nos ayuda
          a mejorar nuestras funcionalidades, mantener un entorno seguro y
          acelerar el desarrollo de nuevas características. Si valoras nuestro
          trabajo, considera{" "}
          <Link href="/donate" className="text-amber-600 underline">
            donar
          </Link>{" "}
          y forma parte del crecimiento de esta comunidad.
        </p>

        <h2 className="text-2xl font-semibold mb-2 animate__animated animate__fadeInUp">
          Un Futuro Mejor Juntos
        </h2>
        <p className="animate__animated animate__fadeInUp text-md mb-8">
          Tu contribución no solo sostiene la plataforma, sino que también forma
          parte de una comunidad apasionada por la autenticidad y la conexión.
          Con tus donaciones, podemos acelerar el desarrollo de nuevas
          características, corregir errores rápidamente y construir un espacio
          más enriquecedor para ti y todos los usuarios de{" "}
          <strong>Taste Share</strong>.
        </p>

        <h2 className="text-2xl font-semibold mb-2 animate__animated animate__fadeInUp">
          Agradecemos Tu Apoyo
        </h2>
        <p className="animate__animated animate__fadeInUp text-md mb-8">
          Cada contribución, por pequeña que sea, marca una gran diferencia en
          el camino hacia una plataforma más robusta y emocionante. Gracias por
          ser parte de nuestra comunidad y por ayudarnos a construir algo
          especial. Sé parte de esta transformación.
        </p>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
}

export default page;
