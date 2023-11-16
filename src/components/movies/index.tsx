import { Box, Typography } from "@mui/material"

export type MoviesProps = {
  moviesData: any,
  url: string,
}


const Movies = ({
  moviesData,
  url,
}: MoviesProps) => {
  const { films } = moviesData.data.allFilms;

  return (
    <Box display={"grid"} gap={4} mt={5} gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" >
      {films.map((film, index) => (
        <a href={`${url}${film.id}`} key={film.id} style={{ color: "inherit" }}>
          <Box p={2} borderRadius={4} sx={{ backgroundColor: "#f5f5f5" }}>
            <img
              src={`https://source.unsplash.com/random/250x250/?star wars${Math.random()}}`}
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: 1,
                borderRadius: "16px"
              }}
            />
            <Typography mt={2}>{film.title}</Typography>
            <Typography>{film.releaseDate}</Typography>
          </Box>
        </a>
      ))}
    </Box>
  )
}

export default Movies;