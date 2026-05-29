import {
  AccessTime as TimeIcon,
  AttachMoney as MoneyIcon,
  CalendarMonth as CalendarIcon,
  EventNote as EventIcon,
  Logout as LogoutIcon,
  MedicalServices as TherapyIcon,
  Person as PersonIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Drawer,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import type { AuthUser } from '../models/AuthUser';
import type { Therapy } from '../models/Therapy';

const drawerWidth = 260;

interface MenuViewProps {
  user: AuthUser | null;
  therapies: Therapy[];
  onLogout: () => void;
}

export default function MenuView({ user, therapies, onLogout }: MenuViewProps) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRightColor: 'divider',
          },
        }}
      >
        <Toolbar sx={{ gap: 1.5, minHeight: 82 }}>
          <Avatar variant="rounded" sx={{ bgcolor: 'primary.main', fontWeight: 800 }}>
            S
          </Avatar>
          <Typography variant="h6" fontWeight={800}>
            Ser Salud
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{ px: 1.5, py: 2 }}>
          {[
            ['Therapies', <TherapyIcon key="therapy" />, true],
            ['Calendar', <CalendarIcon key="calendar" />, false],
            ['My Appointments', <EventIcon key="events" />, false],
            ['Profile', <PersonIcon key="profile" />, false],
          ].map(([label, icon, selected]) => (
            <ListItemButton key={String(label)} selected={Boolean(selected)} sx={{ borderRadius: 2, mb: 0.75 }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: 'auto', p: 2 }}>
          <Button fullWidth color="error" variant="outlined" startIcon={<LogoutIcon />} onClick={onLogout}>
            Log out
          </Button>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` }, p: { xs: 2.5, md: 4 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Select a Therapy
            </Typography>
            <Typography color="text.secondary">Choose the therapy you need and reserve your appointment.</Typography>
          </Box>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar src={user?.picture} alt={user?.name} />
            <Box sx={{ minWidth: 0 }}>
              <Typography fontWeight={800} noWrap>
                {user?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {user?.email}
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <TextField
          fullWidth
          placeholder="Search therapies..."
          sx={{ mb: 4, maxWidth: 680 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Grid
          container
          spacing={3}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {therapies.map((therapy) => (
            <Card
              key={therapy.name}
              sx={{
                height: 520,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia sx={{ height: 200, background: therapy.image }} />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700}>
                    {therapy.name}
                  </Typography>
                  <Chip label={therapy.specialty} size="small" color="primary" variant="outlined" />
                </Stack>

                <Typography color="text.secondary" sx={{ lineHeight: 1.55, mb: 3 }}>
                  {therapy.description}
                </Typography>

                <Stack direction="row" spacing={3} sx={{ mt: 'auto' }}>
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <TimeIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {therapy.duration} min
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <MoneyIcon fontSize="small" color="action" />
                    <Typography variant="body2" fontWeight={800}>
                      ${therapy.price.toFixed(2)}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button fullWidth variant="contained" sx={{ py: 1.2 }}>
                  Book Appointment
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>

        <Button
          color="error"
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={onLogout}
          sx={{ display: { md: 'none' }, mt: 3 }}
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
}
