import express, {Request, Response} from 'express';
import { ApiController } from './controller/api.controller';

class Server {
  private apiController:ApiController;
  private app: express.Application;

  constructor(){
    this.app = express();
    this.configuration();
    this.apiController = new ApiController(); // Cria uma nova instância da api controller
    this.routes();
  }

  public configuration(){
    this.app.set('port', process.env.PORT || 3000);
  }

  public async routes(){
    this.apiController = new ApiController();
    this.app.use(`/api`,this.apiController.router);
  }

  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Api is running and listening on port ${this.app.get('port')}!`)
    });
  }
}

const server = new Server();
server.start();