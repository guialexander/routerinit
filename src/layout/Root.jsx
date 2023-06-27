import { Outlet } from "react-router-dom";

import Header from "../componentes/header/Header";



const Root = () => {
  return (
   <>

   <Header />
   <main>
    todo el contenido
    <Outlet />
   </main>
   <footer> Footer</footer>
   
   </>
  )
}

export default Root;
