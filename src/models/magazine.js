const Sequelize = require('sequelize');
const db = require('../db/database');

const magazineSchema = db.sequelize.define(
  'magazine',
  {
    id_czasopisma: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Tytul: {
      type: Sequelize.CHAR(255)
    },
    Tytul2: {
      type: Sequelize.CHAR(255)
    },
    issn: {
      type: Sequelize.CHAR(9)
    },
    e_issn: {
      type: Sequelize.CHAR(9)
    },
    issn2: {
      type: Sequelize.CHAR(9)
    },
    e_issn2: {
      type: Sequelize.CHAR(9)
    }
  },
  { timestamps: false, tableName: 'czasopisma' }
);
magazineSchema.associate = models => {
  magazineSchema.hasMany(models.category);
  magazineSchema.hasMany(models.points);
};

module.exports = magazineSchema;
