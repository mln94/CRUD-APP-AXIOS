const User = require('../model/model');

exports.findAll = (req, res) => {
    try {
        User.find().then(users => {
            res.send(users)
        })
    } catch(error) {
        res.status(500).render("/")
    }
}

exports.findOne = (req, res) => {
    const id = req.params.id
    try {
        User.findById(id).then(user => {
            res.render("update", {user: user})
        })
    } catch(error) {
        res.status(500).render("/")
    }
}

exports.create = async (req, res) => {
    try{
        const user = new User({
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            email: req.body.email,
            phonenumber: req.body.phonenumber
        });
        await user.save()
        res.redirect("/")
    }
    catch(err){
        res.status(500).send
    }   
}

exports.update = (req, res) => {
    const id = req.params.id
    console.log("test")
    User.findByIdAndUpdate(id, req.body, {new: true}).then(user => {
        if(user){
            res.status(200).json({message: "User updated successfully", user: user})
        }
        else {
            res.status(404).json({message: "User not found"})
        }
    }
    ).catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.delete = (req, res) => {        
    const id = req.params.id
    User.findByIdAndDelete(id).then(user => {
        if(user){
            res.status(200).json({message: "User deleted successfully"})
        }
        else {
            res.status(404).json({message: "User not found"})
        }
    }
    ).catch(err => {
        res.status(500).json({message: err.message})
    })
}