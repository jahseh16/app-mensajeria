import { Router } from 'express';
import MessagesController from '../controllers/messagesController';

const router = Router();
const messagesController = new MessagesController();

router.post('/messages', messagesController.sendMessage.bind(messagesController));
router.get('/messages', messagesController.getMessages.bind(messagesController));

export default function setMessagesRoutes(app) {
    app.use('/api', router);
}