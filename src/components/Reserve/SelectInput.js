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
export function SelectInput({ id, rooms, cbRoom, title, value, harga }) {
  const classes = useStyles();

  const [data, setdata] = React.useState(value);

  const handleChange = (event) => {
    const { value } = event.target;
    setdata(value);
    cbRoom({ value, id });
  };

  return (
    <div>
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id={title}>{title}</InputLabel>
        <Select
          labelId={title}
          id={title}
          value={data}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          <MenuItem key={0} value={value}>
            {value !== 0 ? value : "..."}
          </MenuItem>
          {rooms.map((room, index) => (
            <MenuItem key={index} value={room}>
              <strong>{room} </strong>
              {id === "roomType"
                ? `- Rp.${rupiah(harga[room])} /per malam`
                : ""}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
