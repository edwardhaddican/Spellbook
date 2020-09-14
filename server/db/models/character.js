const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('character', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 20
    }
  },
  class: {
    type: Sequelize.ENUM(
      'barbarian',
      'bard',
      'cleric',
      'druid',
      'fighter',
      'monk',
      'paladin',
      'ranger',
      'rogue',
      'sorcerer',
      'warlock',
      'wizard'
    ),
    allowNull: false
  },
  attributeStrength: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 8,
    validate: {
      min: 1,
      max: 24
    }
  },
  attributeDexterity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 8,
    validate: {
      min: 1,
      max: 24
    }
  },
  attributeConstitution: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 8,
    validate: {
      min: 1,
      max: 24
    }
  },
  attributeIntelligence: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 8,
    validate: {
      min: 1,
      max: 24
    }
  },
  attributeWisdom: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 8,
    validate: {
      min: 1,
      max: 24
    }
  },
  attributeCharisma: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 8,
    validate: {
      min: 1,
      max: 24
    }
  }
})

module.exports = Character
