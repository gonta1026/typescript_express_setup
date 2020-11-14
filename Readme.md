# node express typescript typeORM setup


## main package version
- node 12.6.0
- npm 6.14.8
- typescript 4.0.5
- express ^4.17.1
- 5.6.47

## Reference list
- [TypeScript + Node.js プロジェクトのはじめかた2020](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)
- [【入門】CLIでプロジェクト構築して使い方を確認](https://www.wakuwakubank.com/posts/725-typeorm-cli-init/)
- [環境変数の取得](https://www.wakuwakubank.com/posts/662-nodejs-env/)
- [TypeORMでエンティティを定義する際のガイドライン](https://tech.bitbank.cc/typeorm-entity-guideline/)
- [TypeORMで本番運用を見据えたマイグレーション](https://qiita.com/jnst/items/9a4c1a9f15b165e0e420)

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


### memo
.envは公開しているが本来は必ず.gitignoreをしてください。

### Type ORM

```
// 全テーブル削除できる
npx ts-node node_modules/.bin/typeorm schema:drop
// userのファイルのマイグレーションファイルを新しく作成
ts-node node_modules/.bin/typeorm migration:generate - user
//　マイグレーションを実行
npx ts-node node_modules/.bin/typeorm migration:run
```

### mysql comand sample

```
insert into book (title, userId) VALUES ("titleだー", 25);
```
