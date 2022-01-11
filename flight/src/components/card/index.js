import {useContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css'
import {globalContext} from '../context'


export default function Information({info}) {

    const {returned} = useContext(globalContext)


return (
    <Card sx={{ minWidth: 275  }}style={{display:"flex",flexDirection:"row", border: "1px solid black;",marginTop:"5px",marginLeft: "13px"}} >
        <div>
            <CardContent  >
                <Typography style={{fontSize:"21px"}}>
                Rs. {info.ticketPrice}
                </Typography>
                <Typography  component="div">  {info.flightNumber} </Typography>
                <Typography >{info.startAt.split("(")[1].replace(")","")} {">"} {info.endAt.split("(")[1].replace(")","")}</Typography>
                <Typography>Depart: {info.departTime}</Typography>
                <Typography >Arrive:  {info.arriveTime}</Typography>
            </CardContent>
        </div>
        {returned?
        <div>
            <CardContent >
                <Typography  component="div" style={{marginTop:"30px"}}>{info.flightNumber}</Typography>
                <Typography >{info.endAt.split("(")[1].replace(")","")} {">"}  {info.startAt.split("(")[1].replace(")","")} </Typography>
                <Typography>Depart:{info.returnDepartTime}</Typography>
                <Typography >Arrive:  {info.returnArriveTime}</Typography>
            </CardContent>
        </div>:""}

        <div>
            <div className="icon"></div>
            <button className="bookFlight">Book this flight</button>
        </div>
      
    </Card>
  );
}
