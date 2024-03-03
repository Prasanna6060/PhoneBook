import { useState, useEffect } from "react";
import FilterSearch from "./components/FilterSearch";
import PersonsForm from "./components/PersonsForm";
import Numbers from "./components/Numbers";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists`);
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    axios.post("http://localhost:3001/api/persons", newPerson).then((response) => {
      setPersons([...persons, response.data]);
      console.log(response.data);
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this person?"
    );
    if (shouldDelete) {
      axios
        .delete(`http://localhost:3001/api/person/:id`)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/persons")
      .then((result) => {
        setPersons(result.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h2 className="bg-orange-500 px-3 py-4 text-center font-bold text-3xl border-b-2 border-b-slate-500">
        Phonebook
      </h2>
      <FilterSearch filter={filter} setFilter={setFilter} />

      <h3 className="font-bold text-2xl uppercase">Add a New</h3>
      <PersonsForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
      />

      <h2 className="uppercase font-bold text-xl">Numbers</h2>
      <Numbers filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
