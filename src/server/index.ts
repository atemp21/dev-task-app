import express from "express";
import sequelize from "./config/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => { res.send("Hello!")});

sequelize.authenticate().then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}`));
})
.catch(()=> console.log('Unable to connect to database'))