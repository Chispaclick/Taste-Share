import React from "react";
import Link from "next/link";

function Wellcome() {
  return (
    <div className="flex flex-col place-content-center items-center bg-background text-gray-300 p-8 mt-10 w-full h-screen">
      <div className="flex place-content-end items-center w-full pr-4">
        <h1 className="text-3xl font-bold my-4 animate__animated animate__fadeInUp mb-14 ">
          Hola,{" "}
          <Link href="/profile">
            <span className="text-amber-600 font-bold"> Alberto</span>
          </Link>
        </h1>
      </div>
      <p className="animate__animated animate__fadeInUp text-md mb-8 text-lg">
        Bienvenido a
        <Link href="/taste-share">
          <strong className="text-amber-600"> Taste Share </strong>
        </Link>
        una plataforma diseñada para compartir y descubrir experiencias
        auténticas a través de contenido multimedia. Desde fotografías y vídeos
        hasta momentos personales y emocionantes, esta aplicación te permite
        conectar con tus amigos y familiares, así como explorar nuevas
        recomendaciones basadas en tus propios intereses y los de tu círculo
        cercano.
      </p>
      <button className="bg-amber-600 text-gray-950 font-bold w-full rounded-md p-2 mt-10 hover:bg-gray-300 transition-all ease-in ">
        Comenzar
      </button>
    </div>
  );
}

export default Wellcome;
