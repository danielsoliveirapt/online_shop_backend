import express, {Request, Response} from 'express';
import apiRoutes from "./routes/api.routes";
import "./config/swagger";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json'; 
import cors from "cors"
require('dotenv').config();

const app = express();
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Fetching API from the routes
app.use("/api", apiRoutes);

app.use("/", (req: Request, res: Response): void => {
    res.send({ message: "API Online Shop." });
  });

app.set('port', process.env.PORT || 3000);

export default app;