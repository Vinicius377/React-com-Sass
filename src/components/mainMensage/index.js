import "./styles.scss"
import {useContext} from "react"
import { Context } from "../../context/ContextCont"

export function Message({contacts}){
    const {currentCon}=useContext(Context)

    return(
        <div className="message">
             <header>
                <div className="img"/>
                <div>
                <h2>{currentCon}</h2>
                <p>ultima vez 10/12 as 12:00</p>
                 </div>
             </header>
        </div>
    )
}