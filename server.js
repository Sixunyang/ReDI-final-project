const express = require("express");
const app = express();
const path = require("path");
/* const bcrypt = require("bcrypt"); */
const users = [];
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.post("/register", async (req, res) => {
  try {
    /* const hashedPassword = await bcrypt.hash(req.body.password, 1); */
    users.push({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      res.redirect("/");
    }
  });

  res.redirect("/login");
});

//Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.listen(8080);
