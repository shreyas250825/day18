# 📘 React Query Assignment — Day 16

This repository contains solutions to three interactive tasks using **React Query (TanStack)**, **custom hooks**, **optimistic UI updates**, and **JSON Server** as a mock backend.

🔗 **GitHub Repo**: [https://github.com/shreyas250825/day18](https://github.com/shreyas250825/day18)

---

## Tasks Overview

### 🔹 Task 1: Posts Manager
- Fetch posts from `/posts` using `useQuery`
- Create new posts using `useMutation`
- Implements **optimistic UI updates**
- Uses local backend (`json-server`)
- Error + loading states handled

### 🔹 Task 2: Users Manager
- Fetch users from `/users`
- Create new users (`John Doe`)
- Uses `useMutation` + `invalidateQueries` to refresh UI

### 🔹 Task 3: SWR + Custom Hook
- Implements custom hook `useUsers()`
- Adds `staleTime` and `cacheTime` for **stale-while-revalidate**
- Uses `useMemo()` to cache computation (e.g., user count)
- React Query DevTools integrated

---

## 📁 Folder Structure

day18/
├── public/
├── src/
│ ├── api/
│ │ └── userApi.js
│ ├── components/
│ │ ├── AddPost.jsx
│ │ ├── AddUser.jsx
│ │ ├── PostsList.jsx
│ │ └── UsersList.jsx
│ ├── hooks/
│ │ └── useUsers.js
│ ├── App.jsx
│ ├── main.jsx
│ └── style.css
├── db.json
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🧩 Tech Stack

- ⚛️ React + Vite
- 📦 TanStack React Query v5
- 🔄 JSON Server (local backend)
- 🧠 React Query DevTools
- 🖥️ Concurrently (to run backend + frontend)

---

## 🚀 How to Run the Project

###  Step 1: Clone the Repo

```bash
git clone https://github.com/shreyas250825/day18.git
cd day18
 Step 2: Install Dependencies
bash
Copy
Edit
npm install
 Step 3: Run App + Backend Together
bash
Copy
Edit
npm run dev
This starts:

Frontend at: http://localhost:5173

Backend (JSON Server) at: http://localhost:4000

🔍 API Endpoints (Mock Backend)
http://localhost:4000/posts

http://localhost:4000/users

📸 Screenshots & Results
All screenshots and terminal outputs are available in the Assignment PDF.

Author,
Shreyas Salian
