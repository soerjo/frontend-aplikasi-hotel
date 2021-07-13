import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { MomentLocalizationExample } from "./DatePicker";
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

export function Reserve({ title, harga }) {
  const today = new Date();
  const classes = useStyles();
  const history = useHistory();

  const [form, setform] = React.useState({
    checkIn: "",
    checkOut: "",
    name: "",
    handphone: "",
    roomType: "",
    roomId: "",
  });
  const [isloading, setisloading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handelDate = ({ value, id }) => {
    setform({ ...form, [id]: value });
  };

  const handleSelect = ({ value, id }) => {
    setform({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.checkIn) {
      setform({ ...form, checkIn: today });
    } else {
      setform({ ...form, checkOut: today });
    }
    console.log("isi form: ", form);
    //panggil api untuk submit

    // history.push("/");
  };

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
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="handphone"
              variant="outlined"
              required
              fullWidth
              id="handphone"
              label="number phone"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectInput
              title="Room Type"
              id="roomType"
              cbRoom={handleSelect}
              rooms={["Double Bed", "Single Bed", "Premium", "VIP"]}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectInput
              title="Room ID"
              id="roomId"
              cbRoom={handleSelect}
              rooms={[10, 11, 12, 13, 14, 15, 16, 17, 18]}
            />
          </Grid>
          {harga && (
            <Grid item xs={12}>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.biaya}
              >
                {`Total Biaya: Rp. ${harga},-`}
              </Typography>
            </Grid>
          )}
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
          {isloading ? "loading..." : harga ? "CheckIn" : "CheckOut"}
        </Button>
      </form>
    </div>
  );
}
