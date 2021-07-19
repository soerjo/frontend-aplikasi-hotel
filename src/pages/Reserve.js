import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Drawer } from "../components/Drawer";
import { AppBar } from "../components/AppBar";
import { Reserve as ReserveForm } from "../components/Reserve";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { deepOrange } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import { makeCheckIn, getRoomId } from "../config/redux/actions/checkInAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export function Reserve({ user }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { roomType, roomID, biaya } = useSelector((state) => state.checkIn);
  console.log("isi Room ID", roomID);

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        title="Admin Hotel"
        user={user.name}
      />
      <Drawer handleDrawerClose={handleDrawerClose} open={open} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className={classes.container}>
          <Grid container spacing={3}>
            {/* Reserve */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ReserveForm
                  title="CheckIn"
                  dispatch={(value) => dispatch(makeCheckIn(value))}
                  dispatchRoom={(value) => dispatch(getRoomId(value))}
                  roomType={roomType}
                  roomId={roomID}
                  data=""
                  harga={biaya}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
