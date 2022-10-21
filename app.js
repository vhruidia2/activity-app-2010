const express = require("express")

const app = express()
const port = 5000


app.get('/api', (req, res) => {

    return res.status(200).json({message: "Bienvenido al Api Victor Ruidiaz :)"})
})

app.get(`/api/dollar/:cantd`, (req, res)=>{
    let pdollar= Number(4800)

let result= pdollar * parseInt(req.params.cantd)

console.log(req.params)

    return res.status(200).json({result})

    })

    app.get(`/api/bar/:client/:age`, (req,res)=>{

if(parseInt(req.params.age) < 19){
    return res.status(200).json({message:"Prohibido el ingreso a menores de 18 años"})}else {
let client= (req.params.client)
  
console.log(req.params)

       return res.status(200).json({client,message:`Su ingreso ha sido Aprobado `})
}



    })

    app.get(`/api/master/:number1`,(req, res)=>{
if(parseInt(req.params.number1) % 2 === 0){

    return res.status(200).json({number1, messege:"Numero par"})}else{ 

        let respuesta=parseInt(req.params.number1)

        console.log(req.params)

return res.status(200).json({respuesta, message:"numero impar"})

    }



}


    )






app.listen(port, () => console.log(`Escuchando el puerto ${port}`))