import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Set up a proxy for the external API
app.use('/api', createProxyMiddleware({ target: 'https://fakestoreapi.com', changeOrigin: true }));

// Your other routes and middleware...
app.use(cors());
// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
