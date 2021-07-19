import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
// import { MomentLocalizationExample } from "./DatePicker";
import { SelectInput } from "./SelectInput";

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
}));

export function Reserve({
  title,
  dispatchRoom,
  dispatch,
  roomId,
  roomType,
  data,
  harga,
  isloading,
}) {
  const classes = useStyles();
  const history = useHistory();
  // console.log("isi dari state pada page isian", data);

  const [form, setform] = React.useState({
    id: data.id ? data.id : null,
    name: data.name ? data.name : null,
    phone: data.phone ? data.phone : null,
    roomType: data.roomType ? data.roomType : null,
    roomId: 0,
    checkIn: data.checkIn ? data.checkIn : null,
    oldRoomId: data.roomId ? data.roomId : 0,
  });

  useEffect(() => {
    dispatchRoom(form.roomType);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSelect = ({ value, id }) => {
    console.log("handle select");
    setform({ ...form, [id]: value });
    if (id === "roomType") {
      dispatchRoom(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(form);
      console.log("kuy redirect!");
      history.push("/");
    } catch (err) {
      console.log(err.response.data.message);
      window.alert(err.response.data.message);
    }
  };

  console.log("si data form: ", form);

  return (
    <div className={classes.paper}>
      <Typography variant="h4" color="primary" gutterBottom>
        {title}
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              value={form.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="number phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectInput
              title="Room Type"
              id="roomType"
              cbRoom={handleSelect}
              value={form.roomType}
              rooms={roomType}
              harga={harga}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectInput
              title="Room ID"
              id="roomId"
              cbRoom={handleSelect}
              value={form.oldRoomId}
              rooms={roomId}
            />
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
          {isloading ? "loading..." : form.name ? "Edit Reserve" : "CheckIn"}
        </Button>
      </form>
    </div>
  );
}
