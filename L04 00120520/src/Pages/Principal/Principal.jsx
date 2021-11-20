import { BiLogIn } from "react-icons/all";
import { Navigate, useNavigate } from 'react-router-dom';
const Principal = () =>
{
    const navigate = useNavigate();



    return <div className="flex flex-col justify-center items-center w-screen h-screen bg-indigo-600">
        <p className="text-2xl m-1 text-white">Este es la pagina principal</p>
        <p className="text-2xl mb-3 text-white">Para loguearte presiona este boton</p>
        <button onClick={()=>{navigate('/login')}}><BiLogIn className="text-3xl text-white"/></button>
    </div>

}

export default Principal