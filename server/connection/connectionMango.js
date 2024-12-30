const mongoose = require('mongoose');

const mongoDB = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { 
    console.log('Connecté à MongoDB'); 
}) 
.catch((error) => { 
    console.error('Erreur de connexion à MongoDB :', error); 
});

module.exports = mongoDB;