import app from "./boot/bootstrap.js";

app.listen(process.env.PORT, () => {
    console.log(`Application is running on port http://127.0.0.1:${process.env.PORT}`);
});
