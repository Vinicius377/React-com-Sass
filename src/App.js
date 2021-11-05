import { Message } from "./components/mainMensage"
import {ListContact} from "./components/ListContact"
import { ContextProvider } from "./context/ContextCont"

export default function App(){
 

    return(
      <div className="conteudo">
      <ContextProvider>
        
          <ListContact />
          <Message />
    
        </ContextProvider>
      </div>
    )
}