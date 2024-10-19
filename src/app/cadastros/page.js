// pages/cadastros.js
import { Card } from 'flowbite-react';
import Link from 'next/link';
import { ShoppingCartIcon, OfficeBuildingIcon, UsersIcon, UserIcon, BuildingIcon, PrinterIcon, KeyboardIcon, DesktopComputerIcon, DeviceTabletIcon, ScaleIcon, MenuIcon, TerminalIcon, TagIcon, CurrencyDollarIcon, CreditCardIcon, ChatAlt2Icon, BeakerIcon, FlagIcon, InboxIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import SidebarComponent from "../sidebar/page"; 

function CadastrosPage() {
  // Array completo de cadastros e ícones associados
  const cadastros = [
    { name: 'Produtos', icon: ShoppingCartIcon },
    { name: 'Entidades', icon: OfficeBuildingIcon },
    { name: 'Grupo Usuários', icon: UsersIcon }, // ícone representando grupos
    { name: 'Usuários', icon: UserIcon },
    { name: 'Empresas', icon: OfficeBuildingIcon }, // ícone representando empresas
    { name: 'Impressoras', icon: PrinterIcon },
    { name: 'Teclados', icon: DesktopComputerIcon }, // ícone representando teclados
    { name: 'Telas', icon: DesktopComputerIcon }, // ícone representando telas
    { name: 'PDVs', icon: DeviceTabletIcon }, // ícone representando PDVs
    { name: 'Tributações', icon: ScaleIcon }, // ícone representando tributações
    { name: 'Menus de Códigos', icon: MenuIcon }, // ícone representando menus
    { name: 'Menus Operacionais', icon: TerminalIcon }, // ícone representando menus operacionais
    { name: 'Promoções', icon: TagIcon }, // ícone representando promoções
    { name: 'Meios de Pagamentos', icon: CurrencyDollarIcon }, // ícone representando meios de pagamento
    { name: 'Planos de Pagamentos', icon: CreditCardIcon },
    { name: 'Comunicadores', icon: ChatAlt2Icon }, // ícone representando comunicadores
    { name: 'Vasilhames', icon: BeakerIcon }, // ícone representando vasilhames
    { name: 'Bandeiras', icon: FlagIcon }, // ícone representando bandeiras
    { name: 'Bins', icon: InboxIcon }, // ícone representando bins
    { name: 'Questionário', icon: QuestionMarkCircleIcon } // ícone representando questionário
  ];
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarComponent /> {/* Renderizando a sidebar */}

      <div className="flex-1 ml-64 py-10">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">    
            <div className="flex flex-col justify-center w-full py-8"> 
              <div className="px-4 mx-auto max-w-screen-lg lg:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto">
                  {cadastros.map((item, index) => (
                    <Link key={index} href={`/cadastros/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <item.icon className="h-8 w-8 text-blue-500 mb-2" /> {/* Ícone SVG */}
                          <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                        </div>
                      </Card>
                    </Link>
                  ))}
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrosPage;
