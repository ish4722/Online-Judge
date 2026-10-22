# Online Judge

A web-based coding practice project combining a **Django backend** for authentication, problem management, code execution and test-case evaluation with a **React + Vite frontend**.

> **Project status:** The Django application and React source are present in this repository. The React app's integration with the Django APIs has not yet been verified end to end. The code runner currently uses host-level subprocesses and is **not a secure sandbox for untrusted code**.

## Features

- User registration and login through the Django authentication app.
- Problem listing and problem details, including test-case based judging.
- Python execution and C++ compilation/execution through the compiler app.
- Submission output comparison and verdict handling.
- Optional Gemini-powered hints/review functionality, requiring a server-side API key.
- React 19 frontend scaffold built with Vite.
- Dockerfile for the Django backend.

## Tech stack

| Area | Technology |
|---|---|
| Frontend | React, Vite, JavaScript, Tailwind CSS tooling |
| Backend | Python, Django 5.2 |
| Database | SQLite (current Django settings) |
| Code execution | Python subprocess, G++ |
| AI assistance | Google Gemini API |
| Packaging | Docker |

## Repository layout

```text
Online-Judge/
├── README.md
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── Auth/                 # Django project settings and URL routing
│   ├── Compiler/             # Code execution endpoints and models
│   ├── Problems/             # Problems, test cases, submissions and judging
│   ├── authentication/       # Registration and login
│   └── templates/            # Shared Django templates
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.jsx
        ├── Components/
        └── assets/
```

## Run locally

### Prerequisites

- Python 3.11+
- Node.js (LTS) and npm
- G++/GCC if you want to execute C++ submissions
- A Gemini API key only if you use AI-assisted features

### 1. Start the Django backend

From the repository root:

```bash
cd backend
python -m venv .venv
```

Activate the environment:

**macOS/Linux**
```bash
source .venv/bin/activate
```

**Windows PowerShell**
```powershell
.venv\Scripts\Activate.ps1
```

Install dependencies and prepare the database:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The development server normally starts at http://127.0.0.1:8000/.

#### Environment configuration

The Django settings require `GEMINI_API_KEY` via `python-decouple`. Configure it as an environment variable or in a local `.env` file in the backend working directory:

```env
GEMINI_API_KEY=your_key_here
```

Do not commit `.env` files or real API keys. Keep all secrets on the server, never in React code.

### 2. Start the React frontend

Open a second terminal from the repository root:

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local frontend URL in the terminal (commonly http://localhost:5173/).

> The frontend and backend are organized separately. Configure API URLs and CORS/CSRF settings as needed when connecting the React UI to Django; that integration has not been verified in this repository.

### Optional: Docker

The backend contains a Dockerfile. Review it and its environment-variable handling before using it. Supply secrets at runtime rather than baking them into the image. The existing code-execution design should not be exposed publicly without additional isolation and resource controls.

## How judging works

1. A submission is received by the Django backend.
2. Python code is run with the Python interpreter, or C++ is compiled with G++ and then executed.
3. The judge runs the program against configured test inputs.
4. Actual output is compared with expected output and a verdict is returned/stored.

AI-generated hints or reviews are advisory; they do not replace test-case evaluation.

## Security notes

This repository is intended for development and educational use. Running arbitrary submissions with host-level subprocesses is risky. Before deploying a public judge, use a dedicated sandbox or execution service with per-submission isolation, CPU/memory/process limits, filesystem and network restrictions, output limits, and reliable process cleanup. Also review the Django secret key, `DEBUG`, `ALLOWED_HOSTS`, CSRF/CORS configuration, API-key handling, and production server setup.

## Development checklist

- [ ] Connect React screens to the Django API endpoints.
- [ ] Verify login, registration, problem browsing and submission flows end to end.
- [ ] Add automated tests for correct output, wrong answer, compilation errors and timeouts.
- [ ] Replace host-level code execution with a secure isolated runner before public deployment.
- [ ] Add production environment configuration and deployment documentation.

## Source projects

- Django backend: [Medix1075/Online_Judge_Project_Django](https://github.com/Medix1075/Online_Judge_Project_Django)
- React frontend: [Medix1075/Online_Judge_Project_React](https://github.com/Medix1075/Online_Judge_Project_React)

---

Maintained in [ish4722/Online-Judge](https://github.com/ish4722/Online-Judge).
