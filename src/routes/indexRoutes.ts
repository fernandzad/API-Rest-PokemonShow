import { Request, Response, Router} from 'express'

class IndexRoutes{

    router: Router

    constructor(){
        this.router = Router()
        this.router
    }

    routes(){
        this.router.get('/'), (req: Request,res:Response ) => res.send('Hello')
    }
}

const indexRoutes = new IndexRoutes()
indexRoutes.routes()

export default indexRoutes.router