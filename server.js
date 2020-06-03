"use strict";

const express = require("express");
const http = require("http");

const router = express();

const PORT = 8080;
const HOST = "0.0.0.0";

const users = [
  {
    id: 0,
    name: "Corey Lanier",
    email: "iam@coreylanier.com",
    phone: "437-214-4418",
    location: "Toronto, Ontario",
  },
];

// create a user
router.route("/users").post((req, res) => {
  const user = req.body.data;
  const id = users.length;
  user.id = id;
  users.push(user);
  res.status(201).json({
    ...user,
  });
});

// get all users
router.route("/users").get((_, res) => {
  res.status(200).json({
    ...users,
  });
});

// get a user by id
router.route("/users/:id").get((req, res) => {
  const { id } = req.params;
  const user = users[id];
  res.status(200).json({
    ...user,
  });
});

// update a user by id
router.route("/users").put((req, res) => {
  const user = req.body.data;
  users[user.id] = user;
  res.status(201).json({
    ...users[user.id],
  });
});

// delete a user by id
router.route("/users/:id").delete((req, res) => {
  const { id } = req.params;
  const user = users[id];
  users.splice(id, 1);
  res.status(201).json({
    ...user,
  });
});

const server = http.createServer(router);

server.listen(4000, () => {
  console.log(`server running on https://${HOST}:${PORT}`);
});
