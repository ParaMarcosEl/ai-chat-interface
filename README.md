# 🧠 AI Chat Interface

A simple AI chat frontend that lets users submit prompts and receive responses using the Cohere API.

## ✨ Features

- Responsive chat UI
- Cohere AI integration
- Async loading state & error handling
- Optional chat history with clear button
- Built with React + TypeScript + SCSS

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-chat-interface.git
cd ai-chat-interface
```
### 2. Install dependencies
```bash
npm install
```

### 3. Set up your Cohere API key
Create a `.env` file in the root of the project and add your API key:
```bash
VITE_CHAT_API_KEY=your-cohere-api-key-here
```
🔐 You can get a free API key by signing up at https://dashboard.cohere.com.

### 4. Run the development server
```bash
npm run dev
```
Your app will be available at http://localhost:5173

### 🧪 Run Tests
```bash
npm test
```

Uses Vitest and React Testing Library

### 🛠 Tech Stack
React + TypeScript

SCSS for styling

Cohere API for AI responses

Vite for bundling

Vitest for unit testing

### 📁 Project Structure
```bash
src/
├── components/       # ChatBox, ChatHistory
├── services/         # Cohere API integration
├── styles/           # App.scss and component styles
├── App.tsx           # Root component
├── main.tsx          # Vite entry point
```
### 📄 License
MIT – do whatever you want.
