let {people} = require('../data');



const getPeople = (req,res)=>{
  res.status(200).json({sucess:true, data:people})
}

const createpeople = (req,res)=>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({sucess:false, msg: 'Please provide name'})
  }
  res.status(200).json({sucess:true, person:name})
}

const postperson = (req,res)=>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({sucess:false, msg: 'Please provide name'})
  }
  res.status(200).json({sucess:true, data:[...people, name]})
}

const updatePerson = (req,res)=>{
  const {id} = req.params
  const {name} = req.body

  const person = people.find((person)=>person.id === Number(id))
  if(!person){
    return res.status(404).json({sucess:false, msg: `there's no person with id ${id}`})
  }

  const newpeople = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name
    }
    return person
})
  res.status(200).json({sucess:true, data:newpeople})
}

const deletePerson = (req,res)=>{
  const person = people.find((person)=>person.id === Number(req.params.id))
  if(!person){
    return res.status(404).json({sucess:false, msg: `there's no person with id ${req.params.id}`})
  }
  const newPeople = people.filter((person)=> person.id !== Number(req.params.id))

  return  res.status(200).json({sucess:true, data:newPeople})
}

module.exports ={
  getPeople,
  createpeople,
  postperson,
  updatePerson,
  deletePerson,
}