import express from "express";
import {
  createPerson,
  deletePerson,
  getAllPersons,
  getPerson,
} from "../controllers/person.controllers.js";

const router = express.Router();

router.get("/persons", getAllPersons);
router.get("/persons/:id", getPerson);
router.post("/persons", createPerson);
router.delete("/persons/:id", deletePerson);

export default router;
