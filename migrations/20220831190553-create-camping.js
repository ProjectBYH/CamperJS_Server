'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('campings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campingName: {
        type: Sequelize.STRING
      },
      lineIntro: {
        type: Sequelize.STRING
      },
      contentId: {
        type: Sequelize.STRING
      },
      intro: {
        type: Sequelize.TEXT
      },
      bizrno: {
        type: Sequelize.STRING
      },
      hvofBgnde: {
        type: Sequelize.STRING
      },
      hvofEnddle: {
        type: Sequelize.STRING
      },
      lctCl: {
        type: Sequelize.STRING
      },
      doNm: {
        type: Sequelize.STRING
      },
      sigunguNm: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.STRING
      },
      addr1: {
        type: Sequelize.STRING
      },
      addr2: {
        type: Sequelize.STRING
      },
      mapX: {
        type: Sequelize.STRING
      },
      mapY: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      homepage: {
        type: Sequelize.STRING
      },
      gnrlSiteCo: {
        type: Sequelize.STRING
      },
      autoSiteCo: {
        type: Sequelize.STRING
      },
      glampSiteCo: {
        type: Sequelize.STRING
      },
      caravSiteCo: {
        type: Sequelize.STRING
      },
      indvdlCaravSiteCo: {
        type: Sequelize.STRING
      },
      siteBottomCl1: {
        type: Sequelize.STRING
      },
      siteBottomCl2: {
        type: Sequelize.STRING
      },
      siteBottomCl3: {
        type: Sequelize.STRING
      },
      siteBottomCl4: {
        type: Sequelize.STRING
      },
      siteBottomCl5: {
        type: Sequelize.STRING
      },
      operDeCl: {
        type: Sequelize.STRING
      },
      operPdCl: {
        type: Sequelize.STRING
      },
      toiletCo: {
        type: Sequelize.STRING
      },
      swrmCo: {
        type: Sequelize.STRING
      },
      wtrplCo: {
        type: Sequelize.STRING
      },
      brazierCl: {
        type: Sequelize.STRING
      },
      trlerAcmpnyAt: {
        type: Sequelize.STRING
      },
      caravAcmpnyAt: {
        type: Sequelize.STRING
      },
      sbrsCl: {
        type: Sequelize.STRING
      },
      posblFcltyCl: {
        type: Sequelize.STRING
      },
      exprnProgrmAt: {
        type: Sequelize.STRING
      },
      exprnProgrm: {
        type: Sequelize.STRING
      },
      clturEventAt: {
        type: Sequelize.STRING
      },
      clturEvent: {
        type: Sequelize.STRING
      },
      eqpmnLendCl: {
        type: Sequelize.STRING
      },
      animalCmgCl: {
        type: Sequelize.STRING
      },
      tourEraCl: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('campings');
  }
};