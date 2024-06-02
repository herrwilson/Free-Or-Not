const roomRouter = require("express").Router();
const Room = require("../models/room");

/**
 * Return sigle room by id
 */
roomRouter.get("/:id", (req, res) => {
  Room.findOne({ id: req.params.id })
    .then(function(dbRoom) {
      res.json(dbRoom);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

/*
 * Returns `:amount` sized array of rooms
 * ordered by how many detections they have
 */
roomRouter.get("/top/:amount", (req, res) => {
  Room.find({})
    .then((result) => {
      result = result.sort((a, b) => b.detections.length - a.detections.length);
      result = result.splice(0, req.params.amount);
      // return empty arr if database has no rooms
      if (result.length <= 0) {
        return res.json([]);
      }
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

/*
 * Return all rooms form the database
 */
roomRouter.get("/", (_req, res) => {
  Room.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

/*
 * Add a new room to the database
 */
roomRouter.post("/", (req, res) => {
  const newRoom = new Room({
    id: req.body.id,
    name: req.body.name,
    status: req.body.status,
    location: req.body.location,
  });
  Room.create(newRoom)
    .then(function(dbRoom) {
      res.json(dbRoom);
    })
    .catch(function(err) {
      // If an error occurred, log it
      console.log(err);
      res.json(err);
    });
});

module.exports = roomRouter;
