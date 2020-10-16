const app = require("express")();
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is liivvvee in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
