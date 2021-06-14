import React, { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FirebaseAppProvider, useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';
import Image from 'material-ui-image';
import 'firebase/firestore';
//Projects
import Project1 from './Projects/Project1';
import Project2 from './Projects/Project2';
import Project3 from './Projects/Project3';
import Project4 from './Projects/Project4';
import Project5 from './Projects/Project5';
// components
import PageTitle from "../components/PageTitle";
import Card from '@material-ui/core/Card';
// constants
import Divider from '@material-ui/core/Divider';
import { APP_TITLE, ABOUTME} from '../utils/constants';

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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

const Projects: FC<{}> = (): ReactElement => {
    const classes = useStyles();
    return (
        <>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>

            <Helmet>
                <title>{} | {APP_TITLE}</title>
            </Helmet>
            <div className={classes.root}>
            </div>
            <Project1 />
            <Divider  />
            <Project2 />
            <Divider  />
            <Project3 />
            <Divider  />
            <Project4 />
            <Divider  />
            <Project5 />
            </FirebaseAppProvider>




        </>
    )
}

export default Projects;
