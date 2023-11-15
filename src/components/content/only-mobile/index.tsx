import { Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from '@mui/material';

const OnlyMobile = () => {
  
  return (
    <Box
      sx={{ height: "500px", backgroundColor: "red" }}
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
    >
      <Typography variant="h2">Only Rendered on small devices</Typography>
    </Box>
  );
}

export default OnlyMobile;