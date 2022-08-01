import React from "react";
import Logo from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/BigSidebar";
import { IoClose } from "react-icons/io5 ";
import { ImStatsDots, ImProfile } from "react-icons/im";
import { MdQueryStats, MdEventNote } from " react-icons/md";
import {Link} from 'react-router-dom'

const BigSideBar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <button className="close-btn">
            <IoClose />
          </button>
          <header>
            <img src={Logo} alt="Logo" />
          </header>
          <div className="nav-links">
            <Link to="/" className="navlink">
                <span className="icon">
                    <ImStatsDots />
                </span>
                stats
            </Link>
            <Link className="nav-link" to="/all-jobs">
                <span className="icon">
                    <MdQueryStats />
                </span>
                all jobs
            </Link>
            <Link to="/add-job" className="navlink">
                <span className="icon">
                    <MdEventNote />
                </span>
                add job
            </Link>
            <Link to="/profile" className="navlink">
                <span className="icon">
                    <ImProfile />
                </span>
                Profile
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
