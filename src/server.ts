import express from 'express';

class Server{

    public app: express.Application
    constructor(){
        this.app = express()
        this.config()
    }

    config(){
        this.app.set('port', process.env.PORT || 3000)
    }

    routes(){

    }

    start(){
        const port: string = this.app.get('port')
        this.app.listen(port, () => {
            console.log(`Server listening in port: ${port}`)
        })
    }
}

const server = new Server()
server.start()