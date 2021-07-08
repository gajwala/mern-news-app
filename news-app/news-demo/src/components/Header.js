import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import useStyles from "./HeaderStyles";

import CountryModel from "../models/Country";
import CategoryModel from "../models/Categorey";
function Header({
  handleChange,
  query,
  handleCountryChange,
  handleCategoryChange,
  forCountry,
  forcategory,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            News App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              value={query}
            />
          </div>
          <div className="header_dropdown">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">country</InputLabel>
              <Select
                native
                value={forCountry}
                onChange={handleCountryChange}
                defaultValue="gb"
                inputProps={{
                  name: "country",
                  id: "country-native-simple",
                }}
              >
                {CountryModel.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">category</InputLabel>
              <Select
                native
                value={forcategory}
                defaultValue="general"
                onChange={handleCategoryChange}
                inputProps={{
                  name: "category",
                  id: "age-native-simple",
                }}
              >
                {CategoryModel.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
