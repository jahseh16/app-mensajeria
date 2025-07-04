class MessagesController {
    private messages: Array<{ id: number; sender: string; recipient: string; content: string }> = [];
    private idCounter: number = 1;

    sendMessage(sender: string, recipient: string, content: string) {
        const message = {
            id: this.idCounter++,
            sender,
            recipient,
            content
        };
        this.messages.push(message);
        return message;
    }

    getMessages() {
        return this.messages;
    }
}

export default MessagesController;