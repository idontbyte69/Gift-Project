import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const services = [
  {
    title: 'Web Development',
    description: 'Professional web development services.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more services as needed
];

const MainPage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Fiverr Categories - Website Development
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={service.title}
                height="140"
                image={service.imageUrl}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainPage;
