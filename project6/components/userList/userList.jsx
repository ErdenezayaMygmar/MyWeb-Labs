import React from 'react';
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

import axios from 'axios';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      listt:[],
      cnt:[],
    }
    axios.get('http://localhost:3000/user/list')
    .then(response =>response.data)
    .then(da=>this.setState({cnt}))
    .then(da =>this.setState({listt}));
  }

  render() {
    return (
      <div >
           {this.state.listt.map(pa=><p key={pa}>
            <List className= "xaxa"component="nav">
            <ListItem  button component={Link}  to = {"/users/"+pa._id}  >
            <ListItemText className="keke"  primary={pa.first_name+" "+pa.last_name}   />               
          </ListItem>
          <Divider />
        </List>
        </p>)}
        </div>
    );
  }
}

export default UserList;