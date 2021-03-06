import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Drawer } from "../components/Drawer";
import { AppBar } from "../components/AppBar";
import { CheckOut as ReserveForm } from "../components/checkOut";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { deepOrange } from "@material-ui/core/colors";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  getCheckInById,
  getRoomId,
  checkOut,
} from "../config/redux/actions/checkInAction";

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

function getBiaya(today, oldDay, biaya, roomType) {
  let message = "";
  let hari = Math.floor(moment.duration(today.diff(oldDay)).asDays());
  let total = 0;
  if (hari < 1) {
    hari = 1;
    total = biaya[roomType] * hari;
  }
  total = biaya[roomType] * hari;
  return { total, hari, message };
}

export function Room({ user }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    biaya,
    roomType,
    roomID,
    reserveById: form,
    isloading,
  } = useSelector((state) => state.checkIn);
  const { id } = useLocation();

  const { checkIn, roomType: type } = form;
  let today = moment(new Date());
  const response = getBiaya(today, checkIn, biaya, type);
  const total = response.total;
  const hari = response.hari;
  const message = response.message;
  console.log(message);
  form.biaya = total;
  form.checkOut = today.format("YYYY-MM-DD");

  useEffect(() => {
    dispatch(getCheckInById(id));
  }, [dispatch, id]);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log("isi form: ", form);

  return isloading ? (
    "Loading...."
  ) : (
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
                  title="CheckOut"
                  dispatch={() => dispatch(checkOut(form))}
                  dispatchRoom={(value) => dispatch(getRoomId(value))}
                  roomType={roomType}
                  roomId={roomID && "..."}
                  data={form}
                  isloading={isloading}
                  hari={hari}
                  message={message}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
