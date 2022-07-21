const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

// /!\ Bind the router db to the app
app.db = router.db;

const rules = auth.rewriter({
  // Permission rules
  // "api/users": 600,
  // "api/todos": 440,
});

// You must apply the middlewares in the following order
app.use(rules);

// You must apply the auth middleware before the router
app.use(auth);

app.use("/api", router);
app.listen(3005, () => {
  console.log("JSON Server is running at http://localhost:3005");
});
