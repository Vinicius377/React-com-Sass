import "./styles.scss"
import {BsThreeDotsVertical,BsCircle,BsSearch} from "react-icons/bs"
import { MdMessage} from "react-icons/md"
import { Context } from "../../context/ContextCont"
import { useContext } from "react"

export function Header(){
    const {contacts,setSearch}=useContext(Context)


    const searchContact=(event)=>{
        const upper= contacts.map(cont=>cont.toUpperCase())
        const newList=[]
        upper.find((cont,index)=>{
            if(cont.startsWith(event.target.value.toUpperCase())){
                newList.push(contacts[index])
            }
        })
        setSearch(newList)
     }
    return(
        <>
        <header>
        <div className="img"/>
        <div className="icons">
            <BsCircle size="22px"/>
           <MdMessage size="22px"/>
            <BsThreeDotsVertical size="22px"/>
        </div>
        </header>
        <div className="seach">
            <BsSearch />
            <input placeholder="Pesquisar ou começar nova mensagem" onChange={(e)=>searchContact(e)}></input>
    </div>
    </>
    )
}