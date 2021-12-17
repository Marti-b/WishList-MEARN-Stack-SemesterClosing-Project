import "dotenv/config";
import {connectDatabase, seedDatabase} from "./database.js";
import createServer from "./server.js";

const appName = "Server API";
const port = process.env.PORT || 8080;

async function main() {
    try {
      await connectDatabase();
      await seedDatabase();
      const server = createServer();
      server.listen(port, () =>
        console.log(`${appName} running on port ${port}!`)
      );
    } catch (error) {
      console.error(error);
    }
  }

  main();