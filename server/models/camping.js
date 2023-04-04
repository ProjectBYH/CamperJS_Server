'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class camping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  camping.init({
    campingName: DataTypes.STRING,
    lineIntro: DataTypes.STRING,
    contentId: DataTypes.STRING,
    intro: DataTypes.TEXT,
    bizrno: DataTypes.STRING,
    hvofBgnde: DataTypes.STRING,
    hvofEnddle: DataTypes.STRING,
    lctCl: DataTypes.STRING,
    doNm: DataTypes.STRING,
    sigunguNm: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    addr1: DataTypes.STRING,
    addr2: DataTypes.STRING,
    mapX: DataTypes.STRING,
    mapY: DataTypes.STRING,
    tel: DataTypes.STRING,
    homepage: DataTypes.STRING,
    gnrlSiteCo: DataTypes.STRING,
    autoSiteCo: DataTypes.STRING,
    glampSiteCo: DataTypes.STRING,
    caravSiteCo: DataTypes.STRING,
    indvdlCaravSiteCo: DataTypes.STRING,
    siteBottomCl1: DataTypes.STRING,
    siteBottomCl2: DataTypes.STRING,
    siteBottomCl3: DataTypes.STRING,
    siteBottomCl4: DataTypes.STRING,
    siteBottomCl5: DataTypes.STRING,
    operDeCl: DataTypes.STRING,
    operPdCl: DataTypes.STRING,
    toiletCo: DataTypes.STRING,
    swrmCo: DataTypes.STRING,
    wtrplCo: DataTypes.STRING,
    brazierCl: DataTypes.STRING,
    trlerAcmpnyAt: DataTypes.STRING,
    caravAcmpnyAt: DataTypes.STRING,
    sbrsCl: DataTypes.STRING,
    posblFcltyCl: DataTypes.STRING,
    exprnProgrmAt: DataTypes.STRING,
    exprnProgrm: DataTypes.STRING,
    clturEventAt: DataTypes.STRING,
    clturEvent: DataTypes.STRING,
    eqpmnLendCl: DataTypes.STRING,
    animalCmgCl: DataTypes.STRING,
    tourEraCl: DataTypes.STRING,
    imageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'camping',
  });
  return camping;
};