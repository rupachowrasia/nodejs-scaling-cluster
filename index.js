import express from 'express';
import cluster from 'cluster';
import os from 'os';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);

const numCPUs = os.cpus().length;

if (cluster.isPrimary) { 

    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });

} else {
    const app = express();

    app.get('/non-blocking', (req, res) => {
      res.send(`Hello from Worker ${process.pid}`);
    });
  
    app.get('/heavy', (req, res) => {
      // Simulate CPU load
      let sum = 0;
      for (let i = 0; i < 1e8; i++) {
        sum += i;
      }
      res.send(`Heavy result from PID ${process.pid}: ${sum}`);
    });
  
    app.listen(3000, () => {
      console.log(`Worker ${process.pid} is listening on port 3000`);
    });
}




