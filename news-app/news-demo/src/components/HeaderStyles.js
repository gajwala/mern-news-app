import { fade, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    minWidth: 275,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    // flexGrow: 1,

    fontSize: 14,

    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  pos: {
    marginBottom: 12,
  },

  search: {
    position: "relative",
    flexGrow: "1",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  card: {
    height: "35vw",
    transitionDuration: "0.3s",
    width: "30vw",
    display: "block",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },

  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));
