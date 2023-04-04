////주석형태로 백업

// const express = require('express')
// // const sequelize = require('sequelize');
// // const {campingImageURL, camping} = require('../models')
// dbConfig = require('../config/database');
// const conn = dbConfig.init();
// dbConfig.connect(conn);

// const router = express.Router()

// router.route('/')
//   .get(async (req, res, next) => {
//     try {
//       const imageUrl = "SELECT contentId, group_concat(imageUrl) FROM camper_db.campingimageurls group by contentId"
//       conn.query(imageUrl, function (err, result, fields) {
//         if (err) throw err
//         res.json(result)
//       })
//     }
//     catch (err) {
//       console.error(err)
//       next(err)
//     }
//   })

// // router.get('/', (req, res) => {
// //   const imageUrl = "SELECT contentId, group_concat(imageUrl) FROM camper_db.campingimageurls group by contentId"
// //   conn.query(imageUrl, function (err, result, fields) {
// //     if (err) throw err
// //     res.json(result)
// //   })
// // })

// module.exports = router



