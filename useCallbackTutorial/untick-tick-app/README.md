
---

# 🛠 React `useCallback` Performance Demo

This project demonstrates how to use the `useCallback` hook in React to optimize component rendering.

It includes three example cases:
✅ Correct use of `useCallback` to reduce unnecessary re-renders
⚠ Misuse of `useCallback` where it adds complexity without benefit
❌ Not using `useCallback` when it’s actually needed, causing avoidable re-renders

---

## 📂 Project Structure

```
/src
  /components
    CorrectButton.jsx
    MisusedButton.jsx
    NoCallbackButton.jsx
  App.jsx
  index.js
```

---

## 🚀 How to Run

1️⃣ Clone the repo:

```bash
git clone https://github.com/yourusername/react-usecallback-demo.git
cd react-usecallback-demo
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the development server:

```bash
npm run dev
```

4️⃣ Open [http://localhost:5173/](http://localhost:5173/)
You’ll see three buttons and can watch the console to track which child components re-render.

---

## 📖 Related Blog Post

I wrote a detailed Medium article explaining the concepts in this project:

👉 **[Read the blog post here](https://medium.com/@lavkeshchhatani/automating-node-js-deployment-with-gitlab-ci-cd-d7d9b2982a57)**



---

## ✨ What You’ll Learn

* How function references affect React component re-renders
* When `useCallback` improves performance
* When `useCallback` adds unnecessary complexity
* How to combine `React.memo` and `useCallback` for better optimization

---

## 🧑‍💻 Author

Made with ❤️ by **Lokesh Chhatani**

* [Medium](https://medium.com/@lavkeshchhatani)
* [LinkedIn](https://www.linkedin.com/in/lokesh-chhatani-3671801b3/)
* [GitHub](https://github.com/lokesh903)

---