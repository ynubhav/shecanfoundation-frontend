
# SheCanFoundation Frontend

A modern, responsive React front-end built with Vite for **SheCanFoundation**, providing user signup/sign-in, dashboard metrics, achievement tracking, and leaderboard features.

---

## ✅ Table of Contents

1. [Introduction](#introduction)  
2. [Demo / Live Site](#demo--live-site)  
3. [Tech Stack](#tech-stack)  
4. [Features](#features)  
5. [File Structure](#file-structure)  
6. [Installation & Setup](#installation--setup)  
7. [Usage & Development](#usage--development)  
8. [Configuration](#configuration)  
9. [Common Issues & Troubleshooting](#common-issues--troubleshooting)  
10. [Contributing](#contributing)  
11. [License](#license)

---

## Introduction

SheCanFoundation-frontend is a React-based responsive client application designed for SheCanFoundation’s user-facing portal. Through intuitive components like progress bars, achievement cards, and a competitive leaderboard, it empowers users to track progress and engage in community challenges.

---

## Demo / Live Site

https://shecanfoundation-frontend.vercel.app/leaderboard

---

## Tech Stack

- **Framework:** React  
- **Bundler / Dev Tool:** Vite  
- **Language:** JavaScript (JSX)  
- **Linting:** ESLint
- **Hosting:** Vercel (via `vercel.json`)

---

## Features

- ✅ **Sign Up / Sign In** flow (`SignUpAndIn.jsx`)  
- 📊 **User Dashboard** for activity tracking (`DashBoard.jsx`)  
- 🏆 **Leaderboard** displaying top performers (`LeaderBoard.jsx`)  
- 🎖️ **Achievement Cards** to showcase milestones (`achievementCard.jsx`)  
- 📈 **Progress Bar** component to visualize progress (`progressBar.jsx`)  
- 🌐 Common navigation and footer (`NavBar.jsx`, `Footer.jsx`)  

---

## File Structure ⚙️

frontend/  
├── public/  
├── src/  
│ ├── assets/  
│ ├── components/  
│ │ ├── achievementCard.jsx  
│ │ ├── footer.jsx  
│ │ ├── navBar.jsx  
│ │ └── progressBar.jsx  
│ ├── pages/  
│ │ ├── SignUpAndIn.jsx  
│ │ ├── DashBoard.jsx  
│ │ └── LeaderBoard.jsx  
│ ├── App.jsx  
│ ├── main.jsx  
│ └── index.css  
├── .eslintrc.js  
├── .gitignore  
├── package.json  
├── readme.md
├── vite.config.js  
└── vercel.json

---

## Installation & Setup

1. Ensure you have **Node.js** (v16+) and **npm** or **yarn** installed.  
2. In the root directory, run:

   ```bash
   npm install
   # or
   yarn install
## Usage & Development

To start the project locally:
 ```bash
  npm run dev
# or
yarn dev
```
Project will run at: `http://localhost:3000/`
## Contributing

1.  Fork the repository
    
2.  Create your branch: `feature/my-feature`
    
3.  Commit your changes and push
    
4.  Open a Pull Request
    

We welcome contributions to improve the project!
## License

This project is licensed under the **MIT License**.  
Feel free to use, distribute, and contribute with attribution.
Made By: 
```
ynubhav
```