import React, { Fragment, useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

export function MomentLocalizationExample({ id, cbDate, title }) {
  const [selectedDate, setDate] = useState(moment());
  const [inputValue, setInputValue] = useState(moment().format("DD-MM-YYYY"));

  const onDateChange = (date, value) => {
    console.log("date: ", value);
    setDate(date);
    setInputValue(value);
    cbDate({ value, id });
  };

  const dateFormatter = (str) => {
    return str;
  };

  return (
    <Fragment>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
        <KeyboardDatePicker
          required
          autoOk={true}
          id={title}
          label={title}
          variant="inline"
          format="DD-MM-YYYY"
          fullWidth
          value={selectedDate}
          inputValue={inputValue}
          onChange={onDateChange}
          rifmFormatter={dateFormatter}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}
