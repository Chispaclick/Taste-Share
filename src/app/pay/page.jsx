import React from 'react'

function page() {
  return (
    <div className="bg-background text-gray-300 p-8 w-full mt-10">
  <h1 className="text-3xl text-amber-600 font-bold my-4 animate__animated animate__fadeInUp">
    Gracias por tu Donación
  </h1>
  <p className="animate__animated animate__fadeInUp text-md mb-8">
    Apoyar a Taste Share significa ayudar a mejorar y expandir nuestra plataforma para ofrecerte una experiencia aún más enriquecedora.
  </p>

  <h2 className="text-2xl font-semibold mb-2 animate__animated animate__fadeInUp">
    Elige tu Método de Donación
  </h2>
  <div className="mt-4">
    <button className="bg-amber-600 px-4 py-2 text-gray-950 font-bold rounded-md m-2">
      Tarjeta de Crédito/Débito
    </button>
    <button className="bg-amber-600 px-4 py-2 text-gray-950 font-bold rounded-md m-2">
      PayPal
    </button>
    <button className="bg-amber-600 px-4 py-2 text-gray-950 font-bold rounded-md m-2">
      Transferencia Bancaria
    </button>
  </div>

  <p className="mt-4 text-gray-500">
    *Tu información está completamente segura y protegida.
  </p>
</div>
  )
}

export default page
