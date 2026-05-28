import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AuthControllerProvider } from './controllers/AuthController';
import LoginController from './controllers/LoginController';
import MenuController from './controllers/MenuController';
import ProtectedRoute from './controllers/ProtectedRoute';
import RedirectController from './controllers/RedirectController';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#12a37f',
    },
    background: {
      default: '#f6f8fb',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthControllerProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginController />} />
            <Route path="/redirect" element={<RedirectController />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/menu" element={<MenuController />} />
            </Route>
            <Route path="*" element={<Navigate to="/redirect" replace />} />
          </Routes>
        </AuthControllerProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
