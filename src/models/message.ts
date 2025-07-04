export class Message {
    id: string;
    sender: string;
    recipient: string;
    content: string;

    constructor(id: string, sender: string, recipient: string, content: string) {
        this.id = id;
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
    }
}