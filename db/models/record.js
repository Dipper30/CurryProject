'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Record.init({
    total: DataTypes.INTEGER,
    good: DataTypes.INTEGER,
    tag: DataTypes.INTEGER,
    uid: DataTypes.INTEGER,
    date: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};