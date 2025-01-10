import React from "react";

function Suscription() {
  return (
    <div className="flex flex-col bg-background place-content-center items-center p-8 w-full">
    <div>
      {/* Introducción de la página */}
      <div>
        <h1 className="text-gray-300 text-3xl font-semibold mb-4">
          Subscriptions
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de los beneficios exclusivos que tenemos para ti. Con cualquiera de nuestras suscripciones, obtendrás acceso a contenido exclusivo y herramientas avanzadas que mejorarán tu experiencia.
        </p>
      </div>
      
      <div>
        {/* Plan económico */}
        <div className="flex flex-col flex-1 place-content-center items-start p-8 bg-gray-300 rounded-md mb-6">
          <p className="text-gray-950 font-semibold mb-2">Full Plan</p>
          <h2 className="text-gray-950 text-4xl mb-4">$5.00</h2>
          <p className="text-gray-950 font-semibold mb-4">
            Ideal para quienes quieren disfrutar de una experiencia básica pero completa.
          </p>
          <button className="bg-background text-gray-300 p-2 rounded-md w-full">
            Buy this plan
          </button>
          {/* Beneficios del plan económico */}
          <p className="text-gray-950 font-semibold mt-4">Incluye:</p>
          <ul className="text-gray-950">
            <li>- Acceso a contenido exclusivo.</li>
            <li>- Recomendaciones personalizadas.</li>
            <li>- Soporte técnico prioritario.</li>
            <li>- Almacenamiento en la nube para tu contenido.</li>
          </ul>
        </div>
  
        {/* Plan premium */}
        <div className="flex flex-col flex-1 place-content-center items-start p-8 bg-amber-600 rounded-md">
          <p className="text-gray-950 font-semibold mb-2">Premium Plan</p>
          <h2 className="text-gray-950 text-4xl mb-4">$10.00</h2>
          <p className="text-gray-950 font-semibold mb-4">
            Perfecto para usuarios que desean la mejor experiencia con todos los beneficios premium.
          </p>
          <button className="bg-background text-gray-300 p-2 rounded-md w-full">
            Buy this plan
          </button>
          {/* Beneficios del plan premium */}
          <p className="text-gray-950 font-semibold mt-4">Incluye:</p>
          <ul className="text-gray-950">
            <li>- Todo lo del Full Plan.</li>
            <li>- Acceso a herramientas avanzadas.</li>
            <li>- Mayor almacenamiento en la nube.</li>
            <li>- Contenido adicional exclusivo.</li>
            <li>- Posibilidad de compartir tu cuenta con un amigo.</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="text-gray-300 font-semibold mt-4">Enjoy our great services with</p>
    <button className="bg-gray-300 text-gray-950 w-full p-2 rounded-md mt-16 mb-8">Why buy a subscription?</button>
  </div>
  );
}

export default Suscription;
