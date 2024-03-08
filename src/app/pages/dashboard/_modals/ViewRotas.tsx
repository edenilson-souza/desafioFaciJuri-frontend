import { DataTable } from "@/components/ui/dataTable";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { getRotas } from "@/lib/axios";
import { notify } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ViewRotas({ isOpen, onClose }: any) {
    const [points, setPoints] = useState([] as any);
    const [distance, setDistance] = useState(0);
    const handleCancel = () => {
        setPoints([] as any);
        onClose();
    };

    const getData = async () => {
        try {
            const { data } = await getRotas();
            setPoints(data.path);
            setDistance(data.distance);
        } catch (error: any) {
            notify(error.message, { type: "error" });
        }
    };

    const columns = {
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        x: "Coordenada X",
        y: "Coordenada Y"
    };

    useEffect(() => {
        if (isOpen) {
            getData();
        }
        setPoints([] as any);
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={handleCancel}>
            <DialogTrigger />
            <DialogContent className='max-w-12xl'>
                <DialogHeader>
                    <DialogTitle>Rotas</DialogTitle>
                    <DialogClose />
                </DialogHeader>
                <DialogDescription className={"m-10"}>
                    {points.length == 0 && <p>Não há rotas cadastradas</p>}
                    {points.length > 0 && (
                        <>
                            <p>Menor Distância total: {distance}</p>
                            <DataTable data={points} columns={columns} />
                        </>
                    )}
                </DialogDescription>
                <DialogFooter>
                    <div className='w-full flex justify-between items-center '>
                        <button onClick={handleCancel}>Fechar</button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
