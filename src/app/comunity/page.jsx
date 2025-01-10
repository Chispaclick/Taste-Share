

function page() {
  return (
    <div className="flex flex-col bg-background place-content-center items-start p-8 w-full">
      <div className="">
        <p className="text-blue-300 text-[10px] p-1">15min Ago</p>
        <img src="/user_share_03.jpg" alt="cumple-perrito" className="rounded-md" />
        <p className="text-gray-300 font-semibold text-lg py-8">Hoy en casa Alguien esta Cumple</p>
        <p className="text-blue-300">#celebración #cumpleaños #familia #amor</p>
      </div>
      <div className="">
      <p className="text-blue-300 text-[10px] p-1">40min Ago</p>
        <img src="/user_share_04.jpg" alt="cumple-perrito" className="rounded-md" />
        <p className="text-gray-300 font-semibold text-lg py-8">Abusando de un buen postre</p>
        <p className="text-blue-300">#postre #delicia #dulces #gula</p>
      </div>

      <div className="">
      <p className="text-blue-300 text-[10px] p-1">5h Ago</p>
        <img src="/user_share_05.jpg" alt="cumple-perrito" className="rounded-md" />
        <p className="text-gray-300 font-semibold text-lg pt-8 pb-1">Soy un puto ganster</p>
        <p className="text-blue-300">#diversión #aventura #amistad #locura</p>
      </div>
    </div>
  )
}

export default page
