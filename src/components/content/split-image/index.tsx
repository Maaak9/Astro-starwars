import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export type SplitImageProps = {
  imagePosition?: "left" | "right"
}

const SplitImage = ({
  imagePosition = "left",
}: SplitImageProps) => {
  const loremIpsum = `A long time ago in a galaxy far, far away... 
  It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. 
  During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star, an armored space station with enough power to destroy an entire planet. 
  Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...
  `;

  const ImageContainer = () => (
    <Box>
      <img
        src={`https://source.unsplash.com/random?star wars${Math.random()}}`}
        alt="Your Image"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          aspectRatio: 3/2,
        }}
      />
    </Box>
  );

  return (
    <Box display={"grid"} my={10} gap={4} gridTemplateColumns={"1fr 1fr"}>
      { imagePosition === "left" && (
        <ImageContainer />
      )}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {loremIpsum}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary">
            Button 1
          </Button>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
            Button 2
          </Button>
        </Box>
      </Box>
      { imagePosition === "right" && (
        <ImageContainer />
      )}
    </Box>
  );
};

export default SplitImage;