const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const app = jsonServer.create();
const middleware = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(middleware);
app.use("/api", router);

app.listen(port);