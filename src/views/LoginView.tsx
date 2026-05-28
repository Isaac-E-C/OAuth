import type { RefObject } from 'react';
import { Alert, Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

interface LoginViewProps {
  clientId: string;
  scriptReady: boolean;
  googleButtonRef: RefObject<HTMLDivElement | null>;
}

export default function LoginView({ clientId, scriptReady, googleButtonRef }: LoginViewProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        bgcolor: 'background.default',
        backgroundImage:
          'linear-gradient(135deg, rgba(25, 118, 210, 0.12), rgba(18, 163, 127, 0.10))',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: { xs: 3, sm: 4.5 },
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack spacing={3}>
            <Box
              sx={{
                width: 56,
                height: 56,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 2,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              F
            </Box>

            <Box>
              <Typography color="primary" fontSize={13} fontWeight={800} sx={{ mb: 1 }}>
                Flova
              </Typography>
              <Typography variant="h4" fontWeight={800} gutterBottom>
                Welcome back
              </Typography>
              <Typography color="text.secondary">
                Sign in with your Google account to continue to the menu.
              </Typography>
            </Box>

            {!clientId && (
              <Alert severity="warning">
                Google login needs a client ID. Set GOOGLE_CLIENT_ID in Render or
                VITE_GOOGLE_CLIENT_ID locally.
              </Alert>
            )}

            <Box sx={{ minHeight: 44 }}>
              {clientId && scriptReady ? (
                <Box ref={googleButtonRef} />
              ) : clientId ? (
                <Button disabled fullWidth size="large" variant="contained" startIcon={<GoogleIcon />}>
                  Loading Google sign-in
                </Button>
              ) : (
                <Button disabled fullWidth size="large" variant="contained" startIcon={<GoogleIcon />}>
                  Continue with Google
                </Button>
              )}
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
