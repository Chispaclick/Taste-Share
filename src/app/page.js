export default function Home() {
  return (
    <div className="bg-background text-gray-300 p-8">
      {/* Sección de bienvenida */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Descubre y comparte con Taste Share
        </h1>
        <img
          src="/user_share_02.jpg"
          alt="user"
          className="rounded-md mb-4 w-30"
        />
        <p className="mb-4">
          <strong>Taste Share</strong> es una aplicación diseñada para que
          compartas y descubras contenido multimedia de forma sencilla y
          emocionante. Desde fotos y videos hasta películas, series y mucho
          más, esta plataforma te permite conectar con tus amigos y explorar
          recomendaciones basadas en tus gustos y los de tu círculo social.
        </p>
      </section>

      {/* Sección de recomendaciones */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Recomendar nunca fue tan fácil
        </h2>
        <p className="mb-4">
          ¿Acabas de ver una película impresionante o una serie que te atrapó
          desde el primer capítulo? En <strong>Taste Share</strong>, puedes
          compartir ese contenido directamente en tu muro personal. Tus amigos
          podrán descubrir nuevas opciones de entretenimiento gracias a tus
          recomendaciones. Cada publicación se convierte en una ventana a
          nuevas historias, géneros y experiencias audiovisuales.
        </p>
      </section>

      {/* Sección de perfil */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Haz de tu perfil tu carta de presentación
        </h2>
        <p className="mb-4">
          Personaliza tu perfil para reflejar tus gustos y crea un espacio único
          donde los demás puedan conocerte a través de tus recomendaciones.
          Comparte tus fotos, videos y listas de contenido favorito. Además,
          encuentra personas que compartan tus mismos intereses y descubre
          comunidades apasionadas por los mismos géneros e historias.
        </p>
      </section>

      {/* Sección de exploración */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Explora, conecta y disfruta</h2>
        <p>
          Con <strong>Taste Share</strong>, descubrir contenido nunca había sido
          tan divertido. Comparte tus momentos, encuentra nuevos amigos y
          conviértete en el punto de referencia para recomendaciones en tu
          círculo social. ¡Únete y comienza a disfrutar de una experiencia
          social diferente!
        </p>
      </section>
    </div>
  );
}