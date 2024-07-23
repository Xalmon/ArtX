import React, { useState } from 'react'
import { DashboardSidebar } from '../../../component/Sidebar'
import style from './index.module.css'
import DashboardNavbar from '../../../component/DashboardNavbar/dashboardNavbar'
import { Icon } from '@iconify/react'
import ReactModal from 'react-modal'
import axios from 'axios'


const Profile = () => {

  const [image, setImage] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [file,setFile] = useState(null)

  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 3
  },
  content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "30vw",
      height: "50vh",
      backgroundColor: "azure",
      border: "none",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: '5px',
      borderColor: "powderblue",
  }
  }

  function uploadImage(event){
    event.preventDefault();
    console.log(file);
    try {
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'jze7ylih');

        axios.post('https://api.cloudinary.com/v1_1/dwj0v6ggh/image/upload', formData
        ).then((response) => {
          console.log(response.data.secure_url);
          localStorage.setItem('profile-image', response.data.secure_url)
        }).catch((error) => {
          console.log(error);
        });

    } catch (error) {
        console.error('Error uploading image:', error);
    }
    setImage(localStorage.getItem('profile-image'))
  }

  function openModal(){
    setModalIsOpen(true)
  }

  function handleImageChange(event){
    setFile(event.target.files[0])
  }

  return (
    <div className={style.Profile_Main_Frame}>            
        <DashboardSidebar/>
        <div className={style.Profile_Navbar_And_Body_Frame}>
            <ReactModal onRequestClose={()=>setModalIsOpen(false)} style={modalStyle} isOpen={modalIsOpen}>
              <form onSubmit={uploadImage}>
                <input onChange={handleImageChange} type="file" name="" id="Profile-Image" />
                <button type="submit">Upload Image</button>
              </form>
            </ReactModal>
            <DashboardNavbar/>
            <div className={style.Profile_Main_Body_Frame}>
                <div className={style.Profile_Main_Body_Inner_Frame_1}>
                  <div className={style.Profile_Image_Frame}>
                      {
                        image ? <img src={image} alt="Profile_Image" /> : 
                          <Icon icon={'gg:profile'} height={'50vh'} width={'30vw'}/>
                      } 
                      <button onClick={openModal}><Icon icon={'tabler:edit'} height={'5vh'} width={'3vw'}/></button>
                  </div>
                </div>
                    
                <div className={style.User_Data_Frame}>
                  <div className={style.User_Data_Inner_Frame}>
                    <div>
                      <label htmlFor="">Name</label>
                      <p>firstName lastName</p>
                    </div>
                    <div>
                      <label htmlFor="">Email</label>
                      <p>useremail@emaildomain.com</p>
                    </div>
                    <div>
                      <label htmlFor="">Phone Number</label>
                      <p>0700 000 000 0</p>
                    </div>
                    <div>
                      <label htmlFor="">Username</label>
                      <p>username@1M</p>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile