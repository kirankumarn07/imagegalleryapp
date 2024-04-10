import React from 'react'
import {Typography,AppBar,Toolbar,Container,ImageList,ImageListItem,TextField,center,Button} from '@mui/material'
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import ImagesData from './ImagesData.json'
const App = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
        <CameraEnhanceIcon/>
          <Typography variant='h4'>Photography</Typography>
        </Toolbar>
      </AppBar>
     <Container style={{"marginTop":"70px","textAlign":"center"}}>
       <Typography variant='h3'><b>Our Latest Photos</b></Typography>
       <Typography paragraph style={{"color":"orange"}}>WHICH OF MY PHOTOGRAPHS IS MY FAVORITE? THE ONE  I AM GOING TO TAKE TOMORROW</Typography>
     </Container>
     <Container>
      <ImageList rowHeight={170} cols={3}>
               {ImagesData.map(imageObj=>
                 <ImageListItem cols={1}>
                  <img src={imageObj.userImageURL} alt={imageObj.user} style={{"padding":"5px","height":"50px","width":"250px",
                }}/>
                 </ImageListItem>
               )}
      </ImageList>
     </Container>
    
     <center>
     <Container>
      <Typography variant='h4' style={{"color":"greenyellow"}}>Contact Form</Typography>
      <form>
          <TextField style={{"width":"500px","margin":"5px"}} type="text" placeholder='firstname' lable="firstname" variant="outlined"/><br/>
          <TextField style={{"width":"500px","margin":"5px"}} type="text" placeholder='lastname'lable="lastName" variant="outlined"/><br />
          <TextField style={{"width":"500px","margin":"5px"}} type="text" placeholder='email'lable="Email" variant="outlined"/><br />
          <TextField style={{"width":"500px","margin":"5px"}} type="text" placeholder='mobileno'lable="MobileNo" variant="outlined"/><br />
          <Button variant="contained" color="warning">Submit</Button>
      </form>
     </Container>
     </center>
     </> 
  )
}

export default App