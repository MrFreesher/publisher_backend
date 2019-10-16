const Sequelize = require('sequelize');
const db = require('../db/database');

const categorySchema = db.sequelize.define(
  'category',
  {
    kategoria: {
      type: Sequelize.CHAR(64)
    },
    id_czasopisma: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false, tableName: 'kategoria' }
);
categorySchema.associate = models => {
  categorySchema.belongsTo(models.magazine);
};
module.exports = categorySchema;
