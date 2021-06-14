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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FirebaseAppProvider, useFirestoreDocData, useFirestore } from 'reactfire';
// components


import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop:20,
      marginLeft:120,

    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

function Spec() {
  var collegen ="";
  var coursen ="";
  var date ="";
  var fieldn ="";
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const nameref = useFirestore()
  .collection('test')
  .doc('Spec');
  const firedata :any= useFirestoreDocData(nameref);
// /const about = firedata.data.somes;
try{
 collegen = firedata.data.CName;
 coursen = firedata.data.Course;
 date =  firedata.data.Date;
 fieldn =firedata.data.fieldn;
}catch(error){
  var collegen ="loading..";
  var coursen ="loading..";
  var date ="loading..";
  var fieldn ="loading..";
}
 return(

   <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            S
            </Avatar>
          }

          title={collegen}
          subheader=""
        />

        <CardContent>
          <Typography color="textSecondary" component="p">



 <div><EventIcon></EventIcon>{date}</div>

 <div><AssignmentIcon></AssignmentIcon>{fieldn}</div>
    <div><DeveloperModeIcon></DeveloperModeIcon>    {coursen}</div>




          </Typography>
        </CardContent>


      </Card>

 )
  //return <p>{about}</p>;
}



export default Spec;
