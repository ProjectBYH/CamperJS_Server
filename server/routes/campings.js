const express = require("express");
const { camping } = require("../models");

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    const campings = await camping.findAll({
      // include: [{
      //   model: campingImageURL,
      //   attributes: ['id'],
      //   where: {
      //     id: id,
      //   }
      // }]
    });
    res.json(campings);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
