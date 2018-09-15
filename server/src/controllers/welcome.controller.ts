// Import only what we need from express
import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/test', (req: Request, res: Response) => {
  // Reply with a hello world when no name param is provided
  console.log('request', req);
  res.send('Hello, World!');
});

router.post('/register', (req: Request, res: Response) => {
  // Extract the name from the request parameters
  const email = req.body.email;

  // Greet the given name
  res.send(`Hello, ${email}`);
});

// Export the express.Router() instance to be used by server.ts
export const WelcomeController: Router = router;
