const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  
  transform: {
    ...tsJestTransformCfg,
  },
  
};
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
