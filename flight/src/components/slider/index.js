import React,{useContext,useEffect,useRef} from 'react'
import { Box } from '@mui/system'
import {Slider} from '@mui/material';
import {globalContext} from '../context'
import './style.css'
function PriceSelector() {

  const {value, setValue,response,refineResult,setRefineResult} = useContext(globalContext)


  const initialRender = useRef(true);

  useEffect(() => {
   
    if (initialRender.current) {
      initialRender.current = false;
    }else {
      let res
      if(response){

        
        res = response.filter(i=>{
          return Number(i.ticketPrice) >= value[0] && Number(i.ticketPrice) <=value[1] 
        })
        console.log("=>",res,value)

        setRefineResult(res)
      }
     
    } 
    
  }, [value]);





    const handleChange = (event, newValue) => {
        setValue(newValue);
   
      };
    
    


    return (
        <Box sx={{ width: 300 }}>
            <h4>Refine flight search</h4>
            <ul class="number-list">
              <li>0</li>
              <li className="li2">30000</li>
            </ul>
        <Slider
          value={value}
          min={3000}
          step={1000}
          max={30000}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    )
}

export default PriceSelector


