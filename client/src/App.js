import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 12,
        margin: '30px 30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '225px',
        border: '2px solid red',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
    }));
const App = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
           <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center"> I see U </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
}

export default App;