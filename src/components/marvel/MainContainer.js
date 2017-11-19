import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myActions from '../../actions/myActions';
import styles from './main.scss';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: "",
    };

    this.sendUser = this.sendUser.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    
    
  }
  onInputChange(e){
    let val = e.target.value;    
    this.setState({
      users: val,
    });
    
  }

  sendUser(e){
    e.preventDefault();
    let users = this.state.users;
    this.props.actions.sendUsers(users);
  }

  removeItem(user){
    this.props.actions.removeUser(user);
  }

  partial(fn, ...args) {
    return fn.bind(fn, ...args);
  }

  render() {
    console.log('this.props', this.props.users);
    
    return (
      <div>
        <form onSubmit={this.sendUser}>
          <input name="users" type="text" onChange={this.onInputChange}/>
          <input type="submit" value="Enviar" />
        </form>
        {this.props.users.map((u, i) => {
          return (
            <p key={i}>{u}
              <strong onClick={this.partial(this.removeItem, u)}> X</strong> 
            </p>
          );
        })}

      </div>
    );
  }
}

MainContainer.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  console.log('MAP', state);
  
  return {
    users: state.users || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(myActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);