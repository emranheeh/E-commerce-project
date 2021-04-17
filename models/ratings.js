module.exports = (sequelize, Sequelize) => {
    const Rating = sequelize.define("ratings", {
      RatingID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      MemberID: {
        type: Sequelize.INTEGER,
        references: {
          // This is a reference to another model
          model: 'members',

          // This is the column name of the referenced model
          key: 'MemberID'
      }
      },
      ProductID: {
        type: Sequelize.UUID,
        references: {
          // This is a reference to another model
          model: 'products',

          // This is the column name of the referenced model
          key: 'ProductID'
      }
      },
      Value: {
        type: Sequelize.INTEGER
      }
    },{
      timestamps: false
    } );
  
    return Rating;
  }; 