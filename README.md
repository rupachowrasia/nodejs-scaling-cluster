# Scaling in node.js with Cluster
> We use cluster module to scale our application across multiple CPU cores by creating multiple Node.js processes that share the same server port.

## 🚀 When to use cluster module?

- Want to utilize all CPU cores on your machine.
- Your app is I/O-heavy (e.g., APIs, HTTP requests).
- You want automatic restarts of crashed workers.

## 🔍 How It Works

- The master (primary) process forks child processes (workers).
- All workers share the same port.
- The OS load-balances the incoming connections across them.

## 🚧 Limitations

- Workers don’t share memory.
- It’s not true multithreading — it's multi-processing.
- Not suitable for CPU-heavy tasks — use worker_threads instead.

## 🛠 Tech Stack

- Node.js 
- Express
- Node.js cluster module


## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/rupachowrasia/nodejs-scaling-cluster.git

# Move into the project directory
cd nodejs-scaling-cluster

# Install dependencies
npm install

# Run the app
npm run start
