import * as React from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material';
import { SkipPrevious, PlayArrow, SkipNext } from '@mui/icons-material';

export default function MediaControlCard() {
  const theme = useTheme();

  const avatarNumber = 3;
  const src = `https://material-ui.com/static/images/avatar/${avatarNumber}.jpg`;

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrow sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={src}
        alt="Live from space album cover"
      />
    </Card>
  );
}
