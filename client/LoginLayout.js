import React from 'react';
import {Row, Col, Card, Button, Input} from 'react-materialize';

class LoginLayout extends React.Component {
    constructor(){
        super();
        this.state = {
          username: '',
          password: ''
        };

        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleUsernameChange(event) {
       this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
       this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
              <Row>
                <Col s={12}>
                  <h3 className='center-align'>Login</h3>
                </Col>
              </Row>
              <Row>
                <Col l={4} offset="l4">
                  <Row>
                  <Input l={12} label="username" value={this.state.username}onChange={this.handleUsernameChange} />
                  </Row>
                  <Row>
                  <Input type="password" label="password" l={12} value={this.state.password} onChange={this.handlePasswordChange}/>
                  </Row>
                  <Row>
                  <Button onClick={this.handleLogin}>Login</Button>
                  </Row>
                </Col>
              </Row>
            </div>
        );
    }
    handleLogin() {
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
    if (this.state.username==="gael" && this.state.password==="arrambide"){
      console.log("Authentificate");
    }
  }
}

export default LoginLayout;
