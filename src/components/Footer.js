import Menu from 'components/ui/Menu'
import { FaFacebook, FaTwitter,FaInstagram, FaGlobe} from "react-icons/fa";


export default function Footer() {

  const menus = [
      {
         title: 'Getir\'i keşfedin',
         items: [
           {
                  title: 'Hakkımızda',
           },
           {
                  title: 'Kariyer',
           },
           {
                  title: 'Teknoloji Kariyerleri',
           },
           {
                  title: 'İletişim',
           },
           {
                  title: 'COVID-19 Duyuru',
           },
           {
                  title: 'Sosyal Sorumluluk Projeleri'
           }
         ]
      },
      {
          title: 'Getir\'i keşfedin',
          items: [
          {
                 title: 'Hakkımızda',
          },
          {
                 title: 'Kariyer',
           },
           {
                 title: 'Teknoloji Kariyerleri',
           },
           {
                title: 'İletişim',
           },
           {
                 title: 'COVID-19 Duyuru',
            },
            {
                 title: 'Sosyal Sorumluluk Projeleri'
            }
         ]
       },
       {
              title: 'İş Ortağımız Olun',
              items: [
         {
              title: 'Hakkımızda',
          },
          {
              title: 'Kariyer',
          },
          {
              title: 'Teknoloji Kariyerleri',
          },
          {
               title: 'İletişim',
          },
          {
               title: 'COVID-19 Duyuru',
          },
          {
               title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
  }
  ]

  return (
    <div className="bg-white mt-10">
       <div className="container mx-auto">
          <div className="grid grid-cols-4 pt-10">
             <section>
                <nav className="grid gap-4">
                    <h6 className="text-lg text-purple-500">Getir'i indirin!</h6>
                      <a href="#">
                          <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                      </a>
                      <a href="#">
                          <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                      </a>
                      <a href="#">
                          <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                      </a>
                  </nav>
              </section>
              {menus.map((menu, index) => <Menu key={index} {...menu} /> )}
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-6">
             <div className="text-xs text-gray-700 flex gap-x-8">
                 &copy; 2022 Getir
                   <a href="#" className="text-purple-500 hover:underline relative before:w-1 before:h-1 before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
                       Bilgi Toplumu Hizmetleri
                   </a>
             </div>
             <nav className="flex gap-x-3">
                    <a href="#" className="w-8 h-8 rounded-lg text-gray-600 transition-colors hover:bg-purple-800 hover:bg-opacity-10 hover:text-center flex items-center justify-center" >
                      <FaFacebook size={20} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg text-gray-600 transition-colors  hover:bg-purple-800 hover:bg-opacity-10 hover:text-center flex items-center justify-center" >
                      <FaTwitter size={20} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg text-gray-600 transition-colors  hover:bg-purple-800 hover:bg-opacity-10 hover:text-center flex items-center justify-center" >
                      <FaInstagram size={20} />
                    </a>
                    <a href="#" className="h-8 flex items-center px-2 gap-x-2 text-sm rounded text-gray-600 border border-gray-200 hover:bg-purple-800 hover:bg-opacity-10 hover:text-purple-700">
                       <FaGlobe size={16} />
                        Türkçe (TR)
                    </a>
             </nav>
          </div>
       </div>
    </div>
  )
}
