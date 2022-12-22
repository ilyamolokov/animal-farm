import express from "express";
import cors from "cors";
import Chance from "chance";

const app = express();
const chance = new Chance();

app.use(cors())
app.use(express.json())

const animals = [...Array(250).keys()].map(id=>{
    return {
        id:id,
        type:chance.animal(),
        age:chance.age(),
        name:chance.name(),
    }
})

app.get('/', (req, res)=>{
    try {
        //@ts-ignore
        const q:string = req.query.q?.toLowerCase() ?? '';
        const results = animals.filter(animal => animal.type.toLowerCase().includes(q));
        res.send(results);
    } catch (e) {
        res.status(400).send(e);
    }
})

app.listen(8080, ()=>console.log('listening on port http://localhost:8080'));