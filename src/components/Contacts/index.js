import "./style.scss"
import {useContext} from "react"
import {Context} from "../../context/ContextCont"

export function Contacts({name}){
    const {setCurrentCon}=useContext(Context)
   
    return(
        <div className="contact" onClick={()=>setCurrentCon(name)}> 
            <img/>
            <div className="texts">
                <h3>{name}</h3>
                <p>Ultima mensagem</p>
            </div>
        </div>
    )
}