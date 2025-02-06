import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bg1 from '../..//assets/bg1.png'
import {
  BsGraphUp,
  BsPeople, 
  BsPerson, 
  BsFileText, 
  BsBook,
  BsGraphDown,
  BsCalendarEvent,
  BsGear,
  BsChatDots,
  BsQuestion,
} from 'react-icons/bs'
import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  StyledLink,
  SidebarIcon,
  Logo,
  ToggleButton,
  ToggleIcon,
} from '../../styles/SidebarStyles'

const Sidebar = () => {
  const [isOpen, SetIsOpen] = useState(true);

  const toggleSidebar = () => {
    SetIsOpen(!isOpen)
  }
  return (
    <SidebarContainer style={{width: isOpen ? '250px' : '80px'}}>
      <SidebarHeader>
        <Logo src={bg1} alt='logo'/>
      </SidebarHeader>

      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon><BsGraphUp/></SidebarIcon>
          <StyledLink to='/admin/dashboard'>Dashboard</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsPeople/></SidebarIcon>
          <StyledLink to='/admin/classes'>Classes</StyledLink>
        </SidebarNavItem>
        
        <SidebarNavItem>
          <SidebarIcon><BsPerson/></SidebarIcon>
          <StyledLink to='/admin/students'>Students</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsPeople/></SidebarIcon>
          <StyledLink to='/admin/teachers'>Teachers</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsFileText/></SidebarIcon>
          <StyledLink to='/admin/assignments'>Assignments</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsBook/></SidebarIcon>
          <StyledLink to='/admin/exams'>Exams</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsGraphDown/></SidebarIcon>
          <StyledLink to='/admin/performance'>Performance</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsCalendarEvent/></SidebarIcon>
          <StyledLink to='/admin/attendance'>Attendance</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsBook/></SidebarIcon>
          <StyledLink to='/admin/libarary'>Libarary</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsChatDots/></SidebarIcon>
          <StyledLink to='/admin/communication'>Announcement</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsCalendarEvent/></SidebarIcon>
          <StyledLink to='/admin/events'>Events Ans Calender</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon><BsGear/></SidebarIcon>
          <StyledLink to='/admin/settings'>Settings And Profile</StyledLink>
        </SidebarNavItem>

        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>V</ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  )
}

export default Sidebar