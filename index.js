const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo - Laboratorio 6 CI/CD');
});

// Solo escuchamos si no es un test (para que Jest no se queje)
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor corriendo en puerto ${port}`);
    });
}

module.exports = app;