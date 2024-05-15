import React from 'react'
import {Box,Card,CardHeader,Typography } from "@mui/material"
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CreateIcon from "@mui/icons-material/Create"
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import CreateArtwork from '../../pages/CreateArtwork/CreateArtwork';
import {useNavigate} from "react-router-dom"

const orders = [1,1,1,1];

const ArtworkTable = () => {
  const navigate=useNavigate()
    return (
        <div>
            <Box>
                <Card sx={{backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem"}}>
                    <CardHeader
                     action={
                        <IconButton aria-label='settings' onClick={()=>navigate("/user/createArtwork")}>
                        <CreateIcon sx={{fontSize:"2.8rem"}}/>
                        </IconButton>
                     }
                     title={
                        <Typography variant="h5" style={{ fontSize: "3.9rem", fontWeight: "bold" }}>
                          Artworks
                        </Typography>
                     }
                     sx={{ pt: 2, alignItems: "center", fontSize: "4.5rem", fontWeight: "bold" }}
                    />
                    <TableContainer component={Paper} sx={{width:"120rem"}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem"}}>
                <TableCell sx={{fontSize:"2.5rem"}}>IMAGE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>TITLE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>PRICE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>AVAILABILITY</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>Artwork GENRE</TableCell>
                <TableCell align="right" sx={{fontSize:"2.5rem"}}>DELETE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },backgroundColor:"rgb(242, 242, 242)",marginTop:"40px",fontSize:"4.5rem" }}
                >
                  <TableCell component="th" scope="row" sx={{fontSize:"2.5rem"}}>
                    {"image"}
                  </TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>{"excence"}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>{5000}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>{"Availability"}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}>{"pencil drawing"}</TableCell>
                  <TableCell align="right" sx={{fontSize:"2.5rem"}}><IconButton><DeleteIcon  sx={{fontSize:"2.8rem"}}/></IconButton></TableCell>
        
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
                </Card>
            </Box>
        </div>
      )
}

export default ArtworkTable

