import express from "express";
import foldersRouter from "#api/folders";
import filesRouter from "#api/files";
const app = express();
export default app;

app.use(express.json());
app.use("/folders", foldersRouter);
app.use("/files", filesRouter);

app.use((err, req, res, next) => {
    if(err.code === "23505") {return res.status(400).send(err.detail)};
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Sorry! Something went wrong.");
});