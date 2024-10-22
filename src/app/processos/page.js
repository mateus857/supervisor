"use client"; // Adicione esta linha no início do arquivo

import { Card } from 'flowbite-react';
import Link from 'next/link';
import SidebarComponent from "../sidebar/page";
import {
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  ArchiveBoxIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';

export default function ProcessosPage() {
  // Separar os itens por categorias
  const relatorios_cadastros = [
    { name: 'Enviar Configuração', icon: Cog6ToothIcon },
    { name: 'Enviar Produtos Geral', icon: DocumentDuplicateIcon },
    { name: 'Enviar Produtos Alterados', icon: ArchiveBoxIcon },
    { name: 'Enviar Dados Entidades', icon: ClipboardDocumentListIcon },
    { name: 'Painel de Avisos', icon: TicketIcon },
    { name: 'Enviar Última Configuração Válida', icon: TruckIcon },
    { name: 'Enviar Versão PDVs Para o Servidor', icon: TicketIcon },
  ];

  const relatorios_vendas = [
    { name: 'Gerar Cupom de Vasilhames', icon: ClipboardDocumentListIcon },
  ];

  const relatorios_financas = [
    { name: 'Processamento de Cupons', icon: ClipboardDocumentListIcon },
    { name: 'Processamento de PDV Logs', icon: ClipboardDocumentListIcon },
    { name: 'Processamento de PDV', icon: ClipboardDocumentListIcon },
    { name: 'Central de Contingência', icon: ClipboardDocumentListIcon },
  ];

  const relatorios_pdvs = [
    { name: 'Gerar Pedidos de Venda', icon: ClipboardDocumentListIcon },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarComponent />
      <div className="flex-1 py-6 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col justify-center w-full py-8">
              <div className="px-4 mx-auto max-w-screen-lg lg:px-8">

                {/* Seção de Relatórios Cadastros */}
                <h2 className="text-lg font-bold mb-4">Comunicação</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_cadastros.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Seção de Relatórios Vendas */}
                <h2 className="text-lg font-bold mb-4">Vasilhames</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_vendas.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Seção de Relatórios Finanças */}
                <h2 className="text-lg font-bold mb-4">Processamentos</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_financas.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Seção de Relatórios PDVs */}
                <h2 className="text-lg font-bold mb-4">Pedidos</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_pdvs.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
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