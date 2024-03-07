import Button from "@/components/ui/button";
import { Layout } from "@/components/ui/layout";
import { useState } from "react";
import { NovoClienteModal } from "@/app/pages/dashboard/_modals/NovoClienteModal";
import { Filters } from "@/app/views/Filters";
import { ListarContas } from "@/app/views/ListarContas";

export function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [filters, setFilters] = useState({});

    const options = [
        { value: "nome", label: "Nome" },
        { value: "email", label: "Email" },
        { value: "telefone", label: "Telefone" }
    ];

    return (
        <Layout>
            <div className='flex flex-row h-auto m-10'>
                <div className='flex-grow h-20 flex justify-start items-center mt-4'>
                    <Filters setFilters={(e: any) => setFilters(e)} options={options} />
                </div>
                <div className='flex-shrink-0 h-20 flex justify-end items-center mt-4'>
                    <Button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "} onClick={openModal}>
                        Novo Cliente
                    </Button>
                </div>
            </div>
            <ListarContas filters={filters}></ListarContas>
            <NovoClienteModal isOpen={isOpen} onClose={closeModal} />
        </Layout>
    );
}
