import { useEffect } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/animations/Juridico.json";

export function App() {
    const redirect = () => {
        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 1800);
    };

    useEffect(() => {
        redirect();
    }, []);

    return (
        <>
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <div className='w-[80%] h-[80%] bg-blue-500 mt-10 rounded-xl flex justify-center items-center flex-col'>
                    <div className='text-white text-lg'>
                        Entrando no <a href='/dashboard'>sistema</a>, aguarde...
                    </div>
                    <Lottie className='w-[80%] h-[80%]' animationData={groovyWalkAnimation} loop={true} />
                </div>
            </div>
        </>
    );
}
