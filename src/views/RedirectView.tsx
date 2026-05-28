import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export default function RedirectView() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        bgcolor: 'background.default',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: { xs: 3, sm: 4.5 }, textAlign: 'center', borderRadius: 2 }}>
          <Stack spacing={2.5} alignItems="center">
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
              <Typography variant="h4" fontWeight={800} gutterBottom>
                Redirecting
              </Typography>
              <Typography color="text.secondary">Please sign in before opening the menu.</Typography>
            </Box>
            <Button component={RouterLink} to="/login" variant="contained" startIcon={<LoginIcon />}>
              Go to login
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
