"use client"
import Link from "next/link";
import React from "react";
import {
    IconButton,
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Drawer,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    HomeIcon, // Para Home
    UserGroupIcon, // Para Cadastros (Grupo Usuários)
    UsersIcon, // Para Usuários
    DocumentIcon, // Para Relatórios
    CogIcon, // Para Configurações
    ExclamationCircleIcon, // Para Processos
    LogoutIcon, // Para Log Out
    ChevronRightIcon,
    ChevronDownIcon,
    Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function SidebarComponent() {
    // const [open, setOpen] = React.useState(0);

    // const handleOpen = (value) => {
    //     setOpen(open === value ? 0 : value);
    // };
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton variant="text" size="lg" onClick={openDrawer}>
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card className="h-[calc(100vh-2rem)] w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <div className="mb-2 p-4">
                        <Typography variant="h5" color="blue-gray">
                            Unity Sistemas
                        </Typography>
                    </div>
                    <List>
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                                />
                            }
                        >
                            <Link href="/home" passHref>
                                <ListItem>
                                    <ListItemPrefix>
                                        <HomeIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Home
                                    <ListItemSuffix>
                                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                                    </ListItemSuffix>
                                </ListItem>
                            </Link>
                            <ListItem className="p-0" selected={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <UserGroupIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        Cadastros
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">

                                    <Link href="/cadastros/produtos" passHref>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Produtos
                                        </ListItem>
                                    </Link>
                                    <Link href="/cadastros/entidades" passHref>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Entidades
                                        </ListItem>
                                    </Link>
                                    <Link href="/cadastros/grupo_usuarios" passHref>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Grupo Usuários
                                        </ListItem>
                                    </Link>
                                    <Link href="/cadastros/usuarios" passHref>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Usuários
                                        </ListItem>
                                    </Link>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                />
                            }
                        >
                            <Link href="/processos" passHref>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ExclamationCircleIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Processos
                                </ListItem>
                            </Link>
                            <Link href="/relatorios" passHref>
                                <ListItem>
                                    <ListItemPrefix>
                                        <DocumentIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Relatórios
                                </ListItem>
                            </Link>
                            <ListItem className="p-0" selected={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <CogIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        Parâmetros
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Configuração Geral
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Configuração Empresa
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Processa Excepcionais
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Link href="/" passHref>
                            <ListItem>
                                <ListItemPrefix>
                                    <PowerIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Log Out
                            </ListItem>
                        </Link>
                    </List>
                </Card>
            </Drawer>
        </>

    );
}