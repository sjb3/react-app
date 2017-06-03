import React, { Component } from 'react';

import { TitleDiv } from './Contacts.style';
// import { Container } from '../../theme/grid';

import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import MdPhoneInTalk from 'react-icons/lib/md/phone-in-talk';
import MdEmail from 'react-icons/lib/md/email';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

class Contacts extends Component {
  render() {
    return (

      <TitleDiv>
        <h2 style={{color: 'white', fontFamily: 'VT323', fontSize: 50}}>contact information</h2>
        <MdPhoneInTalk style={{fontSize: 40}}/>
        <h3>206) 327-7850</h3>

        <MdEmail style={{fontSize: 40}}/>
        <h3>klofseattle@hotmail.com</h3>

        <a href="http://github.com/sjb3"><FaGithubAlt style={{color: '#0afce4', fontSize: 40}}/></a>
        <h3>github.com/sjb3</h3>

        <a href="http://linkedin.com/in/justin-byun"><FaLinkedinSquare style={{color: '#0afce4', fontSize: 40}}/></a>
        <h3>linkedin.com/in/justin-byun</h3>
        <br/>
        <br/>
      </TitleDiv>
    )
  }
}

export default Contacts;