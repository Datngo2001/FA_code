const jsonServer = require("json-server");
const auth = require("json-server-auth");

const middlewares = jsonServer.defaults();

const app = jsonServer.create();
// Set default middlewares (logger, static, cors and no-cache)
app.use(middlewares);
const router = jsonServer.router("db.json");

// /!\ Bind the router db to the app
app.db = router.db;

const rules = auth.rewriter({
  // Permission rules
  "api/users": 660,
  "api/todos": 660,
});

// You must apply the middlewares in the following order
app.use(rules);

// You must apply the auth middleware before the router
app.use(auth);

app.use("/api", router);
app.listen(3005, () => {
  console.log("JSON Server is running at http://localhost:3005");
});
