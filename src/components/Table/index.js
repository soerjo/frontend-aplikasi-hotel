import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TableContainer from "@material-ui/core/TableContainer";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  header: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  search: {},
  rowtable: {
    cursor: "pointer",
  },
  container: {
    maxHeight: 410,
    // minWidth: 720,
  },
  table: {
    minWidth: 900,
  },
}));

export function Orders({ title, datas = rows }) {
  const classes = useStyles();

  const handleChange = (e) => {
    console.log("value: ", e.target.value);
    //panggil api search data
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {title ? title : "Room Reserve"}
        </Typography>
        <Box borderColor="grey.500" borderBottom={1}>
          <InputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </div>
      <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>No Telephone</TableCell>
              <TableCell>Kamar ID</TableCell>
              <TableCell>Tipe Kamar</TableCell>
              <TableCell>CheckIn</TableCell>
              {title === "Reports" ? <TableCell>CheckOut</TableCell> : ""}
              {title === "Reports" ? <TableCell>Total Biaya</TableCell> : ""}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas &&
              datas.map((row) => (
                <TableRow
                  className={classes.rowtable}
                  hover
                  key={row.id}
                  onClick={() => console.log(row.id)}
                >
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  {/* table cell checkout pada reserve itu ndak di kasih liat */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.seeMore}> </div>
    </React.Fragment>
  );
}
