# Trip Planner App

Plan your trips efficiently with this full-stack application that generates a real-time driving log and maps your route using OpenStreetMap APIs.

---

## Screenshots


## <img width="1366" height="728" alt="Screenshot (197)" src="https://github.com/user-attachments/assets/0dcfe760-277e-47a7-88bd-ed535c15e933" />
<img width="1366" height="724" alt="Screenshot (196)" src="https://github.com/user-attachments/assets/24884a08-c4b5-4460-95da-653a52b98099" />
<img width="1366" height="728" alt="Screenshot (194)" src="https://github.com/user-attachments/assets/d151e574-9950-480a-a2b3-aad240120510" />
Tips for Using It:

---

## Tech Stack

| Frontend | Backend  | APIs & Tools         |
|----------|----------|----------------------|
| React (Vite) | Django REST Framework | OpenStreetMap (Nominatim) |
| React Router DOM | Django CORS Headers | Axios |
| CSS Modules | SQLite (Dev DB) | Git & Vercel/Render |

---

## Features

- Welcome screen with animated route planning
- Trip planning form to enter:
  - Current location
  - Pickup & dropoff points
  - Driving cycle in hours
  - Start date and time
- Backend geocodes cities and:
  - Generates a dynamic map route
  - Creates a 24-hour log (with breaks)
- Interactive map using real coordinates
- Log sheet displayed in graph/grid format
- Django Admin to manage trip history

---

## Project Structure
trip-planner/
├── backend/ # Django project (API)
└── frontend/ # React app (UI)


---

## Getting Started Locally

### Backend (Django)

```bash
cd backend
python -m venv venv
venv\Scripts\activate    # On Windows
pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py runserver

API will run at: http://localhost:8000/api/trip/plan/

cd frontend
npm install
npm run dev

.env (Frontend)
VITE_API_BASE_URL=http://localhost:8000/api

LICENSE

---


- Save it as `README.md` at the **root of your project**
- Push it with:

```bash
git add README.md
git commit -m "Added README"
git push


