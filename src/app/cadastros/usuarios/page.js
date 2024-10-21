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

      <div className="flex-1 ml-64 py-8">
        <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h1 className="text-2xl font-bold">Cadastro de Grupo Usuários</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie e visualize os grupos de usuários cadastrados no sistema.
              </p>
            </main>
          </div>
        </header>

        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <Card className="h-full w-full overflow-scroll">
              <CardHeader
                floated={false}
                shadow={false}
                className="mb-2 rounded-none p-2"
              >
                <div className="w-full md:w-96">
                  <Input
                    label="Search Invoice"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
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
                    ({ codigo, grupo, nome}, index) => {
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
