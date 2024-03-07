import Button from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

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
                    <div className='flex justify-center items-center '>
                        <select id='searchFilter' className='w-1/3 h-10 border-2 border-gray-300 rounded mr-2'>
                            {options.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <input type='text' id='searchInput' className='w-2/3 h-10 border-2 border-gray-300 rounded mr-2' placeholder='Pesquisar...' />
                        <Button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-row items-center'
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
