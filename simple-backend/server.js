import app from "./app.js";

app.listen(process.env.PORT, () =>{
        console.log(`server is listen at port ${process.env.PORT}`);
})