import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.database();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  database() {
    mongoose.connect(
      "mongodb://localhost/server",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server;