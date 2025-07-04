# Messaging App

This is a simple messaging application built with TypeScript and Express. The application allows users to send and retrieve messages.

## Project Structure

```
messaging-app
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers             # Contains controllers for handling requests
│   │   └── messagesController.ts
│   ├── models                  # Contains data models
│   │   └── message.ts
│   ├── routes                  # Contains route definitions
│   │   └── messages.ts
│   └── types                   # Contains TypeScript type definitions
│       └── index.ts
├── package.json                # NPM package configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Features

- Send messages to other users
- Retrieve messages from the server
- Simple and clean API

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd messaging-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- `POST /messages` - Send a message
- `GET /messages` - Retrieve messages

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.