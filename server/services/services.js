const axios = require("axios")

exports.home = (req, res) => {
    axios.get("http://localhost:3000/api/user").then(
        function(response) {
            res.render("index", {users: response.data})
        }
    )
}

exports.add = (rq,res) => {
    res.render("add")
}

exports.update = (req, res) => {
    res.render("update")
}