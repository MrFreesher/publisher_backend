const Sequelize = require('sequelize');
const db = require('../db/database');

const pointsSchema = db.sequelize.define(
  'points',
  {
    id_czasopisma: {
      type: Sequelize.INTEGER
    },
    Punkty: {
      type: Sequelize.INTEGER
    },
    Rok: {
      type: Sequelize.CHAR(4)
    }
  },
  { timestamps: false, tableName: 'punktacja' }
);
pointsSchema.associate = models => {
  pointsSchema.belongsTo(models.magazine);
};
module.exports = pointsSchema;
