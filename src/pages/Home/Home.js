import {
  Grid,
  Card,
  CardMedia
} from '@mui/material';
import './HomeStyles.scss'
import imageReptile from '../../assets/reptile.jpg';
function Home() {
  return(
    <Grid container spacing={2} className='presentation'>
      <Grid item xs={12} md={12} sm={12}>
        <div
          className='presentation__content'
        >
          <h1>Presentation</h1>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Grid>
          <Grid item xs={12}>
          <div className='video-responsive'>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/fTKT6ccZCjE`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Grid container spacing={2}>  
              <Grid item xs={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={imageReptile}
                  />
                
                </Card>
              </Grid>
              <Grid item xs={6} md={8}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            Row 2
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;