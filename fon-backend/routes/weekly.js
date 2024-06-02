const weeklyRouter = require("express").Router();
const Weekly = require("../models/weekly");

/*
 * Return single weekly by id
 */
weeklyRouter.get("/:id", (req, res) => {
  Weekly.findOne({ id: req.params.id })
    .then(function(dbWeekly) {
      res.json(dbWeekly);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

module.exports = weeklyRouter;
