import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { MdOutlineSubject, MdArrowDropDown } from "react-icons/md";
import {AiOutlineUser} from 'react-icons/ai';

import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <MdOutlineSubject />
        </button>
        <div>
          <img src={Logo} alt="logo" />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn">
            <AiOutlineUser />
            Ola
            <MdArrowDropDown />
          </button>
          <div className="dropdown">
            <button type="button" className="drop-down-btn">logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
  }

export default Navbar
