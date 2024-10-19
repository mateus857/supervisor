"use client";

import { Table } from "flowbite-react";
import SidebarComponent from "../../sidebar/page";
import { PencilAltIcon, SearchIcon, DocumentReportIcon, RefreshIcon, SortAscendingIcon } from "@heroicons/react/solid";

export default function EntidadesPage() {
    return (

        <div className="relative overflow-x-auto bg-gray-50 min-h-screen sm:rounded-lg">
            <SidebarComponent />
            <div className="flex-1 ml-64 py-10">
                <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">

                    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <main className="p-4">
                            <h1 className="text-2xl font-bold">Cadastro de Entidades</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Gerencie e visualize as entidades cadastradas no sistema.
                            </p>
                        </main>
                    </div>
                </header>
                <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-2 p-2">
                                <div className="w-full md:w-1/2">
                                    <form className="flex items-center">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                            </div>
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
                                        <SortAscendingIcon className="h-4 w-4 mr-2" />
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
...                                    </Table.HeadCell>
                                        <Table.HeadCell className="min-w-[120px]">Código</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[80px] hidden md:table-cell">Sit</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[200px]">Nome</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[150px] hidden lg:table-cell">Autoriz</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Cod. Sit</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">FJ</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[150px] hidden xl:table-cell">CNPJ/CPF</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[120px] hidden lg:table-cell">Razão Social</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Insc.Est</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[60px] hidden lg:table-cell">RG</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[80px] hidden xl:table-cell">Endereço</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Complemento</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Número</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Bairro</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden lg:table-cell">Cod. Ibge</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Município</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">UF</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">CEP</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Email</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Fone</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Cartão</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Limite Ch</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Limite Cred</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Saldo Cred.</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Saldo Cheq.</Table.HeadCell>
                                        <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Cod. Preço</Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">Edit</span>
                                        </Table.HeadCell>
                                    </Table.Head>

                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell>
                        <PencilAltIcon className="w-5 h-5 text-blue-500 cursor-pointer" title="Editar" />
                      </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            1
                                            </Table.Cell>
                                            <Table.Cell className="hidden md:table-cell">Sliver</Table.Cell>
                                            <Table.Cell>Laptop</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">Macbook Pro</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">12345</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">10</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">123456789012</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">12345678</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">Vasilh Info</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">01</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">05</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">1.65%</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">07</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">3.00%</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">12345</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">98765</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">Ativo</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">$2999</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">$2899</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">$2799</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">$2699</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">$2599</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">Sim</Table.Cell>
                                            <Table.Cell className="hidden xl:table-cell">$2999</Table.Cell>
                                            <Table.Cell className="hidden lg:table-cell">001234</Table.Cell>
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
    );
}
