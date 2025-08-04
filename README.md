# Astronomy Data Explorer

A professional full-stack demo app for exploring galaxies, stars, planets, and black holes—powered by Django, Postgres, and Next.js.

---

## 🚀 Quick Start

1. **Clone the repository:**

    ```sh
    git clone https://github.com/johnnyblaze993/galaxyApp.git
    cd pokedexPyApp
    ```

2. **Start the stack (builds images and seeds the database):**

    ```sh
    docker compose up --build
    ```

    - Builds all Docker images and starts the database, backend, and frontend.
    - Applies Django migrations and seeds the database with astronomy data automatically.

3. **(Optional but recommended for frontend development) Enable hot reloading:**

    ```sh
    docker compose watch
    ```

    - **Open a second terminal window/tab** and navigate to your project directory.
    - Run `docker compose watch` to enable hot reloading (file sync) for the frontend.
    - No need to stop or rebuild containers—`watch` works live with your running stack.
    - **When to use:** Whenever you want to see frontend changes reflected instantly in your browser.

4. **Stop all containers:**

    ```sh
    docker compose down
    ```

    - Shuts down all containers and the network.

---

## 🔄 Typical Development Flow

1. Start the stack:

    ```sh
    docker compose up --build
    ```

2. In a second terminal, enable hot reloading:

    ```sh
    docker compose watch
    ```

3. Make code changes and see them live!
4. When done, stop everything:

    ```sh
    docker compose down
    ```

---

## 🛠️ Dependency or Dockerfile Updates

- **If you add new Python/Node packages or change Dockerfile(s), always re-run:**

    ```sh
    docker compose up --build
    ```

- The database will be seeded with astronomy data on first run or any time the DB is reset (by removing the volume).

---

## ❓ FAQ & Troubleshooting

- **Do I need Python, Node, or Postgres installed locally?**  
  _No!_ Docker handles everything for you.

- **Do I need to run migrations or seed data manually?**  
  _No!_ The backend service does this automatically at startup.

- **How do I reset the database (delete all data and start fresh)?**

    ```sh
    docker compose down -v
    docker compose up --build
    ```

- **How do I see my changes reflected instantly in the frontend?**  
  Use `docker compose watch` in a separate terminal while the stack is running.

- **Do I have to restart everything after every change?**  
  _No._ Only if you change dependencies or Dockerfiles. Otherwise, just use `watch` for frontend live updates.

---

## 📝 Project Structure

- **/backend/**: Django app and management commands for data/API
- **/frontend/**: Next.js frontend application (with hot reloading support)
- **docker-compose.yml**: Orchestrates backend, frontend, and database
- **Database**: PostgreSQL with auto-seeded astronomy data

---

## 🌌 Explore the API

Once the stack is running, check these endpoints:

- [http://localhost:8000/api/galaxies/](http://localhost:8000/api/galaxies/)
- [http://localhost:8000/api/stars/](http://localhost:8000/api/stars/)
- [http://localhost:8000/api/planets/](http://localhost:8000/api/planets/)
- [http://localhost:8000/api/blackholes/](http://localhost:8000/api/blackholes/)

---

## 💡 Contribution Tips

- Run `npm install` in `/frontend` locally if you want code completion and TypeScript type checking in your editor (VSCode, etc.).
- Use VSCode Dev Containers for a fully containerized dev experience (optional).

---

**Happy exploring! 🚀**
