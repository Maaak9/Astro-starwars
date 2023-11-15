import { Button } from "@mui/material"
import { useState } from "react";


const ReactButton = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Button variant="contained" onClick={() => setCounter(counter + 1)}>
      {`React Button: ${counter}`}
    </Button>
  )
}

export default ReactButton;