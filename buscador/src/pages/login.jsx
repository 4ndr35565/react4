import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const{login} = useAuth() 
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() 
        login(username, password)
    }

    return(
        <div className="" >
            <form className="  bg-blue-300 text-center ml-200 mr-200 mt-80 p-10 rounded-lg" onSubmit={handleSubmit}>
                <h2 className="font.bold text-2xl mb-5">Login</h2>
                <input className="bg-grey text-black font-bold p-2 border-2 rounded-lg mb-5" type="text" placeholder="Correo" onChange={(e) => setusername(e.target.value)} value={username}></input><br></br>
                <input className="bg-grey text-black font-bold p-2 border-2 rounded-lg mb-5" type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}></input><br></br>
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Iniciar sesion</button>
            </form>
        </div>
    )
}