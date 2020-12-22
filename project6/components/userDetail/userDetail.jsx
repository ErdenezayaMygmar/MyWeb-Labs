import React from 'react';
import { Link } from "react-router-dom";
import {
  Typography,
} from '@material-ui/core';
import './userDetail.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      listt:[],
    }

  }
  bb(){
  axios.get('http://localhost:3000/user/list'+this.props.match.params.userId)
  .then(response =>response.data)
  .then(da =>this.setState({listt:da}));
  }    
  render() {
    this.bb(); 
        var per = this.state.listt;
        //alert("dada");
        return (
       <div className="det">
          <Typography variant="body1">
           <Link to={"/photos/"+this.props.match.params.userId}>
            <Button variant="contained" color="violet" > Photos </Button>
           </Link>
           <Typography className="usName">
            
           <tr><td>FirstName: </td>
               <td>{per.first_name}</td></tr>
               <tr><td>LastName: </td>
               <td>{per.last_name}</td></tr>
               <tr><td>Id: </td>
               <td>{per._id}</td></tr>
               <tr><td>Location: </td>
               <td>{per.location}</td></tr>
               <tr><td>Description: </td>
               <td>{per.description}</td></tr>
               <tr><td>Ocupation: </td>
               <td>{per.occupation}</td></tr>
           {/* <p><label>LastName:</label>{per.last_name}</p>
           <p><label>ID:</label>{per._id}</p>
           <p><label>Location:</label>{per.location}</p>
           <p><label>Description:</label>{per.description}</p>
           <p><label>Ocupation:</label>{per.occupation}</p> */}
          </Typography>
          </Typography>
          </div>
        );
      }
    }
    export default UserDetail;
