const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const login = async (req,res)=> {
    const {username,password} = req.body
    console.log(username,password);
    if(!username || !password){
        throw new BadRequest('Please provide email and password')
    }

    const id = new Date().getDate()
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})


    res.status(200).json({msg:'user created', token})
}
const dashboard = async (req,res) =>{
    
    const luckynumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`hello ${req.user.username}`, secret:`here is you lucky number ${luckynumber}`})

        
}

module.exports= {
    login,dashboard
}