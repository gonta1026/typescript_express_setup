# node express typescriptでの最低限の環境を構築（API用を想定）


## main package version
- node 12.6.0
- npm 6.14.8
- typescript 4.0.5
- express ^4.17.1

## Reference list
- [TypeScript + Node.js プロジェクトのはじめかた2020](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)

## setup:
```
npm i
```
## npm script introduction

```
//ts-nodeを実行する
npm run dev 

//ts-nodeを実行し監視する。開発中はこれを基本使う
npm run dev:watch

// distフォルダー内を削除
npm run clean

// tscでtypescriptからjavascriptにトランスパイルさせる
npm run tsc

// distフォルダー内を一旦削除後に tscでjavascriptにトランスパイルさせる
npm run build

// nodeでexpressサーバーを起動させる。
npm run start
```

