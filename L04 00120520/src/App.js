import Login from "./Pages/Login/Login";
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import UserPage from "./Pages/User/User";
import AdminPage from "./Pages/Admin/Admin";
import PrivateRoute from "./Components/PriveRoute/PriveRoute"
import Principal from "./Pages/Principal/Principal"
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path ="/login" element={ <Login/>}/>
      <Route path ="/redirect" element={  <p>te has logiado con exito</p>}/>
      <Route path ="/user" element={ <PrivateRoute role="user"> <UserPage/></PrivateRoute>}/>
      <Route path ="/admin" element={<PrivateRoute role="admin"> <AdminPage/></PrivateRoute>}/>
      <Route path ="/" element={ <Principal/>}/>
      <Route path="*" element={<PrivateRoute/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
