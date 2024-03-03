import PersonSchema from "../models/person.model.js";

export const getAllPersons = (req, res) => {
    res.send("getting all persons")
}

export const getPerson = (req, res) => {
    res.send("getting person by id")
}
export const createPerson = (req, res) => {
    res.send("Creating person ")
}
export const deletePerson = (req, res) => {
    res.send("deleting  person by id")
}