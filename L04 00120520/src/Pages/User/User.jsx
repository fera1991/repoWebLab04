import { useUserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";


const UserPage = () =>
{

    const navigate = useNavigate()
    const { logout } = useUserContext()

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return <div className="flex flex-col  items-center w-screen min-h-screen bg-blue-100">
        
  <p className="text-4xl m-16 font-extrabold">Bienvenido a Pagina de Usuarios.</p>
 <div className="flex flex-row  p-4 m-2" >
   <div>
     
      <p className="text-2xl font-serif text-center p-1">Hola usuario este es tu sitio</p>
      <p className="text-2xl font-serif text-red-600 text-center mt-6 m-1 p-1">Esta area es para uso publico, cualquier sujeto es Bienvienido</p>  
   </div>
    <div>
     <img className=""src="https://cdn.memegenerator.es/imagenes/memes/full/31/64/31647314.jpg" alt="">
    </div>
    
 </div>
  <p className="text-2xl font-serif text-indigo-400 text-center mt-6 m-1 p-1 ">si Desea, irse solo precione el boton.</p>
      <div className="flex justify-center">
      <button onClick={logoutHandler} className="bg-gray-400 rounded p-1 text-white m-3 transition duration-300 ease-in-out hover:bg-purple-700 py-2 px-4">Desloguearse</button>
      </div> 

</div>
    

}

export default UserPage
