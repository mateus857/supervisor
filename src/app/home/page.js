// app/home/page.js
"use client"; // Isso permite o uso de hooks no cliente

import SidebarComponent from "../sidebar/page"; // Importando o componente Sidebar corretamente

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarComponent /> {/* Renderizando a sidebar aqui */}
      <div className="flex-1 ml-64 py-10"> {/* Adicionei ml-64 para margem lateral */}

        <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">

          <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h2 className="text-2xl font-bold">Sistema Supervisor</h2>
              {/* O conteúdo da página 'Home' pode ser adicionado aqui */}
            </main>
          </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              <a href="/cadastros/produtos" class="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:bg-gray-100 transition dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg class="w-12 h-12 text-blue-500 mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2Z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Novo Cadastro</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Adicionar novo produto rapidamente.</p>
              </a>
              <a href="/relatorios" class="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:bg-gray-100 transition dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg class="w-12 h-12 text-green-500 mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 3h18v2H3zm0 14h18v2H3zm0-7h18v2H3zm0 7h18v2H3zm0-7h18v2H3zm0-7h18v2H3z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Relatórios</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Acessar relatórios.</p>
              </a>
              <a href="/processos" class="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:bg-gray-100 transition dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg class="w-12 h-12 text-yellow-500 mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 3h18v2H3zm0 14h18v2H3zm0-7h18v2H3zm0 7h18v2H3zm0-7h18v2H3zm0-7h18v2H3z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Processos</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Gerenciar processos.</p>
              </a>
              <a href="#" class="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:bg-gray-100 transition dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg class="w-12 h-12 text-red-500 mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2Z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Configurações</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Ajustar preferências do sistema.</p>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
