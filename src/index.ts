import express, { Request, Response, Router, Express, NextFunction } from 'express'
const app: Express = express()

// CORSの許可
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

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
router.get('/api/', (req: Request, res: Response) => {
    res.send(req.query)
})
// ex: curl -X POST -H "Content-Type: application/json" -d '{"message":"success!!"}' localhost:8080/api/post
router.post('/api/post', (req: RequestPostMessage, res: Response) => {
    res.send(req.body.message)
})
// ルーティングをセット！
app.use(router)

// 8000番ポートでAPIサーバ起動（番号は適当な番号にした）
app.listen(8080, () => { console.log('Example app listening on port 8080 !!') })
