const express = require("express")
const router = express.Router()
const services = require("../services/services")
const controllers = require("../controllers/controllers")


router.get("/", services.home)
router.get("/add", services.add)
router.get("/update/:id", controllers.findOne)

router.get("/api/user", controllers.findAll)
// router.get("/api/user/:id", controllers.findOne)
router.post("/api/user", controllers.create)
router.put("/api/user/:id", controllers.update)
router.delete("/api/user/:id", controllers.delete)

module.exports = router
