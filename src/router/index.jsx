import { createBrowserRouter } from "react-router-dom";

import Root from '../layout/Root'
import Home from "../pages/home/Home";
import Loginform from "../componentes/loginform/Loginform";
import Notfound from "../pages/notfonud/Notfound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Notfound />,
        children: [

             {
                index: true,
                element: <Home />,
               
             },

             {
                path: '/login',
                element: <Loginform />,
                
             },

       




],

},

   

]);

export default router;
