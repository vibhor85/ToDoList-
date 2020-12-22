var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const List = require("../model/list");

router.get("/", async function (req, res, next) {
  try {
    const all = await List.find();
    res.status(200).json(all);
  } catch (err) {
    res.status(200).json({
      error: err,
    });
  }
});

router.post("/", async function (req, res, next) {
  try {
    const list = new List({
      list: req.body.item,
      _id: mongoose.Types.ObjectId(),
    });
    await list.save();
    const all = await List.find();
    res.status(200).json({
      data: all,
      itemAdded: true,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      message: err,
    });
  }
});
router.delete("/", async (req, res, next) => {
  try {
    List.deleteOne({ _id: req.body.id }, async (err) => {
      if (err) {
        console.log(err);
        res.status(200).json({
          delete: err,
        });
      } else {
        const all = await List.find();

        console.log("Successful deletion");
        res.status(200).json({
          data: all,
          delete: "deleted",
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
