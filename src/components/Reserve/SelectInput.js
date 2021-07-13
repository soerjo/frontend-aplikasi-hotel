import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function SelectInput({ id, rooms, cbRoom, title }) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setAge(value);
    cbRoom({ value, id });
  };

  return (
    <div>
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id={title}>{title}</InputLabel>
        <Select
          labelId={title}
          id={title}
          value={age}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {rooms.map((room, index) => (
            <MenuItem key={index} value={room}>
              {room}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
