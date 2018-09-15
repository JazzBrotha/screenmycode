// Import everything from express and assign it to the express variable
import express from 'express';

// Import WelcomeController from controllers entry point
import { WelcomeController } from './controllers';

import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = Number(process.env.PORT) || 3000;

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

// Mount the WelcomeController at the /welcome route
app.use('/api', WelcomeController);

// Serve the application at the given port
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});
