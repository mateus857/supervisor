"use client";

import { Table } from "flowbite-react";
import SidebarComponent from "../../sidebar/page";
// import { PencilAltIcon, SearchIcon, DocumentReportIcon, RefreshIcon, SortAscendingIcon } from "@heroicons/react/solid";

export default function ProdutosPage() {
  return (
    <div className="relative overflow-x-auto bg-gray-50 min-h-screen sm:rounded-lg">
      <SidebarComponent />
      {/* <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> */}

      <div className="flex-1 ml-64 py-7">
        <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h1 className="text-2xl font-bold">Cadastro de Produtos</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie e visualize os produtos cadastrados no sistema.
              </p>
            </main>
          </div>
        </header>

        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            {/* <div className="flex flex-col justify-center w-full py-8"> */}
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            {/* <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden min-h-screen"> */}
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-2 p-2">
                <div className="w-full md:w-1/2">
                  <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
              
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search"
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-center md:space-x-3">
                  <button type="button" className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 block w-full px-4 py-2.5">
                    Novo
                  </button>
                  <button className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 block w-full px-4 py-2.5 flex items-center">
                    {/* <SortAscendingIcon className="h-4 w-4 mr-2" /> */}
                    Ordenar
                  </button>
                  <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 block w-full px-4 py-2.5 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filtrar
                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[500px]">
                <Table hoverable className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <Table.Head>
                    <Table.HeadCell className="min-w-[40px]">
...                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[120px]">Código</Table.HeadCell>
                    <Table.HeadCell className="min-w-[80px]">Emp</Table.HeadCell>
                    <Table.HeadCell className="min-w-[200px]">Descrição</Table.HeadCell>
                    <Table.HeadCell className="min-w-[150px]">Descrição Reduzida</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Diretiva</Table.HeadCell>
                    <Table.HeadCell className="min-w-[80px]">Bal.</Table.HeadCell>
                    <Table.HeadCell className="min-w-[150px]">Código Barras</Table.HeadCell>
                    <Table.HeadCell className="min-w-[120px]">Código NCM</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Vasilh.</Table.HeadCell>
                    <Table.HeadCell className="min-w-[60px] ">CST</Table.HeadCell>
                    <Table.HeadCell className="min-w-[80px]">CST Pis</Table.HeadCell>
                    <Table.HeadCell className="min-w-[60px]">Pis</Table.HeadCell>
                    <Table.HeadCell className="min-w-[80px]">CST Cofins</Table.HeadCell>
                    <Table.HeadCell className="min-w-[60px]">Cofins</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px">Cest</Table.HeadCell>
                    <Table.HeadCell className="min-w-[60px]">CTS</Table.HeadCell>
                    <Table.HeadCell className="min-w-[80px]">Ativo</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Pr.Venda</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Pr.Venda 1</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Pr.Venda 2</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Pr.Venda 3</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Pr.Venda 4</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Pr.Venda 5</Table.HeadCell>
                    <Table.HeadCell className="min-w-[80px]">Oferta</Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">Pr.Normal</Table.HeadCell>
                    <Table.HeadCell className="min-w-[80px]">Cod Tiaa</Table.HeadCell>
                    <Table.HeadCell>
                      <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                      <Table.Cell>1234</Table.Cell>
                      <Table.Cell>Sliver</Table.Cell>
                      <Table.Cell>Laptop</Table.Cell>
                      <Table.Cell>Macbook Pro</Table.Cell>
                      <Table.Cell>12345</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>123456789012</Table.Cell>
                      <Table.Cell>12345678</Table.Cell>
                      <Table.Cell>Vasilh Info</Table.Cell>
                      <Table.Cell>01</Table.Cell>
                      <Table.Cell>05</Table.Cell>
                      <Table.Cell>1.65%</Table.Cell>
                      <Table.Cell>07</Table.Cell>
                      <Table.Cell>3.00%</Table.Cell>
                      <Table.Cell>12345</Table.Cell>
                      <Table.Cell>98765</Table.Cell>
                      <Table.Cell>Ativo</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>$2899</Table.Cell>
                      <Table.Cell>$2799</Table.Cell>
                      <Table.Cell>$2699</Table.Cell>
                      <Table.Cell>$2599</Table.Cell>
                      <Table.Cell>Sim</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>001234</Table.Cell>
                    </Table.Row>
                    {/* Repita este padrão para outras linhas da tabela */}
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    
                      <Table.Cell>1234</Table.Cell>
                      <Table.Cell>Sliver</Table.Cell>
                      <Table.Cell>Laptop</Table.Cell>
                      <Table.Cell>Macbook Pro</Table.Cell>
                      <Table.Cell>12345</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>123456789012</Table.Cell>
                      <Table.Cell>12345678</Table.Cell>
                      <Table.Cell>Vasilh Info</Table.Cell>
                      <Table.Cell>01</Table.Cell>
                      <Table.Cell>05</Table.Cell>
                      <Table.Cell>1.65%</Table.Cell>
                      <Table.Cell>07</Table.Cell>
                      <Table.Cell>3.00%</Table.Cell>
                      <Table.Cell>12345</Table.Cell>
                      <Table.Cell>98765</Table.Cell>
                      <Table.Cell>Ativo</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>$2899</Table.Cell>
                      <Table.Cell>$2799</Table.Cell>
                      <Table.Cell>$2699</Table.Cell>
                      <Table.Cell>$2599</Table.Cell>
                      <Table.Cell>Sim</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>001234</Table.Cell>
                    </Table.Row>
                    {/* Repita este padrão para outras linhas da tabela */}
                  </Table.Body>
                </Table>
              </div>
              <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white"></span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white"></span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <button
                      className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </li>
                  <button
                    className={`flex items-center justify-center text-sm py-2 px-3 'text-primary-600 bg-primary-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  >
                  </button>
                  <li>
                    <button

                      className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
