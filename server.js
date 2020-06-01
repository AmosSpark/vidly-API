// SERVER FROM app.js

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server now running on PORT: ${PORT}`));
