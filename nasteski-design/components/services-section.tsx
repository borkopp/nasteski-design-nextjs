import Image from "next/image"
import { cn } from "@/lib/utils"

export default function ServicesSection() {
  const services = [
    {
      title: "Алуминиумски огради",
      description: [
        "Професионална изработка на алуминиумски огради по мера од различни профили на приватни и деловни објекти.",
        "Внатрешни и надворешни огради кои ја надополнуваат сликата давајќи беспрекорен изглед на целото место.",
        "Дозволете си луксузен изглед во вашето опкружување по поволни цени.",
        "Напревете избор од многуте комбинации за вас по ваша мера.",
        "Едноставно и практично одржување на истите. Некои сјаеви се безвременски и траат бесконечно!"
      ],
      image: "/services/info-ogradi.png",
    },
    {
      title: "Тенди",
      description: [
        "Изработка на тенди по мера на приватни и деловни простори на тераси/влезови.",
        "Идеално решение за заштита од сонце за престојната сезона! Декорирајте го и облагородете го просторот околу вас.",
        "Обојте го во вашата омилена боја од богатата палета на платна на бои и дезени на високо квалитетното акрилно платно на познатиот австриски бренд Sattler.",
        "Изненадете го сонцето, дочекајте го подготвени, направете простор за вашето уживање!"
      ],
      image: "/services/info-tendi.png",
    },
    {
      title: "Желатин завеси",
      description: [
        "Професионална изработка на желатин завеси според вашите потреби и мери.",
        "Нашите желатин завеси се совршено решение за заштита на отворени простории за време на ладниот зимски период.",
        "Ова практично решение ви овозможува да уживате во удобноста на отворени простории, без да се изложувате на непријатно време како дожд, снег, прав и други непријатности.",
        "Нашите завеси се изработени од квалитетни материјали кои гарантираат трајност и ефикасност, штитејќи ги вас и вашиот простор од негативните влијанија на временските услови."
      ],
      image: "/services/info-zavesi.png",
    },
  ]

  return (
    <section id="services" className="w-full bg-white py-16 md:py-24 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Услуги</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Погледнете ги нашите услуги и изберете онаа која ја одговара на вашите потреби!
          </p>
        </div>
      <div className="container mx-auto px-32">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={cn(
              "flex flex-col lg:flex-row items-center gap-8 lg:gap-12",
              index !== services.length - 1 && "mb-20", // Add margin bottom except for last item
              // Middle item has reversed order
              index === 1 && "lg:flex-row-reverse"
            )}
          >
            {/* Content */}
            <div className="flex-1 space-y-6">
              {/* <h2 className="text-3xl md:text-4xl font-bold"><Fence className="w-10 h-10 text-primary" /></h2> */}
              <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
              <div className="space-y-4">
                {service.description.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex} 
                    className="text-gray-600 text-base md:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={400}
                className="object-cover rounded-lg"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}