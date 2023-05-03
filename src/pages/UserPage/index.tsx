import { Header } from "../../components/Header"
import { Schedule } from "../../components/Schedule"
import logo from "../../assets/logo.svg"

export const UserPage = () =>{
    return(
        <>
        <Header src={logo} alt="logo" rote="/" linkName="sair" className="logoImg"/>

        <div>
            <div>
            <Schedule />
            </div>
            <div className="scheduling">

            </div>
        </div>
        </>
    )
}