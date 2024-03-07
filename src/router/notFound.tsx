export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold mb-4'>Oops! Página não encontrada</h1>
            <p className='text-lg text-gray-600'>
                Parece que você seguiu um link quebrado ou digitou um endereço incorreto. Por favor, verifique o endereço e tente novamente.
            </p>
        </div>
    );
}
