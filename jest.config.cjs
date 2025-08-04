const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;


// jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

