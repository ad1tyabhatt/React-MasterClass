import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>Aditya</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
          <DashboardIcon/>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          
        </ul>
      </div>
      <div className="bottom">Color options</div>
    </div>
  )
}

export default Sidebar