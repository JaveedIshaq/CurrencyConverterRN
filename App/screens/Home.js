import React, { Component }from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Container>
         <StatusBar translucent={false} barStyle="light-content" />
         <Logo />
      </Container>  
    );
  }
}

export default Home;