import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteAccount, getAllAccounts } from "@/lib/gateway";
import { notify } from "@/lib/utils";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { EditClienteModal } from "../pages/dashboard/_modals/EditClienteModal";

type ListarContasProps = {
    filters: any;
};

export function ListarContas({ filters }: ListarContasProps) {
    const [data, setData] = useState([]);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [accountId, setAccountId] = useState("");

    const columns = {
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        cordx: "Coordenada X",
        cordy: "Coordenada Y",
        opcoes: (row: any) => <Opcoes id={row.accountId} onEdit={(id: string) => openModalEdit(id)} onDelete={() => getDataAccounts()} />
    };

    const openModalEdit = (id: string) => {
        setAccountId(id);
        setIsOpenEdit(true);
    };
    const closeModalEdit = () => setIsOpenEdit(false);

    const getDataAccounts = async () => {
        try {
            const accounts = await getAllAccounts(filters);
            setData(accounts.data);
        } catch (error: any) {
            notify(error.message, { type: "error" });
        }
    };

    useEffect(() => {
        getDataAccounts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getDataAccounts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    return (
        <div className='flex flex-row h-auto m-10'>
            <div className='max-h-[500px] overflow-y-auto justify-center items-center flex flex-col'>
                <DataTable data={data} columns={columns} />
                {data.length == 0 && <p className='mt-2'>Não há dados cadastrados</p>}
            </div>
            <EditClienteModal
                id={accountId}
                isOpen={isOpenEdit}
                onClose={() => {
                    setAccountId("");
                    getDataAccounts();
                    closeModalEdit();
                }}
            />
        </div>
    );
}

function Opcoes({ id, onEdit, onDelete }: { id: string; onEdit: (id: string) => void; onDelete: () => void }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await deleteAccount(id);
            setShowConfirm(false);
            notify(response.data.message);
            onDelete();
        } catch (error: any) {
            notify(error.message, { type: "error" });
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 flex flex-row items-center' onClick={() => onEdit(id)}>
                Editar <FaEdit className='ml-2'></FaEdit>
            </Button>
            <Button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 flex flex-row items-center'
                onClick={() => setShowConfirm(true)}
            >
                Excluir <FaTrash className='ml-2'></FaTrash>
            </Button>
            <Dialog open={showConfirm} onOpenChange={() => setShowConfirm(false)}>
                <DialogTrigger />
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tem certeza que deseja excluir?</DialogTitle>
                        <DialogClose />
                    </DialogHeader>
                    <DialogFooter>
                        <div className='w-full flex justify-between items-center '>
                            <Button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "} onClick={() => setShowConfirm(false)}>
                                Não
                            </Button>
                            <button className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "} onClick={() => handleDelete()}>
                                Sim
                            </button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
