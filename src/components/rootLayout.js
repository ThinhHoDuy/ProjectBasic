import { Outlet } from "react-router-dom";
import NavBar from "./navBar";


const RootLayout = () => {
    return (
        <>
            <NavBar/>

            <main>
                <Outlet/>
            </main>
        </>
    )

}
export default RootLayout;