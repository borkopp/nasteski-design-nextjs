import { Palette, Shield, Ruler } from "lucide-react";

export default function ServiceIcons() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-24  py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 max-w-sm mx-auto">
            <div className="mb-4">
              <Palette 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Современ Дизајн</h3>
            <p className="text-gray-600 text-sm">Обезбедете стил и приватност со нашите уникатни дизајни.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 max-w-sm mx-auto">
            <div className="mb-4">
              <Ruler 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">По Мера</h3>
            <p className="text-gray-600 text-sm">Прилагодени решенија според вашите потреби и простор.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 max-w-sm mx-auto">
            <div className="mb-4">
              <Shield 
                className="w-10 h-10 "
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Висок Квалитет</h3>
            <p className="text-gray-600 text-sm">Изработени од најквалитетни материјали за долготрајност.</p>
          </div>
        </div>
      </div>
    </div>
  )
}