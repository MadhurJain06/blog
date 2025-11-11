# Full Stack blog website (MERN)

A personal blog platform built with Node.js + JavaScript + CSS/HTML.

## 🚀 Project Overview  
This project is a blogging system (frontend + backend) composed of:  
- **client/** – The front-end code (HTML, CSS, JavaScript)  
- **api/** – The backend (Node.js)  
- Built mainly in **JavaScript (83.2 %)**, with **CSS (15.2 %)** and a bit of **HTML (1.6 %)**. :contentReference[oaicite:1]{index=1}  
- Purpose: Share blog content, possibly with CRUD operations, etc.

## ✅ Features  
- Clean client UI for reading/creating blog posts
- <img width="1037" height="582" alt="image" src="https://github.com/user-attachments/assets/c1954b48-3d2a-4497-93da-b20f62ae258b" />

- Backend API to support blog data operations  
- Modular folder structure (client + api) .
```
- blog/
├── api/              # Node.js backend code  
├── client/           # Frontend UI code  
├── node_modules/     # Installed dependencies  
├── package-lock.json  
└── package.json  
```
- Uses standard web technologies (JS, CSS, HTML) + Node.js environment.
- Uses JWT authentication.
- Good base for extending — e.g., user authentication, comments, styling themes.
- Allows to edit the already created blog (only for the author) and also show the last updated time for a blog
- <img width="1034" height="822" alt="image" src="https://github.com/user-attachments/assets/f956888e-ae15-44bf-9578-9095410ed341" />

- <img width="1164" height="931" alt="image" src="https://github.com/user-attachments/assets/414bdc0b-d85e-4eeb-bf3a-13159ca777df" />
- Stores content and cover images in MongoDB.


Although its only a minimalist design, but still provides smooth UI and easy to use. 


## 🧰 Getting Started  
### Prerequisites  
- Node.js (v14+ recommended)  
- npm or yarn  
- (Optional) A database if you extend it (e.g., MongoDB, PostgreSQL)  

### Installation  
```bash
# Clone the repo
git clone https://github.com/MadhurJain06/blog.git  
cd blog  

# Install backend dependencies
cd api  
npm install  

# Install frontend dependencies (if any)
cd ../client  
npm install  
