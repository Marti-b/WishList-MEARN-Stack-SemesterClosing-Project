import express from "express";
import Wish from "../model/wish.js";



function createRouter() {
  const router = express.Router();
  router.use(express.json())

  /* Define all routes */
  router.get("/", async (req, res) => {
    const wishes = await Wish.find();
    res.json( wishes );
  });

  router.get("/wish/:id", async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  router.post("/", async (req, res) => {
    try{
      const wish = await Wish.create(req.body);
      res.status(201);
      res.json(wish);
    } catch (error) {
      res.status(500);
      res.json({
        error: "Wish could not be created",
        details: error.toString(),
      });
    }
  });

  //Post comment
  router.put("/wish/:id", async (req, res) => {
    try {
      const wish = await Wish.findOneAndUpdate( {_id: req.params.id},
        {
        $push: {
          comment: req.body
        }
      },{
        returnDocument: 'after'
      }
        );
        res.status(201);
        res.json(wish);
      } catch (error) { 
        res.status(500);  
        res.json({
          error: "Comment could not be created",
          details: error.toString(),
        });
      }
  });
  return router;
}

export default createRouter;
