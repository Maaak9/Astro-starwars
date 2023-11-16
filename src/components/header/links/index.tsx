import { ListItemButton, ListItemText } from "@mui/material"

export type NavigationLinksProps = {
}

const NavigationLinks = ({
}: NavigationLinksProps) => {

  return (
    <>
      <ListItemButton component="a" href="/">
        <ListItemText primary="Start" />
      </ListItemButton>
      <ListItemButton component="a" href="/movies">
        <ListItemText primary="Movies SSG" />
      </ListItemButton>
      <ListItemButton component="a" href="/ssr-movies">
        <ListItemText primary="Movies SSR" />
      </ListItemButton>
      <ListItemButton component="a" href="/mix">
        <ListItemText primary="Mix" />
      </ListItemButton>
    </>
  )
}

export default NavigationLinks;