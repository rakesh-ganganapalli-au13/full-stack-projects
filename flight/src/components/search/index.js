import React ,{useState,useContext} from 'react'
import {TextField,Box} from '@mui/material';
import JSONDATA from '../../data.json'
import {globalContext} from '../context'

import './style.css'

function Search() {

    const {

        response,setResponse,
        refineResult,setRefineResult,
        error,setError,
        value, setValue,      
        returned,setReturned,
        inputs,setInputs

    } = useContext(globalContext)

    const [field,setField]  = useState("text")
    const [field2,setField2]  = useState("text")

   


    const handleInputChange = (e)=>{
        const {name,value} = e.target
        setInputs({...inputs,[name]:value})
    }

    const handleSubmit = ()=>{

        if(!Object.keys(inputs).length === 4){
            return setError("please enter all fields")
        }

        let res = JSONDATA.filter((val)=>{
            return val.startAt.includes(inputs.originCity) &&
              val.endAt.includes(inputs.destinationCity) &&
               val.startingDate === inputs.departureDate &&
               val.returnDate === inputs.arrivalDate &&
               val.passegers >= Number(inputs.passengers)
        })

        setResponse(res)
        setRefineResult(res)
    }

    return (

        <div>
            <button  className="button1" style={{backgroundColor:returned?"white":"gray"}}  onClick={()=>setReturned(false)}>One Way</button>
            <button className="button2" style={{backgroundColor:returned?"gray":"transparent"}} onClick={()=>setReturned(true)}>Return</button>
            <Box sx={{ display: 'flex',flexDirection: 'column', justifyContent:"space-between"}} style={{width:"300px", height:"280px"}}>
                
                <TextField id="outlined-basic" placeholder="Enter origin city" name="originCity" variant="outlined" onChange={handleInputChange} />
                <TextField id="outlined-basic" placeholder="Enter destination city"  name="destinationCity" variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" placeholder="Departure date" type={field}  name="departureDate" onFocus={()=>setField("date")}  variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" placeholder="Return date"  type={field2} name="arrivalDate" onFocus={()=>setField2("date")} variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" placeholder="Passengers" name="passengers" variant="outlined" onChange={handleInputChange} />
                <button style={{fontSize:"17px", backgroundColor:"blue",color:"white",width:"80px" ,height:"30px", marginBottom:"5px",marginLeft:"5px",borderRadius:"0px"}} onClick={handleSubmit}>Search</button>

            </Box>

            
        </div>
    )
}

export default Search
