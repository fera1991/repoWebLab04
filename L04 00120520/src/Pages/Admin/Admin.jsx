import { useUserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { AiFillCrown } from "react-icons/all";

const AdminPage
 = () =>
{
    const navigate = useNavigate()
    const { logout } = useUserContext()

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return <div className="flex flex-col  items-center w-screen min-h-screen bg-green-100">
        
  <p className="text-4xl m-16 font-extrabold"><AiFillCrown/> Bienvenido a la Pagina del Admin,Comandate,Lider y General</p>
 <div className="flex flex-row  p-4 m-2" >
   <div>
      <p className="text-2xl font-serif text-center p-1">Este es el mejor lugar para una entidad como usted.</p>
      <p className="text-2xl font-serif text-red-600 text-center mt-6 m-1 p-1">Solo tu posees el poder para entrar aqui</p>  
   </div>
    <div>
     <img className=""src="https://www.descargarstickers.com/publico/static/miniatura/2020/08/768574.gif" alt="">
    </div>
 </div>
  <p className="text-2xl font-serif text-indigo-400 text-center mt-6 m-1 p-1 ">Para retirarse de este hermoso lugar, presione el boton</p>
      <div className="flex justify-center">
      <button onClick={logoutHandler} className="bg-gray-900 rounded p-1 text-white m-3 transition duration-300 ease-in-out hover:bg-yellow-400 py-2 px-4">Desloguearse</button>
      </div> 

</div>
}

export default AdminPage
