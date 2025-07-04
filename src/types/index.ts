export interface Message {
    id: string;
    sender: string;
    recipient: string;
    content: string;
    timestamp: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
}