import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../model/user.js";

// I recommend that you store your users in MongoDB using Mongoose instead of this.
const users = [
  // These are just some test users with passwords.
  // The passwords are in clear text for testing purposes (don't do this in production).
  { id: 0, username: "john", password: "123" },
  { id: 1, username: "paul", password: "password" },
  { id: 2, username: "george", password: "qwerty" },
  { id: 3, username: "ringo", password: "l33th0xor" },
];

// We run through all users and hash their password.
// Ideally, this should happen only in POST /api/users/ when signing up a new user,
// or in PUT /api/users/ when changing the password.
function hasPassWord(user){
    users.forEach(async (user) => {
        const hashedPassword = await new Promise((resolve, reject) => {
          bcrypt.hash(user.password, 10, function (err, hash) {
            if (err) reject(err);
            else resolve(hash);
          });
        });
        user.hash = hashedPassword; // Storing the hash+salt on the user object.
        delete user.password; // Let's remove the clear text password as well
        console.log(`Hash generated for ${user.username}:`, user); // Logging for debugging purposes
      });
}


// Create the routes and export the router
export function createUsersRouter(secret) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    // TODO: Implement user account creation
    const { username, password} = req.body;

    const userExists = await User.findOne({username});


        const hashedPassword = await new Promise((resolve, reject) => {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) reject(err);
            else resolve(hash);
          });
        });
    
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    try{
        let user = await User.create({
            username : username,
            password : hashedPassword
        });
            
        user.save(); 
        res.status(201);
        res.json(user);
      } catch (error) {
        res.status(500);
        res.json({
          error: "User could not be created",
          details: error.toString(),
        });
      }
  });

  router.patch("/", (req, res) => {
    // TODO: Implement user update (change password, etc).
    res.status(501).json({ msg: "update user not implemented" });
  });

  // This route takes a username and a password and creates an auth token
  // POST /api/users/authenticate
  router.post("/authenticate", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      let msg = "Username or password missing!";
      console.error(msg);
      res.status(401).json({ msg: msg });
      return;
    }

    const user = await User.findOne({username: username} );
     console.log("User ", user);
    console.log("name: " + username, "user.password: " + user.password);

    if (user) {
      // If the user is found
      if (bcrypt.compareSync(password, user.password)) {
        const payload = { username: username };
        const token = jwt.sign(payload, secret, {
          algorithm: "HS512",
          expiresIn: "1h",
        });

        res.json({
          msg: `User '${username}' authenticated successfully`,
          token: token,
        });
      } else {
        res.status(401).json({ msg: "Password mismatch!" });
      }
    } else {
      res.status(404).json({ msg: "User not found!" });
    }
  });

  return router;
}
export default createUsersRouter;