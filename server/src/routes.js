import express from "express";

function createRouter() {
  const router = express.Router();

  /* Define all routes */
  router.get("/hello", async (req, res) => {
    res.json({ msg: "Hello, world!" });
  });

  router.get("/hello/:name", async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  return router;
}

export default createRouter;
