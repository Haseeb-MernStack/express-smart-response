# 🚀 express-smart-response

A lightweight TypeScript middleware for **Express.js** that adds `res.success()` and `res.error()` helpers — giving you a **clean, consistent, and maintainable** API response format.

---

## 📦 Installation

````bash
npm install express-smart-response
# or
yarn add express-smart-response
💡 Why Use express-smart-response?

Building REST APIs usually means repeating this pattern again and again 👇

js
Copy code
res.status(200).json({ success: true, data, message: "OK" });
res.status(400).json({ success: false, error: "Bad Request" });
That repetition makes code messy and inconsistent.
This package solves that problem by giving you simple, typed helpers:

✅ res.success() → for successful responses

❌ res.error() → for error responses

🧠 keeps your API consistent across all routes

🪶 lightweight — zero external dependencies

⚙️ Setup
1. Import and use the middleware
ts
Copy code
import express from "express";
import { smartResponseMiddleware } from "express-smart-response";

const app = express();

// enable JSON + middleware
app.use(express.json());
app.use(smartResponseMiddleware());
2. Use inside your routes
ts
Copy code
app.get("/api/hello", (req, res) => {
  res.success({ message: "Hello World" }, "Fetched successfully!");
});

app.get("/api/error", (req, res) => {
  res.error("Something went wrong!", 500, { reason: "Server error" });
});
🧠 Response Structure
✅ Success
json
Copy code
{
  "status": "success",
  "message": "Fetched successfully!",
  "data": {
    "message": "Hello World"
  }
}
❌ Error
json
Copy code
{
  "status": "error",
  "message": "Something went wrong!",
  "code": 500,
  "errors": {
    "reason": "Server error"
  }
}

🔍 Use Case Example
Problem:
Most Express developers repeat res.status().json() code everywhere — often with inconsistent structure (sometimes data, sometimes result, etc.).

Solution:
With express-smart-response, you define one standard response shape across your entire app — readable, predictable, and easy to maintain.

This is perfect for:

🧑‍💻 MERN-stack backend engineers

🧩 API-first applications

⚙️ Microservices needing standard responses

🧰 Advanced Example
You can even attach metadata:

ts
Copy code
res.success(users, "Users list", { total: users.length });
Result:

json
Copy code
{
  "status": "success",
  "message": "Users list",
  "data": [{ "name": "Haseeb" }],
  "meta": { "total": 1 }
}


---

## 🤖 Continuous Integration (GitHub Actions)

This project supports **auto publishing to npm** whenever a new version tag is pushed.

### How to use
1. Go to your GitHub repo → **Settings → Secrets → Actions**
2. Add a secret named **`NPM_TOKEN`** with your npm access token
3. Create a new release tag and push:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
````

### 🌟 Support

If you like this package, please **star it on GitHub** and share it with other backend developers!  
Every star motivates me to build more open-source tools ❤️

---

## ✅ Summary of What You Have Now

| File                            | Purpose                              |
| ------------------------------- | ------------------------------------ |
| `.gitignore`                    | Keeps your local repo clean          |
| `.npmignore`                    | Publishes only production files      |
| `.github/workflows/publish.yml` | Automates npm publishing             |
| `README.md`                     | Professional, complete documentation |
| `tsconfig.build.json`           | Builds your TypeScript sources       |
| `package.json`                  | Ready for production release         |

---
