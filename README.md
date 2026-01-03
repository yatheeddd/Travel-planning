# Travel-planning
eam Role Split (Very Important)

Since your project is a full-stack travel planning app, the cleanest split is:

🔹 Member 1 – Frontend (UI/UX & Screens)

Role: Frontend Developer
Main Responsibility: Everything the user sees and interacts with

Takes care of:

Login / Signup Screen

Dashboard / Home Screen

Create Trip Screen

My Trips Screen

Itinerary View (timeline/calendar UI)

Budget charts UI

Shared/Public itinerary page

Tech suggestion:

React + CSS / Tailwind / Bootstrap

Chart.js / Recharts (for budget graphs)

📁 Folder they mainly touch:

frontend/

🔹 Member 2 – Backend & Database (Core Logic)

Role: Backend + Database Engineer
Main Responsibility: Data, APIs, logic, calculations

Takes care of:

User authentication (login/signup)

Trip creation & storage

Cities, activities, itinerary data

Budget calculation logic

Public/shared itinerary access

Relational database design

Tech suggestion:

Node.js + Express

MySQL / PostgreSQL

REST APIs

📁 Folder they mainly touch:

backend/
database/

🔹 Member 3 – Integration, Search & Deployment

Role: Full-Stack / Integrator
Main Responsibility: Connect frontend ↔ backend & advanced features

Takes care of:

City Search

Activity Search & filters

Connecting APIs to frontend

Drag-drop / reorder activities

Final testing

Deployment (optional)

📁 Folder they mainly touch:

frontend/
backend/
docs/

2️⃣ GitHub Repository Structure (ONE Repo Only)

Create one GitHub repository (example: GlobeTrotter).

GlobeTrotter/
│
├── frontend/          # React app
│   ├── src/
│   └── package.json
│
├── backend/           # Node/Express app
│   ├── routes/
│   ├── controllers/
│   └── package.json
│
├── database/
│   ├── schema.sql
│   └── sample_data.sql
│
├── docs/
│   
│   ├── API.m
│   └── ER_Diagram.png
│
├── README.md
└── .gitignore
