import React from 'react';
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
} from '@material-ui/core';
import './userPhotos.css';
import Axios from 'axios';
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
   this.state={
      id:0,
      listt:[],
    }
    Axios.get('http://localhost:3000/photosOfUser/'+this.props.match.params.userId)
    .then(response =>response.data)
    .then(da =>this.setState({listt:data}));
   }
render() {
return(
       <Typography variant="body1" className="bod">
       {this.state.listt.map(pa=><p key={pa._id}>
      <div className>
      <img src={"/images/"+pa.file_name} alt="bcg" className="img" />
      <Typography color="textSecondary">{pa.date_time}</Typography>
      {(typeof pa.comments === "undefined" )? " ": 
       pa.comments.map(comm=><p key={comm._id}>
         <Link component={Link}  to={"/users/"+ comm.user._id}>
         <Typography variant="h5" >{comm.user.first_name + " " +comm.user.last_name}</Typography>
       </Link>
       <p className="comm">{comm.comment}</p>
       <Typography color = "textSecondary" align="right">{comm.date_time}</Typography>
       </p>)
      }
      </div>
   </p>
)    }
 </Typography>
   ); 
 }
 
}
export default UserPhotos;