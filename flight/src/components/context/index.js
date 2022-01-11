import {createContext,useState} from 'react'

export const globalContext = createContext()


const Store = ({children})=>{

    const [response,setResponse] = useState([])
    const  [error,setError] = useState("")
    const [value, setValue] = useState([1000, 10000]);
    const [refineResult,setRefineResult] = useState([])
    const [returned,setReturned] = useState(false)
    const [inputs,setInputs] = useState({})



    return(
        <globalContext.Provider value={{
            response,setResponse,
            error,setError,
            value, setValue,
            refineResult,setRefineResult,
            returned,setReturned,
            inputs,setInputs
        }}>
            {children}
        </globalContext.Provider>
    )

}

export default Store;