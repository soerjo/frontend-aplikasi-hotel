import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MdHotel } from "react-icons/md";
import { SiHotelsDotCom } from "react-icons/si";
// import { BsFillPeopleFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const menus = [
  {
    title: "Dasboard",
    icon: <SiHotelsDotCom />,
    link: "/",
  },
  {
    title: "CheckIn",
    icon: <MdHotel />,
    link: "/checkin",
  },
  // {
  //   title: "CheckOut",
  //   icon: <BsFillPeopleFill />,
  //   link: "/",
  // },
  {
    title: "Reports",
    icon: <HiDocumentReport />,
    link: "/reports",
  },
];

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "1.5rem",
    marginLeft: ".3rem",
    color: theme.palette.primary.main,
  },
}));

export const MainListItems = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      {menus.map((menu, index) => (
        <ListItem key={index} onClick={() => history.push(menu.link)} button>
          <ListItemIcon className={classes.icon}>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.title} />
        </ListItem>
      ))}
    </div>
  );
};
