'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dog.init(
    {
      breed: DataTypes.STRING,
      firstName: DataTypes.STRING,
      walkFreq: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Dog',
      tableName: 'dogs'
    }
  )
  return Dog
}
