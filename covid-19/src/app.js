const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path');
const xlsx = require('xlsx')
const port = process.env.PORT || 3000



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',async(req,res) => {

    const data = {
        selected_country : false,
      
    }

    res.render('index',data)

})


app.post('/',async(req,res) => {

    const {country} = req.body


    if(country == 'Select Country'){
        const data = {
            selected_country : false,
           
        }
        return res.render('index',data)
    } 

    // 1.reded file
    const file = xlsx.readFile('covid_data.xlsx')

    // 2.sheets of files 
    const sheets = file.SheetNames

    // 3.reading the sheets of file and get all rows in sheet
    const temp = xlsx.utils.sheet_to_json(file.Sheets[sheets])

    //4.filtering the required Country data
    const countryData = temp.filter(element => element.COUNTRY_NAME == country)

    let data = {
        selected_country : true,
        ...countryData[0]
    }


    

   res.render('index',data)



})



app.get('/hospatals',async(req,res) => {

    const data = {
        selected_state : false,
      
    }
    res.render('hospatals',data)

})


app.post('/hospatals',async(req,res) => {

    const {state}  = req.body
    console.log(state)

    let hospatals = await fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
    let data2      = await hospatals.json()
    let hospatalsData = data2.data.medicalColleges

    let stateHospatals = hospatalsData.filter(hospatals=>hospatals.state == state)

    // console.log(stateHospatals)

    
    const data = {
        selected_state : true, 
        stateHospatals:stateHospatals    
    }
    res.render('hospatals',data)
    

})


app.listen(port,console.log(`server running at http://localhost:${port}`))














 // let data      = await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')

    // const data1 = await data.json()
    // const data2 = await hospatals.json()
    // console.log(data1.data.total)
    // console.log(data2.data.medicalColleges[0])