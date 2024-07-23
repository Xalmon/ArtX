import React from 'react'
import style from "./Cart.module.css"
import CartItem from "./CartItem.jsx"
import {Box, Button, Card, Divider, Modal,Grid, TextField } from '@mui/material'
import AddressCard from "./AddressCard"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Field, Form, Formik } from 'formik';

const styles = {
  position : "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  outline:"none",
  boxShadow: 24,
  p:4,
  margin: "20px 0",
  
};

const initialValues={
  streetAddress:"",
  state:"",
  pincode:"",
  city:"",
  country:""
};

const items=[1,1]
const Cart = () => {
  const createOrderUsingSelectedAddress=()=>{

  }
  const handleOpenAddressModal=()=>{
    setOpen(true)  
    
}
const handleSubmit = (values) =>{
  console.log("form value: ",values)

}

  const [open,setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)


  return (
    <>
    <main className={style.major}>
      <section>
    {items.map((item)=> <CartItem/>)}  


    <Divider/>
        <div className={style.six}>
        <p className={style.seven}>Bill Details</p>
          <div className={style.eight}>
            <div className={style.nine}>
            <p>Item Total</p>
            <p>₦<span>6000</span></p>
            </div>
            <div className={style.ten}>
                  <p>Delivery Fee</p>
                  <p>₦<span>1000</span></p>
              </div>
              <div className={style.ten}>
                  <p>GST Charges</p>
                  <p>₦<span>2000</span></p>
              </div>
              <Divider/>
              </div>
              <div className={style.ten}>
              <p>Total pay</p>
                <p>₦<span>5000</span></p>

              </div>

        </div>
        </section>
        <Divider orientation='vertical' flexItem/>
        <section className={style.eleven}>
          <div>
          <h1 className={style.text}>
                        Choose Delivery Address
              </h1>
              <div className={style.addresses}>
              {[1,1,1,1].map((item)=>(<AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>))}
              <Card className={style.sectiontwo}>
               
              <AddLocationAltIcon sx={{fontSize: "2.8rem",marginTop:"15px"}}/>
              <div className={style.fiftheen}>
              <h1 className={style.sixteen} style={{fontSize:"2.0rem"}}>Add New Address</h1>
              <Button variant='contained'  onClick={handleOpenAddressModal} sx={{fontSize:"1.8rem", padding:"10px 30px"}}>Add</Button>

              </div>
              </Card>
              </div>

          </div>

        </section>
    </main>
    <Modal open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby='modal-modal-description'
    sx={{padding:"20px 30px"}}
    
    >
      <Box sx={styles}>
      <Formik initialValues ={initialValues}
      onSubmit={handleSubmit} >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
              as={TextField}
              name="streetAddress"
              label="streetAddress"
              fullWidth
              variant="outlined"
              >

              </Field>
              <Field
                        as={TextField}
                        name="pinCode"
                        label="pinCode"
                        fullWidth
                        variant="outlined"
                       
                        // error ={!!error.streetAddress}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=><span className='text-red-600' >{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>
              <Field
                        as={TextField}
                        name="city"
                        label="city"
                        fullWidth
                        variant="outlined"
                    
                        // error ={!!error.streetAddress}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=><span className='text-red-600' >{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>
                         <Field
                        as={TextField}
                        name="state"
                        label="state"
                        fullWidth
                        variant="outlined"
                        
                        // error ={!!error.streetAddress}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=><span className='text-red-600' >{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>
              <Field
                        as={TextField}
                        name="country"
                        label="country"
                        fullWidth
                        variant="outlined"
                        
                        // error ={!!error.streetAddress}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=><span className='text-red-600' >{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>

            </Grid>
            <Grid item xs={12}>
            <Button fullWidth variant='contained' type="submit" color="primary">Deliver Here</Button>   
            </Grid>

          </Grid>
        </Form>

      </Formik>
      </Box>

    </Modal>
    </>
  )
}

export default Cart