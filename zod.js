const express = require('express')
const app = express()

const z = require('zod')

// const z = z.object({
//     email: z.string().email(),
//     password: z.string().min(9)
// })

const schema = z.array(z.number())

app.use(express.json())

app.get('/health-checkup', (req,res)=>{
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: "Not a valid input"
        })
    }
  else
    res.send({response})
})

app.listen(3500)