'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Violate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Violate.init({
    NameStudent: DataTypes.STRING,
    NameViolate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Violate',
  });
  return Violate;
};