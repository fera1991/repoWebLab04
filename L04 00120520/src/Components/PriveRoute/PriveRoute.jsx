import {useUserContext} from '../../Contexts/UserContext'

import { BiErrorAlt } from "react-icons/all";
const PrivateRoute = ({role,children}) => {

    const {user} = useUserContext();

    if (!user || user.role != role ) {
        return <div className="flex flex-col justify-center items-center w-screen h-screen">
            <BiErrorAlt className="text-8xl"/>
            <p className="text-9xl   m-3">404</p>
            <p className="text-3xl">Not Found</p>
        </div>
        
    }
    return children;
}

export default PrivateRoute;