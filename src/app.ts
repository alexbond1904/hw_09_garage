import express, {Application} from 'express';
import garageRoutes from "./routes/garageRoutes";

const app:Application = express();
const PORT = 3000;

app.use(express.json()); // -> or ./utils/parseBody.ts

app.use('/api/garage', garageRoutes);

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})
