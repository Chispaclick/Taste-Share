import CopyRight from "@/components/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import React from "react";

function TasteShare() {
  return (
    <>
    <div className="bg-background text-gray-300 p-8 mt-10">
      <h1 className="text-3xl text-amber-600 font-bold my-4 animate__animated  animate__fadeInUp">
        About Taste Share
      </h1>
      <p className=" animate__animated  animate__fadeInUp text-md mb-8">
        <strong>Taste Share</strong> es una plataforma diseñada para compartir y
        descubrir experiencias auténticas a través de contenido multimedia.
        Desde fotografías y vídeos hasta momentos personales y emocionantes,
        esta aplicación te permite conectar con tus amigos y familiares, así
        como explorar nuevas recomendaciones basadas en tus propios intereses y
        los de tu círculo cercano.
      </p>

      <h2 className="text-2xl font-semibold mb-2 animate__animated  animate__fadeInUp">
        Comparte tus Momentos Especiales
      </h2>
      <p className="animate__animated  animate__fadeInUp text-md mb-8">
        ¿Has tenido un día especial o una experiencia inolvidable? En{" "}
        <strong>Taste Share</strong>, puedes compartir esos momentos únicos
        directamente con tus amigos. Tus publicaciones se convierten en
        historias compartidas que pueden ser vistas y comentadas, permitiendo a
        tus amigos explorar nuevas emociones y recuerdos.
      </p>

      <h2 className="text-2xl font-semibold mb-2 animate__animated  animate__fadeInUp">
        Explora y Descubre Contenido Diverso
      </h2>
      <p className="animate__animated  animate__fadeInUp text-md mb-8">
        Taste Share no solo es un espacio para compartir, sino también para
        descubrir. Navega por contenido sugerido basado en tus preferencias y
        aquellos momentos que te apasionan. Ya sea música, películas, recetas o
        aventuras, encuentra nuevas ideas y conecta con personas que compartan
        tus intereses.
      </p>

      <h2 className="text-2xl font-semibold mb-2 animate__animated  animate__fadeInUp">
        Personaliza tu Espacio Único
      </h2>
      <p className="animate__animated  animate__fadeInUp text-md mb-8">
        Tu perfil en <strong>Taste Share</strong> es una extensión de ti mismo.
        Personaliza tu espacio con imágenes, vídeos y listas de tus favoritos
        para mostrar quién eres. Descubre a otras personas que compartan tus
        mismos intereses y construye una comunidad que valore tus
        recomendaciones.
      </p>

      <h2 className="text-2xl font-semibold mb-2 animate__animated  animate__fadeInUp">
        Conecta con Tu Círculo Social
      </h2>
      <p className="animate__animated  animate__fadeInUp mb-4">
        Con <strong>Taste Share</strong>, compartir y conectar es fácil.
        Comparte tus experiencias y encuentra amigos que valoren tus
        recomendaciones. Esta plataforma permite no solo compartir contenido,
        sino también formar relaciones significativas a través de momentos
        especiales.
      </p>
    </div>
    <Footer />
    <CopyRight />
    </>
  );
}

export default TasteShare;
