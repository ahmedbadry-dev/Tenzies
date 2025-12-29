# 🎲 Tenzies Game

A fun and interactive **Tenzies game** built with **React, TypeScript, Vite, and Tailwind CSS**.
The goal is simple: roll the dice until all dice show the same number. Lock dice to keep their values between rolls and try to win in the fewest rolls possible.

---

## 🚀 Live Demo

🔗 https://ahmedbadry-dev.github.io/Tenzies/

---

## 🧠 Game Rules

- Roll the dice to generate random numbers
- Click a die to **lock** it
- The **first locked die defines the target number**
- After that, you can only lock dice with the **same number**
- Keep rolling until **all dice are locked**
- When you win, 🎉 **confetti appears!**

---

## ✨ Features

- 🎲 Random dice generation
- 🔒 Lock dice on click
- 🎯 Smart game logic (only same-number dice allowed)
- 🏆 Automatic win detection
- 🎉 Confetti celebration on win
- 🔄 Play again without refreshing
- ⚡ Fast build with Vite
- 🎨 Clean UI using Tailwind CSS

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **react-confetti**

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Button.tsx
│   ├── Message.tsx
│   └── Main.tsx
│
├── api/
│   └── numberData.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧩 Core Logic (Overview)

- Dice state is managed using `useState`
- The first clicked die determines the allowed number
- Dice that don’t match the selected number cannot be locked
- Win condition is derived using:

```ts
numbers.every((num) => num.isClicked)
```

---

## 📦 Installation & Run Locally

```bash
# clone the repo
git clone https://github.com/ahmedbadry-dev/Tenzies.git

# install dependencies
npm install

# start dev server
npm run dev
```

---

## 🏗 Build for Production

```bash
npm run build
```

---

## 🌍 Deploy on GitHub Pages

This project is deployed using **GitHub Actions** and the `gh-pages` branch.

---

## 🧪 Future Improvements

- ⏱ Timer & roll counter
- 🧠 Best score tracking
- 🔊 Sound effects
- 🎮 Difficulty levels

---

## 👤 Author

**Ahmed Badry**  
Front-End Developer (React)

- GitHub: https://github.com/ahmedbadry-dev

---

## ❤️ Acknowledgment

This project was built as part of practicing **React logic, state management, and TypeScript**.
Inspired by the classic Tenzies game.

---

Enjoy the game and feel free to ⭐ the repo if you like it! 🎲✨
