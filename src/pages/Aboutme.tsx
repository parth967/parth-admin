import React, { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'firebase/firestore';
import Image from 'material-ui-image';
import CodeIcon from '@material-ui/icons/Code';
import clsx from 'clsx';
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


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxwidth:10,
      fontfamily:'AmstelvarAlpha',

    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);


function Aboutme() {
  var quotes ="";
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const nameref = useFirestore()
  .collection('test')
  .doc('aboutme');
  const firedata :any= useFirestoreDocData(nameref);
// /const about = firedata.data.somes;
try{
 quotes= firedata.data.somes;
}catch(error){
   quotes ="Hi";
}
 return(
   <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              A
            </Avatar>
          }

          title="About Me"
          subheader=""
        />

        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
          {quotes}
          </Typography>
        </CardContent>


      </Card>
 )
  //return <p>{about}</p>;
}



export default Aboutme;
