import { Box, Typography } from "@mui/material"

export type MovieProps = {
  movieData: any,
}


const Movie = ({
  movieData,
}: MovieProps) => {

  console.log('testtests', movieData)
  const { film } = movieData.data;
  return (
    <Box>
      <Box mt={3}>
        <img
          src={`https://source.unsplash.com/random?star wars movie ${Math.floor(Math.random() * 10)}}`}
          alt="Your Image"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            aspectRatio: 3/1,
          }}
        />
      </Box>
      <Box mt={2}>
        <Typography variant="h1">{film.title}</Typography>
        <Typography variant="body1">{`Director: ${film.director}`}</Typography>
        <Typography variant="body1">{`Created: ${film.created}`}</Typography>
        <Typography variant="body1">{`plot: ${film.openingCrawl}`}</Typography>
      </Box>
      <Box display={"grid"} gap={4} mt={5} gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" >
        {film.characterConnection.characters.map((character, index) => (
          <Box key={index} p={2} borderRadius={4} sx={{ backgroundColor: "#f5f5f5" }}>
            <img
              src={`https://source.unsplash.com/random?${character.name}`}
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: 1,
                borderRadius: "16px"
              }}
            />
            <Typography mt={2}>{`name: ${character.name}`}</Typography>
            <Typography>{`height: ${character.height}`}</Typography>
            <Typography>{`gender: ${character.gender}`}</Typography>
            <Typography>{`height: ${character.height}`}</Typography>
            <Typography>{`hair color: ${character.hairColor}`}</Typography>
            <Typography>{`home world: ${character.homeworld.name}`}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Movie;