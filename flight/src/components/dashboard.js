import React ,{useContext} from 'react'
import Search from './search/index'
import Slider from './slider'
import Info from './card'
import {globalContext} from './context'

function Dashboard() {

    const {refineResult,inputs,response} = useContext(globalContext)
    return (

        <div>
            <div style={{width:refineResult.length?"862px":"341.5px"}} className="mainHead">
                 <h1 style={{marginLeft: "19px",marginTop: "0px"}} > Flight Search Engine</h1>
            </div>

            <div  className = "dashboard" >

            <div style={{border:"1px solid black",padding:"19px"}}>
                <Search/>
                <div style={{marginTop:"10px"}} >
                    <Slider/>
                </div>
              
            </div>

            <div style={{border:refineResult.length?"1px solid black":"none",borderLeft:"none"}} className="box2">
            {response.length?
                <div className="heading" >
                    <span style={{marginTop: "9px",fontWeight: 500,marginLeft:"37px"}}>{inputs.originCity} {">"} {inputs.destinationCity}{">"} {inputs.originCity}</span>
                    <span style={{marginLeft:"78px"}}> Depart: {inputs.departureDate}</span>
                    <div style={{marginLeft:"370px"}}> Return: {inputs.arrivalDate}</div>
                </div>:""}

            {refineResult.map((i,idx)=>{
                return(
                        <Info info={i}/>
                )
            })}
            </div><br/>
            
        </div>

        </div>


    )
}

export default Dashboard
