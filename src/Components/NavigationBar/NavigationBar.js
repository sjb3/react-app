import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/resume">Resume</NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
      </NavigationContainer>
    )
  }
}

export default NavigationBar;