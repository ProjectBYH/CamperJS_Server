//주석형태로 백업

// const Sequelize = require('sequelize');
// const request3 = require('request');
// const {campingImageURL, camping} = require('../models')
// const numOfRowsURL = 10;
// const ServiceKey3 = process.env.CAMPINGAPIKEY;
// const contentId3 = camping.findAll({raw: true, attributes: ['contentId']}).then((result2) => {
//   for(let k = 1600; k < 3207; k++) {
//     // console.log(`${k}번 ${result2[k].contentId}`)

//     const options3 = {
//           'method': 'GET',
//           'url': `https://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList?ServiceKey=${ServiceKey3}&numOfRows=${numOfRowsURL}&MobileOS=ETC&MobileApp=AppTest&contentId=${result2[k].contentId}&_type=json`,
//           'headers': {
//           }
//         };
//         request3(options3, function (error, response, body) {
//           if (error) throw new Error(error);
//           //   console.log(response.body);
//           let info = JSON.parse(body);
          
//           // console.log(info.response.body.items.item)
          
//           const imageURL = async () => {
            
//             for (const i in info.response.body.items.item) {
//               await campingImageURL.create({
//                 contentId: info.response.body.items.item[i].contentId,
//                 imageUrl: info.response.body.items.item[i].imageUrl
//                 // info['response']['body']['items']['item'][i]['createdtime']
//                 // info['response']['body']['items']['item'][i]['modifiedtime']
//                 // info['response']['body']['items']['item'][i]['serialnum']
//               }
//               )
//               // console.log(el.contentId)
//             }
//         }
//         imageURL()
//         .then(() => console.log('✅ Create CampingImageURL Table Data Save success!'))
//         .catch(err => console.log(err))
//       }
//       )
//     }
//   }
//   )
//   .then(setTimeout(() => (console.log("ImageURL API 불러오는중..."), 5000)))