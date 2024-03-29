const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init({
    id: {
      // define columns
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Product',
            key: 'id',
            unique: false,
        },
    },
    tag_ig: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Tag',
            key: 'id',
            unique: false,
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
});

module.exports = ProductTag;
