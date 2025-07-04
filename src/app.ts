import express from 'express';
import { setMessagesRoutes } from './routes/messages';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setMessagesRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});