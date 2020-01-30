import { Request, Response, Router } from 'express'

class Routes{
    public router: Router 
    constructor(){
        this.router = Router()
        this.routes()
    }

    routes(){
        this.router.get('/', (req, res) => {
            res.send('Root')
        })
    }
}
const handler = new Routes()
// indexRoutes.routes()

export default handler.router