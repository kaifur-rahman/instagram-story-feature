# 📱 Instagram Story Feature Clone

This project is a **mobile-only Instagram-style story viewer** built using **React**, **Vite**, and **Material UI (MUI)**. It mimics the core functionality of stories in Instagram — including timed transitions, image preloading, navigation buttons, and a **dynamic progress bar** for each story.

> 🔒 Best viewed on mobile — the layout is optimized for small screens only!

---

## 🚀 Features

- ⏱️ Auto-play each story with a **5-second** timer
- 📶 Visual **progress bar** on top for each story
- 🌀 Smooth fade-in transitions on image load
- 🖱️ Navigation controls (Next / Previous)
- ⚙️ Responsive design (mobile-first approach)
- ⛔ Desktop view restricted with helpful message

---

## 🛠️ Tech Stack

| Tech            | Purpose                        |
|----------------|--------------------------------|
| **React**       | UI library                     |
| **Vite**        | Fast build tool and dev server |
| **MUI**         | Component styling              |
| **Custom Hooks**| Image load & story state logic |

---

## 📸 Screenshots

| Mobile Story View | Progress Bar |
|-------------------|--------------|
| ![Story](./screenshots/story.jpg) | ![Progress](./screenshots/progress.jpg) |

> (📸 Replace with actual screenshots from your project directory)

---

## 📂 Project Structure


---

## 🧠 Learnings & Challenges

- Syncing **image load** with **transition delay** required careful coordination using `onload` and `setTimeout`.
- Building a **responsive, animated progress bar** synced with the story timer was the most fun and challenging part.
- Restricted the view for desktops with a user-friendly message to mimic Instagram UX.

---

## 💻 Setup & Run Locally

```bash
git clone https://github.com/kaifur-rahman/instagram-story-feature.git
cd instagram-story-feature
npm install
npm run dev


---

Let me know if you want me to include deployment instructions (like Netlify/Vercel), or if you've used TypeScript or added animations with Framer Motion — I can tailor it accordingly.
