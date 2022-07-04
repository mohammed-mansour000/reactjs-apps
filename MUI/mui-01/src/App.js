import logo from './logo.svg';
import './App.css';

//mui
import 
  { 
    Typography, 
    Card, 
    AppBar, 
    CardActions, 
    CardContent, 
    CardMedia, 
    CssBaseline, 
    Grid, 
    Toolbar, 
    Container,
    Button,
  } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
// import { useStyles } from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  // const classes = useStyles();
  const classes ={
    container: {
      // backgroundColor: theme.palette.background.paper,
      // padding: theme.spacing(8, 0, 6),
    },
    icon: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '40px'
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <PhotoCamera className='icon'/>
            <Typography variant='h6'>
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className='container'>
            <Container maxWidth="sm">
              <Typography variant='h2' color="white" align='center' gutterBottom>
                Photo Album
              </Typography>
              <Typography variant='h5' color="white" align='center' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <div className='buttons'>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className='cardGrid' maxWidth="md">
            <Grid container spacing={4}>
              {
                cards.map((card) =>(
                  <Grid item lg={3} md={4} sm={6} xs={12} key={card}>
                    <Card className='card'>
                      <CardMedia 
                        className='cardMedia'
                        image='https://source.unsplash.com/random'
                        title="Image Title"
                      />
                      <CardContent className='cardContent'>
                        <Typography gutterBottom variant='h5'>
                          Heading
                        </Typography>
                        <Typography>
                          This is media card. you can use this section to describe the content
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color='primary'>View</Button>
                        <Button size='small' color='primary'>Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              }
             
            </Grid>
          </Container>
        </main>
      </header>
    </div>
  );
}

export default App;
