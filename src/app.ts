import express from 'express';
import http from "http";

const app=express();
const server=http.createServer(app);

app.get("/api", (_, res) => {
    res.status(200).json({ status: "ok" });
  });
  
  server.listen(process.env.PORT, () => {
    console.log(`API Server started on port :${process.env.PORT}`);
  });