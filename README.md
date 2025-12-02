CRM LEAD MANAGEMENT SYSTEM

A full-stack CRM Lead Management application built using React, Node.js (Express), and MongoDB. This system allows teams to create, update, track, and manage sales leads efficiently with a clean UI and secure backend APIs.

-Features

🧩 Lead Creation & Tracking – Add, edit, filter, and manage leads.
📊 Lead Status Pipeline – Track leads across stages (New → Contacted → Qualified → Converted).
📥 API Integration – Fully connected frontend-backend using REST APIs.
📱 Responsive UI – Built with React + Tailwind (or your choice) for mobile-friendly layouts.
☁️ Cloud Hosted – Backend & DB hosted on cloud (Render/Netlify/MongoDB Atlas).

-Tech Stack
Frontend
-React
-Axios
-Context API / Redux (if used)
-TailwindCSS / CSS Modules
Backend

-Node.js
-Express
-MongoDB (Atlas)
-Mongoose

API Endpoints

-GET	/api/leads	- Get all leads (with pagination & filters)
-POST	/api/leads	- Create a new lead
-PUT	/api/leads/:id - 	Update lead info or status
-DELETE	/api/leads/:id - 	Delete a lead

How to Run the Project
1. Clone the repo
git clone https://github.com/your-username/crm-lead-management.git
cd crm-lead-management
2. Install dependencies
Frontend
-cd client
-npm install
-npm start
Backend
-cd server
-npm install
-npm run dev
3. Environment Variables
Create .env file in /server:
MONGO_URI=your_mongo_db_connection
PORT=5000
Screenshots
<img width="1917" height="993" alt="image" src="https://github.com/user-attachments/assets/59bb6509-504c-4114-ab3d-ee89ce777197" />
<img width="1915" height="979" alt="image" src="https://github.com/user-attachments/assets/8458704a-1a35-42eb-8a2f-3294725e967c" />
