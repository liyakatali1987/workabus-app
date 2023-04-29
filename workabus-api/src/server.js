import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/index.js";
import { userModel } from "./schemas/user.schema.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded(
   {extended: true}
));

app.get("/", (req, res) => {
    res.json({ message: "OK"})
})

// dbConnect();

const user = new userModel(
    {
        "name": "Tiaogo",
        "email": "tiaogo@gmail.com",
        "created_at": Date(),
        "updated_at": Date(),
        "password": "none",
        "age": 30,
    }
)

const filter = {email:'tiaogo@gmail.com'}
const update = {age: 33}

const doc = await userModel.findOneAndUpdate(filter, update, { new: true})

// console.log(doc);

app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
    return "Hello, world!";
})


