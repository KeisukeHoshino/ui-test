/** @type {import("ts-jest").JestConfigWithTsJest} **/
export default {
  // testの実行環境を指定
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
  },
  // jest-domの拡張マッチャーを使用可能に
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
