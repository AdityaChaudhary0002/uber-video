require('dotenv').config(); // Step 3

const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');

const PORT = process.env.PORT || 5000; // Step 4

const server = http.createServer(app);

initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
