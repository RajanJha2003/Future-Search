import express from 'express';
import http from "http";

const app=express();
const server=http.createServer(app);

app.get("/api", (_, res) => {
    res.status(200).json({ status: "ok" });
  });
  
  server.listen(3001, () => {
    console.log(`API Server started on port :3001`);
  });