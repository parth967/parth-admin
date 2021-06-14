import React, { useState ,FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Aboutme from './Aboutme';
import Education from './Education';
import Typography from '@material-ui/core/Typography';
import 'firebase/firestore';
import LinearProgress from '@material-ui/core/LinearProgress';
//form
import SchoolIcon from '@material-ui/icons/School';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FirebaseAppProvider, useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';
// components
import PageTitle from "../components/PageTitle";

// constants
import { APP_TITLE, PAGE_TITLE_HOME } from "../utils/constants";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    education:{
      textAlign:'center',
     padding: theme.spacing(1),
     alignContent:'center',

    },

  })
);

const firebaseConfig = {
  apiKey: "AIzaSyDQs2KPcGmYmP5KflHNft-MEYtjb4JP3dI",
      authDomain: "adminpanel-257a3.firebaseapp.com",
      databaseURL: "https://adminpanel-257a3-default-rtdb.firebaseio.com",
      projectId: "adminpanel-257a3",
      storageBucket: "adminpanel-257a3.appspot.com",
      messagingSenderId: "959454529762",
      appId: "1:959454529762:web:65a39cc48a40cc717476bb"
}

const Home: FC<{}> = (): ReactElement => {



  const classes = useStyles();
  return (
    <>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>

      <Aboutme />
      <LinearProgress />

      {/* There is already an h1 in the page, let's not duplicate it. */}
<Typography variant="h4" component="h2" className={classes.education}><SchoolIcon></SchoolIcon> Education</Typography>
  <LinearProgress color="secondary" />
      <Education />
        </FirebaseAppProvider>




    </>
  );
};
export default Home;
