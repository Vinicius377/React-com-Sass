import { createContext,useState,useEffect } from "react";

export const Context =createContext()

export function ContextProvider({children}){

    
    const [contacts,setContacts]=useState(["Vinicius","Maria","Vitor","Jose","Joao"])
    const [currentCon,setCurrentCon]=useState('')
    const [search,setSearch]=useState(contacts)
    
    useEffect(()=>{
        (async ()=>{
            const req = await fetch("https://jsonplaceholder.typicode.com/users")
            const json= await req.json()
             json.map(names=>{
                 setContacts(prev=>[...prev,names.name])
             })
          
        })()
    },[])
    
    return(
        <Context.Provider value={{contacts,setCurrentCon,currentCon,search,setSearch}}>
            {children}
        </Context.Provider>
    )
}