import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
import { useHistory } from "react-router";

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

export function Orders({ title, data, isloading }) {
  const history = useHistory();
  const classes = useStyles();

  const handleChange = (e) => {
    console.log("value: ", e.target.value);
    //panggil api search data
  };

  const handleCheckOut = (value) => {
    history.push({
      pathname: "/checkout",
      id: value.id,
    });
  };

  const handleEdit = (value) => {
    history.push({
      pathname: "/edit",
      state: { ...value },
    });
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
              <TableCell align="center">Kamar ID</TableCell>
              <TableCell align="center">Tipe Kamar</TableCell>
              <TableCell align="center">CheckIn</TableCell>
              {title === "Reserve" ? (
                <TableCell align="center">Action</TableCell>
              ) : (
                ""
              )}
              {title === "Reports" ? (
                <TableCell align="center">CheckOut</TableCell>
              ) : (
                ""
              )}
              {title === "Reports" ? <TableCell>Total Biaya</TableCell> : ""}
            </TableRow>
          </TableHead>
          <TableBody>
            {isloading && "loading..."}
            {data &&
              data.map((row) => (
                <TableRow key={row.id} className={classes.rowtable} hover>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell align="center">{row.roomId}</TableCell>
                  <TableCell align="center">{row.roomType}</TableCell>
                  <TableCell align="center">{row.checkIn}</TableCell>
                  {title === "Reserve" ? (
                    <TableCell align="center">
                      <Button
                        size="small"
                        className={classes.margin}
                        color="primary"
                        onClick={() => handleEdit(row)}
                      >
                        Edit
                      </Button>
                      {" | "}
                      <Button
                        size="small"
                        variant="outlined"
                        className={classes.margin}
                        color="secondary"
                        onClick={() => handleCheckOut(row)}
                      >
                        CheckOut
                      </Button>
                    </TableCell>
                  ) : (
                    ""
                  )}
                  {title === "Reports" ? (
                    <TableCell align="center">{row.checkOut}</TableCell>
                  ) : (
                    ""
                  )}
                  {title === "Reports" ? (
                    <TableCell>{row.biaya}</TableCell>
                  ) : (
                    ""
                  )}
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
