import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose'

const app = express();
const Port = 3001;

app.use(express.json());
app.use(cors())




let data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.send(data);
});

app.get("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  console.log(id, typeof id);

  const findPerson = data.find((person) => {
    console.log(person.id);
    return person.id === id;
  });
  if (findPerson) {
    res.status(200).json(findPerson);
  }
  res.status(404).json("Person not found");
});

app.post('/api/persons', (req, res) => {
  const {name, number } = req.body;
  console.log(name, number)
  
  function generateUniqueId() {
    const timestamp = Date.now().toString(36); 
    const randomStr = Math.random().toString(36).substring(2, 8); 
    return timestamp + randomStr;
}

const id = generateUniqueId();

  const response = {name, number, id}
  console.log(response)
  res.status(200).json(response)
})

app.delete('/api/person/:id', (req, res) => {
  const id = +req.params.id;
  const person = data.filter((person) => person.id !== id);
  console.log(person)

  res.status(404).end
})

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
