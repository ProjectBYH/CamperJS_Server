//주석형태로 백업

// const Sequelize = require('sequelize');
// const request2 = require('request');
// const {campingImageURL, camping} = require('../models')
// const numOfRowsURL = 10;
// const ServiceKey2 = process.env.CAMPINGAPIKEY;
// const contentId2 = camping.findAll({raw: true, attributes: ['contentId']}).then((result) => {
//   for(let j = 0; j < 1600; j++) {
//     const options2 = {
//           'method': 'GET',
//           'url': `https://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList?ServiceKey=${ServiceKey2}&numOfRows=${numOfRowsURL}&MobileOS=ETC&MobileApp=AppTest&contentId=${result[j].contentId}&_type=json`,
//           'headers': {
//           }
//         };
//         request2(options2, function (error, response, body) {
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

