import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Header(props) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button size="small">Home</Button>
          </Link>
        </Typography>
        <Link to={"/signIn"} style={{ textDecoration: "none" }}>
          <Button size="small">Sign In</Button>
        </Link>
        <Link to={"/signUp"} style={{ textDecoration: "none" }}>
          <Button size="small">Sign Up</Button>
        </Link>
        <IconButton>
          <AddShoppingCartRoundedIcon />
        </IconButton>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
