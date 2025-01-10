import CopyRight from "@/components/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import React from "react";

function page() {
  return (
    <>
    <div className="recommendation-section bg-background text-gray-300 p-8">
      <section>
        <h2 class="text-2xl font-semibold mb-2">
          Acceso Exclusivo a Contenido Personalizado
        </h2>
        <p class="mb-4">
          Con una suscripción en Taste Share, obtendrás acceso a contenido
          exclusivo que se ajusta a tus intereses. Explora recomendaciones
          personalizadas basadas en tus gustos y conecta con una comunidad
          apasionada por lo que a ti te apasiona.
        </p>

        <h2 class="text-2xl font-semibold mb-2">
          Descubre Nuevas Experiencias
        </h2>
        <p class="mb-4">
          Aprovecha nuestro servicio premium para descubrir nuevas aventuras,
          recetas, películas, música y más. Con una suscripción, tendrás acceso
          a una variedad de contenido diverso recomendado específicamente para
          ti.
        </p>

        <h2 class="text-2xl font-semibold mb-2">
          Conéctate y Comparte con Tu Círculo Social
        </h2>
        <p class="mb-4">
          Tu suscripción a **Taste Share** desbloquea la capacidad de compartir
          experiencias y momentos únicos con amigos y familiares de manera más
          enriquecedora. Crea publicaciones interactivas, participa en
          conversaciones y haz que cada momento sea especial.
        </p>

        <h2 class="text-2xl font-semibold mb-2">
          Personalización Avanzada del Perfil
        </h2>
        <p class="mb-4">
          Con una suscripción, tu perfil se convierte en una verdadera extensión
          de ti mismo. Personaliza tu espacio con imágenes, videos y listas de
          favoritos, y muestra al mundo tus recomendaciones más valiosas.
        </p>

        <h2 class="text-2xl font-semibold mb-2">
          Soporte y Herramientas Exclusivas
        </h2>
        <p class="mb-4">
          No estás solo en Taste Share. Con tu suscripción, obtendrás soporte
          técnico prioritario y acceso a herramientas avanzadas que mejorarán tu
          experiencia de usuario, como herramientas de edición multimedia y
          almacenamiento adicional.
        </p>

        <h2 class="text-2xl font-semibold mb-2">
          Construye una Comunidad Significativa
        </h2>
        <p>
          Únete a una comunidad vibrante que comparte tus intereses y valores. A
          través de la suscripción, tendrás acceso a eventos exclusivos, grupos
          de discusión y actividades que te acercarán aún más a personas que
          comparten tus pasiones.
        </p>
      </section>
    </div>
    <Footer />
    <CopyRight />
    </>
  );
}

export default page;
