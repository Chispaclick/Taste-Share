import CopyRight from "@/components/copyright/CopyRight"
import Footer from "@/components/footer/Footer"


function Trend() {
  return (
    <>
    <div className="flex flex-col bg-background place-content-center items-start p-8 w-full mt-10">
      <div className="">
        <p className="text-blue-300 text-[10px] p-1 text-right">15min Ago</p>
        <img src="/user_share_03.jpg" alt="cumple-perrito" className="rounded-md" />
        <p className="text-gray-300 font-semibold text-lg pt-4">Hoy en casa Alguien esta Cumple</p>
        <p className="text-blue-300 mb-4">#celebración #cumpleaños #familia #amor</p>
      </div>
      <div className="">
      <p className="text-blue-300 text-[10px] p-1 text-right">40min Ago</p>
        <img src="/user_share_04.jpg" alt="cumple-perrito" className="rounded-md" />
        <p className="text-gray-300 font-semibold text-lg pt-4">Abusando de un buen postre</p>
        <p className="text-blue-300 mb-4">#postre #delicia #dulces #gula</p>
      </div>

      <div className="">
      <p className="text-blue-300 text-[10px] p-1 text-right">5h Ago</p>
        <img src="/user_share_05.jpg" alt="cumple-perrito" className="rounded-md" />
        <p className="text-gray-300 font-semibold text-lg pt-4">Soy un puto ganster</p>
        <p className="text-blue-300 mb-4">#diversión #aventura #amistad #locura</p>
      </div>
    </div>
    <Footer />
    <CopyRight />
    </>
  )
}

export default Trend
