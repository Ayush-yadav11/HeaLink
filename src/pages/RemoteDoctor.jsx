import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
} from '@mui/material';
import { Verified } from '@mui/icons-material';

const doctors = [
  {
    name: 'Dr. Anjali Verma',
    specialty: 'General Physician',
    image: '/doctors/anjali.jpg',
    verified: true,
  },
  {
    name: 'Dr. Rohan Mehta',
    specialty: 'Cardiologist',
    image: '/doctors/rohan.jpg',
    verified: true,
  },
  {
    name: 'Dr. Pooja Sharma',
    specialty: 'Pediatrician',
    image: '/doctors/pooja.jpg',
    verified: false,
  },
  {
    name: 'Dr. Vikram Singh',
    specialty: 'Dermatologist',
    image: '/doctors/vikram.jpg',
    verified: true,
  },
  {
    name: 'Dr. Nisha Patel',
    specialty: 'Neurologist',
    image: '/doctors/nisha.jpg',
    verified: false,
  },
  {
    name: 'Dr. Rahul Das',
    specialty: 'Orthopedic Surgeon',
    image: '/doctors/rahul.jpg',
    verified: true,
  },
  {
    name: 'Dr. Meera Kapoor',
    specialty: 'Psychiatrist',
    image: '/doctors/meera.jpg',
    verified: true,
  },
  {
    name: 'Dr. Arjun Nair',
    specialty: 'ENT Specialist',
    image: '/doctors/arjun.jpg',
    verified: false,
  },
];

const RemoteDoctor = () => {
  return (
    <Container sx={{ pt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Connect with a Doctor
      </Typography>
      <Grid container spacing={4}>
        {doctors.map((doctor, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card elevation={3}>
              <CardContent style={{ textAlign: 'center' }}>
                <Avatar
                  src={doctor.image}
                  alt={doctor.name}
                  sx={{ width: 80, height: 80, margin: '0 auto 1rem' }}
                />
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {doctor.specialty}
                </Typography>
                {doctor.verified && (
                  <Chip
                    icon={<Verified />}
                    label="Verified"
                    color="success"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                )}
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RemoteDoctor;
