"use client";

import SidebarComponent from "../../sidebar/page";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    Input,
    Checkbox,
    CardHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
    {
        head: "Código",
        icon: <Checkbox />,
    },
    {
        head: "Grupo",
    },
    {
        head: "Nome",
    },
    {
        head: "",
    },

];

const TABLE_ROWS = [
    {
        codigo: "15646",
        grupo: "1",
        nome: "Mateus",
    },
    {
        codigo: "26749",
        grupo: "2",
        nome: "Walter",

    },
    {
        codigo: "03578",
        grupo: "3",
        nome: "Laudecir",

    },
    {
        codigo: "15688",
        grupo: "4",
        nome: "Gustavo",
    },
];

export default function UsuariosPage() {
    return (
        <div className="relative overflow-x-auto bg-gray-50 min-h-screen sm:rounded-lg">
            <SidebarComponent />
            {/* <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> */}

            <div className="flex-1 py-0 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
                    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <main className="p-4">
                            <h1 className="text-2xl font-bold">Cadastro de Usuários</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Gerencie e visualize os usuários cadastrados no sistema.
                            </p>
                        </main>
                    </div>
                </header>

                <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <Card className="h-full w-full overflow-scroll">
                            <CardHeader floated={false} shadow={false} className="mb-4 rounded-none p-4">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                    {/* Input de Search */}
                                    <div className="w-full md:w-1/4">
                                        <Input
                                            label="Search"
                                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Botões de Ação */}
                                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 w-full md:w-auto">
                                        <button
                                            type="button"
                                            className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-full px-4 py-2 flex items-center justify-center"
                                        >
                                            <DocumentIcon className="w-5 h-5 mr-2" />
                                            Novo
                                        </button>
                                        <button
                                            className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-full px-4 py-2 flex items-center justify-center"
                                        >
                                            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                                            Ordenar
                                        </button>
                                        <button
                                            id="filterDropdownButton"
                                            className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-full px-4 py-2 flex items-center justify-center"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Filtrar
                                        </button>
                                    </div>
                                </div>
                            </CardHeader>

                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map(({ head, icon }) => (
                                            <th key={head} className="border-b border-gray-300 p-4">
                                                <div className="flex items-center gap-1">
                                                    {icon}
                                                    <Typography
                                                        color="blue-gray"
                                                        variant="small"
                                                        className="!font-bold"
                                                    >
                                                        {head}
                                                    </Typography>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TABLE_ROWS.map(
                                        ({ codigo, grupo, nome }, index) => {
                                            const isLast = index === TABLE_ROWS.length - 1;
                                            const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                                            return (
                                                <tr key={codigo}>
                                                    <td className={classes}>
                                                        <div className="flex items-center gap-1">
                                                            <Checkbox />
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-bold"
                                                            >
                                                                {codigo}
                                                            </Typography>
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            className="font-normal text-gray-600"
                                                        >
                                                            {grupo}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            className="font-normal text-gray-600"
                                                        >
                                                            {nome}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="flex items-center gap-2">
                                                            <IconButton variant="text" size="sm">
                                                                <DocumentIcon className="h-4 w-4 text-gray-900" />
                                                            </IconButton>
                                                            <IconButton variant="text" size="sm">
                                                                <ArrowDownTrayIcon
                                                                    strokeWidth={3}
                                                                    className="h-4 w-4 text-gray-900"
                                                                />
                                                            </IconButton>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        },
                                    )}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                </div>
            </div>
        </div>

    );
}
