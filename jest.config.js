const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  // testの実行環境を指定
  testEnvironment: "jest-environment-jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  // jest-domの拡張マッチャーを使用可能に
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
