import "./style.scss"
import { Header } from "../Header"
import { Contacts } from "../Contacts"
import { Context } from "../../context/ContextCont"
import { useContext } from "react"

export function ListContact(){
    const {search}=useContext(Context)
    
     
    return(
        <div className="list-contact">
           <Header/>
            <main>
                {search.map(cont=>{

                   return <Contacts name={cont} key={cont}/>
                })}
            </main>
        </div>
    )
}

