const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI; // Asegúrate de que esta variable esté definida

    try {
        await mongoose.connect(DB_URI); // Usa la variable de entorno
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error de conexión:', err);
    }
};

module.exports = dbConnect;