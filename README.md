# 🛠️ How to Start the Project (Dev Environment)

1. Start Docker Desktop
Make sure Docker Desktop is running before continuing.

If you closed it, open Docker Desktop from your Start Menu and wait until it says “Running.”

## 2. Start Backend + Database (Docker)

From your project root (pokedexPyApp):

bash
Copy
Edit
docker-compose up
This will start both the backend (Django) and the Postgres database.

If you want logs in your terminal, leave this window open.

To stop everything later: Press Ctrl+C.

## 3. Start the Frontend (Next.js)

Open a new terminal, then run:

bash
Copy
Edit
cd frontend
npm install        # Only if you haven’t run this before or added new deps
npm run dev
This will start your Next.js app on <http://localhost:3000>.

## 4. (Optional) Apply Django Migrations / Add Data

If you need to re-run migrations or add sample data:

bash
Copy
Edit
docker-compose run backend python manage.py migrate
docker-compose run backend python manage.py shell

## ...add your sample data using Python commands

## 5. Access Your App

Frontend: <http://localhost:3000>

Backend API: <http://localhost:8000/api/pokemon/>
