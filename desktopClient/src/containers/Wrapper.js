import React, { Component } from 'react';
import Main from '../components/app/Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { reduxForm } from 'redux-form';
import Auth from '../modules/Auth';

class Wrapper extends Component {
  componentDidMount(){
    if(!Auth.isUserAuthenticated()) this.props.history.replace("/Authenticate");
  }
  render() {
    const { user, history, setUser } = this.props;
    return <Main history={history} user={user} setUser={setUser} />;
  }
}

let form = reduxForm({
  form: 'DastM'
})(Wrapper);

form = connect((state, ownProps) => ({
    user: state.user
  }), actions
)(form);

export default form;