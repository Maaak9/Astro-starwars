import { Box, Typography } from "@mui/material"

export type MovieProps = {
  movieData: any,
}

const Movie = ({
  movieData,
}: MovieProps) => {

  return (
    <Box>
      <Box mt={3} display={"flex"} justifyContent={"right"}>
        <img
          width={"100%"}
          src="/images/img1.jpeg"
          style={{
            objectFit: 'cover',
            height: "100%",
            aspectRatio: 3/1,
          }}
        />
      </Box>
      <Box mt={2}>
        <Typography variant="h1">{movieData.title}</Typography>
        <Typography variant="body1">{`Director: ${movieData.director}`}</Typography>
        <Typography variant="body1">{`Created: ${movieData.created}`}</Typography>
        <Typography variant="body1">{`plot: ${movieData.openingCrawl}`}</Typography>
      </Box>
      <Box display={"grid"} gap={4} mt={5} gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" >
        {movieData.characterConnection.characters.map((character, index) => (
          <Box key={index} p={2} borderRadius={4} sx={{ backgroundColor: "#f5f5f5" }}>
            <img
              src={`https://source.unsplash.com/random/250x250?${character.name}`}
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