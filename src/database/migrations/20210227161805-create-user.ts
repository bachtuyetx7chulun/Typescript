import { QueryInterface, DataTypes, Sequelize } from 'sequelize'

export = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return await queryInterface.createTable('users', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
      },
      userCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    })
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return await queryInterface.dropTable('Person')
  },
}
