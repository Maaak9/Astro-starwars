import { Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from '@mui/material';

const ExpensiveComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate that the component is loading
  useEffect(() => {
    console.log('Started loading')
    window.setTimeout(() => {
      console.log('finished loading')
      setIsLoading(false);
    }, 2500)
  }, [])

  return (
    <>
      {isLoading && (
        <Skeleton variant="rectangular" width="100%" height="500px" />
      )}
      {( !isLoading && (
        <Box
          sx={{ height: "500px", backgroundColor: "aquamarine" }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
        >
          <Typography variant="h2">FinishedLoading</Typography>
        </Box>
      ))}
    </>
  );
}

export default ExpensiveComponent;