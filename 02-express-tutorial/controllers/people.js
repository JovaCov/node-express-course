let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
};

const getPeopleID = (req,res) => {
    const {id} = req.params
    const person = people.find((people) => people.id === Number(id))
    
    if (!person) {
        return res.status(404).json({succes:false, message:"please enter a valid number"})
    }
    return res.status(200).json(person)
}

const addPeople = (req,res) =>{
    const {name} = req.body
    if (name){
        people.push({id: people.length+1, name: name})
        res.status(201).json({success: true, name: people})
    }
    res.status(400).json({success: false, message: 'Please provide a name'})
};

const updatePeople = (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
}

const deletePerson = (req, res) =>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {getPeople,addPeople,updatePeople, getPeopleID, deletePerson}