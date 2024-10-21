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
    { head: "Código", icon: <Checkbox /> },
    { head: "Sit" },
    { head: "Nome" },
    { head: "Autoriz" },
    { head: "Cod. Sit" },
    { head: "FJ" },
    { head: "CNPJ/CPF" },
    { head: "Razão Social" },
    { head: "Insc. Est" },
    { head: "RG" },
    { head: "Endereço" },
    { head: "Complemento" },
    { head: "Número" },
    { head: "Bairro" },
    { head: "Cod. Ibge" },
    { head: "Município" },
    { head: "UF" },
    { head: "CEP" },
    { head: "Email" },
    { head: "Fone" },
    { head: "Cartão" },
    { head: "Limite Ch" },
    { head: "Limite Cred" },
    { head: "Saldo Cred." },
    { head: "Saldo Cheq." },
    { head: "Cod. Preço" },
];

const TABLE_ROWS = [
    {
        codigo: "001",
        sit: "Ativo",
        nome: "Cliente A",
        autoriz: "Sim",
        codSit: "100",
        fj: "Física",
        cnpjCpf: "123.456.789-00",
        razaoSocial: "Cliente A Ltda",
        inscEst: "12345678",
        rg: "MG-12.345.678",
        endereco: "Rua A",
        complemento: "Apto 101",
        numero: "123",
        bairro: "Centro",
        codIbge: "3106200",
        municipio: "Belo Horizonte",
        uf: "MG",
        cep: "30100-000",
        email: "clientea@example.com",
        fone: "(31) 1234-5678",
        cartao: "1234 5678 9123 4567",
        limiteCh: "R$ 2.000,00",
        limiteCred: "R$ 5.000,00",
        saldoCred: "R$ 1.500,00",
        saldoCheq: "R$ 800,00",
        codPreco: "A1",
    },
    {
        codigo: "002",
        sit: "Inativo",
        nome: "Cliente B",
        autoriz: "Não",
        codSit: "200",
        fj: "Jurídica",
        cnpjCpf: "12.345.678/0001-99",
        razaoSocial: "Cliente B S/A",
        inscEst: "87654321",
        rg: "SP-98.765.432",
        endereco: "Av. B",
        complemento: "Sala 202",
        numero: "456",
        bairro: "Jardins",
        codIbge: "3550308",
        municipio: "São Paulo",
        uf: "SP",
        cep: "01410-000",
        email: "clienteb@example.com",
        fone: "(11) 9876-5432",
        cartao: "4321 5678 9123 6543",
        limiteCh: "R$ 3.000,00",
        limiteCred: "R$ 10.000,00",
        saldoCred: "R$ 7.000,00",
        saldoCheq: "R$ 1.200,00",
        codPreco: "B2",
    },
];

export default function EntidadesPage() {
    return (
        <div className="relative overflow-x-auto bg-gray-50 min-h-screen sm:rounded-lg">
            <SidebarComponent />

            <div className="flex-1 ml-64 py-8">
                <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
                    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
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
                        <Card className="h-full w-full overflow-scroll">
                            <CardHeader floated={false} shadow={false} className="mb-2 rounded-none p-2">
                                <div className="w-full md:w-96">
                                    <Input
                                        label="Pesquisar Entidade"
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
                                        (
                                            {
                                                codigo,
                                                sit,
                                                nome,
                                                autoriz,
                                                codSit,
                                                fj,
                                                cnpjCpf,
                                                razaoSocial,
                                                inscEst,
                                                rg,
                                                endereco,
                                                complemento,
                                                numero,
                                                bairro,
                                                codIbge,
                                                municipio,
                                                uf,
                                                cep,
                                                email,
                                                fone,
                                                cartao,
                                                limiteCh,
                                                limiteCred,
                                                saldoCred,
                                                saldoCheq,
                                                codPreco,
                                            },
                                            index
                                        ) => {
                                            const isLast = index === TABLE_ROWS.length - 1;
                                            const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                                            return (
                                                <tr key={codigo}>
                                                    <td className={classes}>
                                                        <div className="flex items-center gap-1">
                                                            <Checkbox /> {/* Checkbox adicionado aqui */}
                                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                                {codigo}
                                                            </Typography>
                                                        </div>
                                                    </td>
                                                    <td className={classes}>{sit}</td>
                                                    <td className={classes}>{nome}</td>
                                                    <td className={classes}>{autoriz}</td>
                                                    <td className={classes}>{codSit}</td>
                                                    <td className={classes}>{fj}</td>
                                                    <td className={classes}>{cnpjCpf}</td>
                                                    <td className={classes}>{razaoSocial}</td>
                                                    <td className={classes}>{inscEst}</td>
                                                    <td className={classes}>{rg}</td>
                                                    <td className={classes}>{endereco}</td>
                                                    <td className={classes}>{complemento}</td>
                                                    <td className={classes}>{numero}</td>
                                                    <td className={classes}>{bairro}</td>
                                                    <td className={classes}>{codIbge}</td>
                                                    <td className={classes}>{municipio}</td>
                                                    <td className={classes}>{uf}</td>
                                                    <td className={classes}>{cep}</td>
                                                    <td className={classes}>{email}</td>
                                                    <td className={classes}>{fone}</td>
                                                    <td className={classes}>{cartao}</td>
                                                    <td className={classes}>{limiteCh}</td>
                                                    <td className={classes}>{limiteCred}</td>
                                                    <td className={classes}>{saldoCred}</td>
                                                    <td className={classes}>{saldoCheq}</td>
                                                    <td className={classes}>{codPreco}</td>
                                                </tr>
                                            );
                                        }
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
