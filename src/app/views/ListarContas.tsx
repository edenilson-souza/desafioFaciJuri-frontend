import { useEffect } from "react";
import Button from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import { FaEdit, FaTrash } from "react-icons/fa";

type ListarContasProps = {
    filters: any;
};

export function ListarContas({ filters }: ListarContasProps) {

    const columns = {
        nome: "Nome",
        email: "Email",
        telefone: "Telefone",
        cordx: "Coordenada X",
        cordy: "Coordenada Y",
        opcoes: (id: string) => <Opcoes id={id} editar={id => alert(id)} excluir={id => alert(id)} />
    };

    const dados = [
        {
            id: "1",
            nome: "João",
            email: "joao@example.com",
            telefone: "123456789",
            cordx: "123456789",
            cordy: "123456789"
        },
        { id: "2", nome: "Maria", email: "maria@example.com", telefone: "987654321", cordx: "123456789", cordy: "123456789" },
        { id: "3", nome: "Carlos", email: "carlos@example.com", telefone: "456789123", cordx: "123456789", cordy: "123456789" }
    ];

    useEffect(() => {
        alert(JSON.stringify(filters));
    }, [filters]);

    return (
        <div className='flex flex-row h-auto m-10'>
            <div className='max-h-[500px] overflow-y-auto'>
                <DataTable data={dados} columns={columns} />
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
