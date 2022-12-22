const cors = require("cors");
const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["Lama"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "https://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
