import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getAllAccounts } from "@/lib/axios";
import { notify } from "@/lib/utils";

type ListarContasProps = {
    filters: any;
};

export function ListarContas({ filters }: ListarContasProps) {
    const [data, setData] = useState([]);

    const columns = {
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        cordx: "Coordenada X",
        cordy: "Coordenada Y",
        opcoes: (row: any) => <Opcoes id={row.accountId} editar={id => alert(id)} excluir={id => alert(id)} />
    };

    const getDataAccounts = async () => {
        try {
            const accounts = await getAllAccounts();
            setData(accounts.data);
        } catch (error: any) {
            notify(error.message);
        }
    };

    useEffect(() => {
        getDataAccounts();
    }, []);

    useEffect(() => {
        getDataAccounts();
    }, [filters]);

    return (
        <div className='flex flex-row h-auto m-10'>
            <div className='max-h-[500px] overflow-y-auto'>
                <DataTable data={data} columns={columns} />
            </div>
        </div>
    );
}

function Opcoes({ id, editar, excluir }: { id: string; editar: (id: string) => void; excluir: (id: string) => void }) {
    return (
        <div className='flex justify-center items-center'>
            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 flex flex-row items-center' onClick={() => editar(id)}>
                Editar <FaEdit className='ml-2'></FaEdit>
            </Button>
            <Button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 flex flex-row items-center' onClick={() => excluir(id)}>
                Excluir <FaTrash className='ml-2'></FaTrash>
            </Button>
        </div>
    );
}
