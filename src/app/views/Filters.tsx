import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Select } from "../../components/ui/select";

type FiltersProps = {
    setFilters: (e: any) => void;
    options: {
        value: string;
        label: string;
    }[];
};

export function Filters({ setFilters, options }: FiltersProps) {
    const handleSearch = () => {
        const searchFilter = document.getElementById("searchFilter") as HTMLSelectElement;
        const searchInput = document.getElementById("searchInput") as HTMLInputElement;
        setFilters({ [searchFilter.value]: searchInput.value });
    };

    return (
        <>
            <div className='flex flex-row h-auto'>
                <div className='w-full h-20 flex flex-col justify-center items-center'>
                    <div className='flex justify-between items-center '>
                        <Select className='w-12/1 min-w-32 rounded pl-2 border-gray-100'>
                            {options.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>
                        <Input type='text' id='searchInput' className='text-gray-800  ml-2 mr-4 min-w-32' name='email' placeholder='Pesquisar...' />
                        <Button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-row items-center  mr-4'
                            onClick={() => handleSearch()}
                        >
                            Buscar <FaSearch className='ml-2'></FaSearch>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
