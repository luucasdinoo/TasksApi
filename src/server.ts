import "dotenv/config"
import express from "express";
import AppDataSource from "./shared/typeorm/data-source";
import routes from "./shared/routes";

const app = express();

AppDataSource.initialize().then(() => {
    console.log("Database connection established successfully");

    app.use(express.json())
    
    app.use(routes)

})

const PORT = process.env.PORT || 8080;

app.get('/test', (req, res) => {
    res.json({ message: 'Aplicação funcionando corretamente!' });
});

app.listen(PORT, () => console.log(`System running in port ${PORT}`))
