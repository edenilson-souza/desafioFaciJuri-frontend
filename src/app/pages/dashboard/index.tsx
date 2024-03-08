import Button from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import { useState } from "react";
import { NovoClienteModal } from "@/app/pages/dashboard/_modals/NovoClienteModal";
import { Filters } from "@/app/views/Filters";
import { ListarContas } from "@/app/views/ListarContas";
import { ViewRotas } from "./_modals/ViewRotas";

export function Dashboard() {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenRotas, setIsOpenRotas] = useState(false);

    const openModalCreate = () => setIsOpenCreate(true);
    const closeModalCreate = () => setIsOpenCreate(false);

    const openModalRotas = () => setIsOpenRotas(true);
    const closeModalRotas = () => setIsOpenRotas(false);

    const [filters, setFilters] = useState({});

    const options = [
        { value: "name", label: "Nome" },
        { value: "email", label: "Email" },
        { value: "phone", label: "Telefone" }
    ];

    return (
        <Layout>
            <div className='flex flex-row h-auto m-10'>
                <div className='flex-grow h-20 flex justify-start items-center mt-4'>
                    <Filters setFilters={(e: any) => setFilters(e)} options={options} />
                </div>
                <div className='flex-shrink-0 h-20 flex justify-end items-center mt-4'>
                    <Button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "} onClick={openModalRotas}>
                        Rotas
                    </Button>
                    <div className='m-4'></div>
                    <Button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "} onClick={openModalCreate}>
                        Novo Cliente
                    </Button>
                </div>
            </div>
            <ListarContas filters={filters}></ListarContas>
            <NovoClienteModal
                isOpen={isOpenCreate}
                onClose={() => {
                    closeModalCreate();
                    setFilters({ ...setFilters });
                }}
            />
            <ViewRotas
                isOpen={isOpenRotas}
                onClose={() => {
                    closeModalRotas();
                }}
            />
        </Layout>
    );
}
