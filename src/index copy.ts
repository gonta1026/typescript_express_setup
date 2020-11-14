import express, { Request, Response, Router, Express, NextFunction } from 'express'
import { createConnection, getRepository, Repository } from "typeorm"
import { User } from "./entity/User"
require('dotenv').config();
const env = process.env
console.log("assssa", process.env)
// import {hoge} from "src/hoge/fuga"

const app: Express = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

// interfaceの拡張
interface RequestPostMessage extends Request {
    body: {
        message: string;
    }
}

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: Router = Router()
router.get('/api/', async (req: Request, res: Response) => {
    const connection = await createConnection() //DBに接続
    const userRepository = getRepository(User)
    await readUser(userRepository)
    await connection.close() //DBとの接続をクローズ
    res.send("success!!!");
})

// ex: curl -X POST -H "Content-Type: application/json" -d '{"message":"success!!"}' localhost:8080/api/post
router.post('/api/post', (req: RequestPostMessage, res: Response) => {

    res.send(req.body.message)
})
// ルーティングをセット！
app.use(router)

app.listen(env.APP_PORT, () => {
    console.log(`Example app listening on port ${env.APP_PORT} !!`);
})


const createUser = async (userRepository: Repository<User>) => {
  console.log("### Create ###")

  await userRepository.insert({
    firstName: "Akira",
    lastName: "Yamada",
    age: 25
  })

  await userRepository.save({
    firstName: "ssasasasas",
    lastName: "Suzuki",
    age: 40
  })
}

const readUser = async (userRepository: Repository<User>) => {
  console.log("### Read ###")
  const users = await userRepository.find()
  console.log(`All Users: ${JSON.stringify(users)}`)

  const user = await userRepository.findOne({firstName: "Akira"})
  console.log(`Select User: ${JSON.stringify(user)}`)
}

interface Type {
    age: string
}

const updateUser = async (userRepository: Repository<User>) => {
  console.log("### Update ###")

  await userRepository.update({lastName: "Suzuki"}, {age: 23})

  const userAkira = await userRepository.findOne({firstName: "Akira"})
  userAkira.age= 30
  await userRepository.save(userAkira)

  const users = await userRepository.find()
  console.log(`All Users: ${JSON.stringify(users)}`)
}

const deleteUser = async (userRepository: Repository<User>) => {
  console.log("### Delete ###")

  const userAkira = await userRepository.findOne({firstName: "Akira"})
  await userRepository.remove(userAkira)

  const users = await userRepository.find()
  console.log(`All Users: ${JSON.stringify(users)}`)
}

(async () => {
  const connection = await createConnection() //DBに接続
  const userRepository = getRepository(User)
  await createUser(userRepository)
  await readUser(userRepository)
  await updateUser(userRepository)
  await deleteUser(userRepository)
  await connection.close() //DBとの接続をクローズ
})()
