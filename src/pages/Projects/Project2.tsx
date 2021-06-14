import React, { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'firebase/firestore';

import Image from 'material-ui-image';
import CodeIcon from '@material-ui/icons/Code';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

import { FirebaseAppProvider, useFirestoreDocData, useFirestore } from 'reactfire';
// components




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin:20,
      maxWidth:1000,
      alignItems: 'center',

    },
    avatar: {
      backgroundColor: red[500],
    },
    details:{
      margin:50,
    },
  }),
);

function Project2() {
  var details ="";
  var techuse ="";
  var name ="";

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const nameref = useFirestore()
  .collection('test')
  .doc('Project2');
  const firedata :any= useFirestoreDocData(nameref);
// /const about = firedata.data.somes;
try{
 details = firedata.data.Details;
 techuse = firedata.data.Techuse;
 name =  firedata.data.name;

}catch(error){
  var details ="loading..";
  var techuse ="loading..";
  var name ="loading..";

}
 return(

   <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }

          title={name}
          subheader=""
        />

        <CardContent>
          <Typography color="textSecondary" component="p">



 <div className={classes.details}>{details}</div>

 <div>{techuse}</div>


          </Typography>
        </CardContent>


      </Card>


 )
  //return <p>{about}</p>;
}



export default Project2;
