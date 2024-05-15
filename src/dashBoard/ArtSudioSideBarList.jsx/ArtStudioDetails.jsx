import React from 'react';
import style from "./Style.module.css";
import { Button } from "@mui/material";
import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


const ArtStudioDetails = () => {
    const handleArtStudioStatus = () => {

    }
    return (
        <div id={style.com} className='flex justify-center lg:px-20 px-5 py-5'>
            <div>
                <div className='py-5 flex gap-5'>
                    <h1 className='text-2xl lg:text-7xl text-center font-extrabold p-5'>
                        ART EXPRESS
                    </h1>
                    <Button color={true ? "primary" : "error"} className='py-[1rem] px-[2rem]' onClick={handleArtStudioStatus} size='large' variant='contained' sx={{ height: "60px", backgroundColor: "green", color: "white", fontSize: "2.5rem", marginTop: "24px" }}>
                        {true ? "ClOSE" : "OPEN"}
                    </Button>
                </div>
                <div className='c mb-4'>
                    <img src="data:image/jpeg;base64,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" 
                    alt="" 
                    className='img w-80 rounded-full'
                    />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Card sx={{width:"1800px"}}>
                            <CardHeader title={<span className='text-5xl text-white'>ArtStudio</span>} />
                            <CardContent>
                                <div className='space-y-4 text-white'>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Owner                                    
                                            <span className='h  ml-[148px]'>:</span>
                                            <p className='pr-55'>Wonder</p>
                                            </p>
                                    
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            BusinessName                                    
                                            <span className='h ml ml-[32px]'>:</span>
                                            <p className='pr-55 '>uuuuuuu</p>
                                            </p>
                                    
                                  
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            OpeningHours                                  
                                            <span className='h ml-[44px] '>:</span>
                                            <p className='pr-5 '>Wonder</p>
                                            </p>
                                    
                                    </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Status                                   
                                            <span className='h ml-[150px]'>:</span>
                                            {true?<span
                                            className='pr-6 pl-6  py-2 rounded-full bg-green-400 text-gray-950'>Open
                                            </span>:<span
                                             className='pr-5  py-2 rounded-full bg-red-100 text-gray-950'>Close
                                            </span>}
                                            </p>
                                    
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <div className='flex gap-6'>
                <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12} lg={6}>
                        <Card sx={{width:"880px"}}>
                            <CardHeader title={<span className='text-5xl text-white'>Address</span>} />
                            <CardContent>
                                <div className='space-y-4 text-white'>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Country                                    
                                            <span className='h  ml-[148px]'>:</span>
                                            <p className='pr-55'>Nigeria</p>
                                            </p>
                                    
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            City                                    
                                            <span className='h ml ml-[200px]'>:</span>
                                            <p className='pr-55 '>Lagos</p>
                                            </p>
                                    
                                  
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            PostalCode                                    
                                            <span className='h ml ml-[96px]'>:</span>
                                            <p className='pr-55 '>uuuuuuu</p>
                                            </p>
                                    
                                  
                                    </div>
                                    </div>
                                    <div className='flex  mt-3'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            StreetAddress                                   
                                            <span className='h  ml-[60px]'>:</span>
                                            <p className='pr-55 '>uuuuuuu</p>
                                            </p>
                                    
                                  
                                    </div>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12} lg={6}>
                        <Card sx={{width:"880px"}}>
                            <CardHeader title={<span className='text-5xl text-white'>Address</span>} />
                            <CardContent>
                                <div className='space-y-4 text-white'>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Email                                   
                                            <span className='h  ml-[104px]'>:</span>
                                            <p className='pr-55'>Nigeria</p>
                                            </p>
                                    
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl'>
                                            Mobile                                 
                                            <span className='h ml ml-[88px]'>:</span>
                                            <p className='pr-55 '>Lagos</p>
                                            </p>
                                    
                                  
                                    </div>
                                    <div className='flex'>
                                        <p className='w-48 text-white flex gap-5 text-3xl  mt-3'>
                                            Social                                    
                                            <span className='h ml ml-[96px] mt-2'>:</span>
                                           <div className='flex gap-4'>
                                           <a href='/'> <FacebookIcon sx={{fontSize:"4.5rem"}}/></a>
                                           <a href='/'> <LinkedInIcon sx={{fontSize:"4.5rem"}}/></a>
                                           <a href='/'>  <InstagramIcon sx={{fontSize:"4.5rem"}}/></a>
                                           <a href='/'> <TwitterIcon sx={{fontSize:"4.5rem"}}/></a>
                                           </div>
                                            </p>
                                    
                                  
                                    </div>
                                    
                                    </div>
                                   
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                </div>
            </div>
        </div>
    )
}

export default ArtStudioDetails;
