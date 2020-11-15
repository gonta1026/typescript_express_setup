module.exports = {
    /* テスト実行中に個々のテストのレポートを出力するかどうかを指定します。すべてのエラーはテスト完了後に最後尾にも出力されます。 */
    verbose: true,
    moduleFileExtensions: ['js', 'ts'],/* 対象の拡張子を選択 */
    /* ts-jest で TypeScript をよしなに実行してもらうのに必要です。 */
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "node",
    coverageReporters: ["json", "text", "lcov", "clover"],
    transform: {
        "^.+\\.ts$": "ts-jest"
    },
    globals: {
        jest: {
          "tsConfig": "tsconfig.json"
        }
    },
    /* テスト対象のマッチ */
    testMatch: ["**/tests/**/*.test.ts"],
  };
