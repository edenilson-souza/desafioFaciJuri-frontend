import Button from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAccount, updateAccount } from "@/lib/axios";
import { notify } from "@/lib/utils";
import { useEffect, useState } from "react";

export function EditClienteModal({ id, isOpen, onClose }: any) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cordx, setCordx] = useState("");
    const [cordy, setCordy] = useState("");

    const handleChanges = (e: any) => {
        const { name, value } = e.target;
        switch (name) {
            case "nome":
                setNome(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "telefone":
                if (value.length > 15) return;
                const phoneNumber = value.replace(/\D/g, "");
                let formattedValue = value;
                formattedValue = formatPhoneNumber(phoneNumber);
                setTelefone(formattedValue);
                break;
            case "cordx":
                setCordx(value);
                break;
            case "cordy":
                setCordy(value);
                break;
            default:
                break;
        }
    };

    const handleCancel = () => {
        setNome("");
        setEmail("");
        setTelefone("");
        setCordx("");
        setCordy("");
        onClose();
    };

    const handleUpdate = () => {
        try {
            const data = {
                name: nome,
                email: email,
                phone: telefone,
                cordx: cordx,
                cordy: cordy
            };

            update(data);
        } catch (error: any) {
            notify(error.message, { type: "error" });
        }
    };

    const update = async (data: any) => {
        try {
            await updateAccount(id, data);
            notify("Cliente atualizado com sucesso!");
            handleCancel();
        } catch (error: any) {
            notify(error.response.data.message, { type: "error" });
        }
    };

    const getData = async () => {
        try {
            const { data } = await getAccount(id);
            setNome(data.name);
            setEmail(data.email);
            setTelefone(data.phone);
            setCordx(data.cordx);
            setCordy(data.cordy);
        } catch (error: any) {
            notify(error.message, { type: "error" });
        }
    };

    useEffect(() => {
        if (!id) return;
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <Dialog open={isOpen} onOpenChange={handleCancel}>
            <DialogTrigger />
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar cliente</DialogTitle>
                    <DialogClose />
                </DialogHeader>
                <DialogDescription>
                    <Label className='ml-1 text-black'>Nome Completo *</Label>
                    <Input type='text' className='mb-2 text-gray-800' name='nome' value={nome} onChange={e => handleChanges(e)} />
                    <Label className='ml-1 text-black'>E-mail *</Label>
                    <Input type='email' className='mb-2 text-gray-800' name='email' value={email} onChange={e => handleChanges(e)} />
                    <Label className='ml-1 text-black'>Telefone *</Label>
                    <Input type='text' className='mb-2 text-gray-800' name='telefone' value={telefone} onChange={e => handleChanges(e)} />
                    <Label className='ml-1 text-black'>Coordenada X *</Label>
                    <Input type='number' className='mb-2 text-gray-800' name='cordx' value={cordx} onChange={e => handleChanges(e)} />
                    <Label className='ml-1 text-black'>Coordenada Y *</Label>
                    <Input type='number' className='mb-2 text-gray-800' name='cordy' value={cordy} onChange={e => handleChanges(e)} />
                </DialogDescription>
                <DialogFooter>
                    <div className='w-full flex justify-between items-center '>
                        <button onClick={handleCancel}>Fechar</button>
                        <Button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "} onClick={() => handleUpdate()}>
                            Editar
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

const formatPhoneNumber = (phoneNumber: string) => {
    const formattedPhoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    return formattedPhoneNumber;
};
