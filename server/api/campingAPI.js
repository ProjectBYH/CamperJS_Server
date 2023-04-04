////주석형태로 백업

// // const express = require('express')
// const Sequelize = require('sequelize');
// const {camping} = require('../models')

// const numOfRowsCamping1 = 3207;
// const pageNo = 1;
// const ServiceKey1 = process.env.CAMPINGAPIKEY

// const request1 = require('request');
// const options1 = {
//   'method': 'GET',
//   'url': `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=${ServiceKey1}&numOfRows=${numOfRowsCamping1}&pageNo=${pageNo}&MobileOS=ETC&MobileApp=TestApp&_type=json`,
//   'headers': {
//   }
// };
// request1(options1, async function (error, response, body) {
//   if (error) throw new Error(error);
//   // console.log (response.body);
//   let info = JSON.parse(body);
//   // let setinfo = info.response.body.items.item[1].facltNm
// // console.log(setinfo)
//   const campingCreate = async () => {
//     for (const i in info.response.body.items.item) {
//     await camping.create({
//         campingName: info.response.body.items.item[i].facltNm,
//         lineIntro: info.response.body.items.item[i].lineIntro,
//         contentId: info.response.body.items.item[i].contentId,
//         intro: info.response.body.items.item[i].intro,
//         bizrno: info.response.body.items.item[i].bizrno,
//         hvofBgnde: info.response.body.items.item[i].hvofBgnde,
//         hvofEnddle: info.response.body.items.item[i].hvofEnddle,
//         lctCl: info.response.body.items.item[i].lctCl,
//         doNm: info.response.body.items.item[i].doNm,
//         sigunguNm: info.response.body.items.item[i].sigunguNm,
//         zipcode: info.response.body.items.item[i].zipcode,
//         addr1: info.response.body.items.item[i].addr1,
//         addr2: info.response.body.items.item[i].addr2,
//         mapX: info.response.body.items.item[i].mapX,
//         mapY: info.response.body.items.item[i].mapY,
//         tel: info.response.body.items.item[i].tel,
//         homepage: info.response.body.items.item[i].homepage,
//         gnrlSiteCo: info.response.body.items.item[i].gnrlSiteCo,
//         autoSiteCo: info.response.body.items.item[i].autoSiteCo,
//         glampSiteCo: info.response.body.items.item[i].glampSiteCo,
//         caravSiteCo: info.response.body.items.item[i].caravSiteCo,
//         indvdlCaravSiteCo: info.response.body.items.item[i].indvdlCaravSiteCo,
//         siteBottomCl1: info.response.body.items.item[i].siteBottomCl1,
//         siteBottomCl2: info.response.body.items.item[i].siteBottomCl2,
//         siteBottomCl3: info.response.body.items.item[i].siteBottomCl3,
//         siteBottomCl4: info.response.body.items.item[i].siteBottomCl4,
//         siteBottomCl5: info.response.body.items.item[i].siteBottomCl5,
//         operDeCl: info.response.body.items.item[i].operDeCl,
//         operPdCl: info.response.body.items.item[i].operPdCl,
//         toiletCo: info.response.body.items.item[i].toiletCo,
//         swrmCo: info.response.body.items.item[i].swrmCo,
//         wtrplCo: info.response.body.items.item[i].wtrplCo,
//         brazierCl: info.response.body.items.item[i].brazierCl,
//         trlerAcmpnyAt: info.response.body.items.item[i].trlerAcmpnyAt,
//         caravAcmpnyAt: info.response.body.items.item[i].caravAcmpnyAt,
//         sbrsCl: info.response.body.items.item[i].sbrsCl,
//         posblFcltyCl: info.response.body.items.item[i].posblFcltyCl,
//         exprnProgrmAt: info.response.body.items.item[i].exprnProgrmAt,
//         exprnProgrm: info.response.body.items.item[i].exprnProgrm,
//         clturEventAt: info.response.body.items.item[i].clturEventAt,
//         clturEvent: info.response.body.items.item[i].clturEvent,
//         eqpmnLendCl: info.response.body.items.item[i].eqpmnLendCl,
//         animalCmgCl: info.response.body.items.item[i].animalCmgCl,
//         tourEraCl: info.response.body.items.item[i].tourEraCl
//         }
//         )
//       }
//     }
//     campingCreate()
//     .then(() => console.log('✅ Create Camping Table Data Save success!'))
//     .then(() => console.log('Image API를 불러오는 중이니 임의로 터미널을 종료하지 마세요'))
//     .catch(err => console.log(err))
//     .then(setTimeout(() => 5000))
//   }
//   )