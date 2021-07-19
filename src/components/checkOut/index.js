import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    // maxWidth: 720,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.2rem",
    borderRadius: "1rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  biaya: {
    textAlign: "center",
  },
}));

function rupiah(bilangan) {
  var number_string = bilangan.toString(),
    sisa = number_string.length % 3,
    rupiah = number_string.substr(0, sisa),
    ribuan = number_string.substr(sisa).match(/\d{3}/g);
  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  return rupiah;
}

export function CheckOut({
  title,
  dispatch,
  data: form,
  isloading,
  hari,
  message,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(form);
    if (res) {
      console.log("kuy redirect!");
      history.push("/reports");
    }
  };

  console.log("isi form", form);

  return (
    <div className={classes.paper}>
      <Typography variant="h4" color="primary" gutterBottom>
        {title}
      </Typography>
      <div className={classes.form}>
        <Grid container spacing={2}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                {`Name`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                : {form.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                {`Phone`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                : {form.phone}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                {`Room Type`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                : {form.roomType}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                {`Room ID`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                : {form.roomId}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                {`CheckIn: `}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                : {form.checkIn}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                {`CheckOut: `}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                : {form.checkOut}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                {`Lama Menginap`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" id="nameValue">
                : {hari} hari {message && message}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {form.biaya ? (
              <Typography
                variant="h4"
                color="secondary"
                className={classes.biaya}
              >
                {`Total: Rp. ${rupiah(form.biaya)},-`}
              </Typography>
            ) : (
              <Typography
                variant="h6"
                color="secondary"
                className={classes.biaya}
              >
                belum terkena biaya...
              </Typography>
            )}
          </Grid>
        </Grid>

        <Button
          type="submit"
          disabled={isloading}
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className={classes.submit}
        >
          {isloading ? "loading..." : "CheckOut"}
        </Button>
      </div>
    </div>
  );
}
