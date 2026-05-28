# HW13 OAuth

React + TypeScript + Vite + Material UI project using Google login.

## Architecture

- `src/models`: application data shapes and static data.
- `src/views`: visual components only.
- `src/controllers`: route logic, authentication flow, logout, and protected access.
- `src/services`: browser storage and Google credential helpers.

## Local setup

1. Copy `.env.example` to `.env`.
2. Add your Google OAuth client ID as `VITE_GOOGLE_CLIENT_ID`.
3. In Google Cloud Console, allow this JavaScript origin:

```text
http://localhost:3000
```

4. Run:

```bash
npm install
npm run dev
```

## Render setup

Use the included `render.yaml`. Add this environment variable in Render:

```text
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

In Google Cloud Console, add your Render URL as an authorized JavaScript origin:

```text
https://your-render-service.onrender.com
```
