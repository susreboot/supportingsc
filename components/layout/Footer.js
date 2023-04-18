// import Link from "components/Link";
import Link from '@mui/material/Link';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { routes } from "data/routes";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#065DB4',
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff !important",
    "&:hover": {
      color: theme.palette.info.main,
    },
    "& a": { // add more specific selector
      color: "#fff !important",
    },
  },
  copylight: {
    color: "#fff !important",
    fontSize: "1em",
    "&:hover": {
      color: theme.palette.info.main,
    },
    "& a": { // add more specific selector
      color: "#fff !important",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const path = routes;
  const router = useRouter();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
        <Button color="inherit"><Link href="/" underline="none" sx={{ fontSize: '1.2rem', color: 'white', textDecoration: 'none' }}>Home</Link></Button>
        <Button color="inherit"><Link href="/about" underline="none" sx={{ fontSize: '1.2rem', color: 'white' }}>About</Link></Button>
        <Button color="inherit"><Link href="/allresources" underline="none" sx={{ fontSize: '1.2rem', color: 'white' }}>All Resources</Link></Button>
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>

        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="#"
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy;SC Reentry Services 2023
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
