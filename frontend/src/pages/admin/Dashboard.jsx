import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import EventCalender from './EventCalender'
import Announcement from './Announcement'
import Performance from './Performance'
import axios from 'axios'
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../../styles/DashboardStyles'

const AdminDashborad = () => {
  return (
  <AdminDashboardContainer>
    <Sidebar />
    <Content>
      <TopContent>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Toatal Students</CardTitle>
              <CardContent>500</CardContent>
            </Card>

            <Card>
              <CardTitle>Toatal Teachers</CardTitle>
              <CardContent>50</CardContent>
            </Card>

            <Card>
              <CardTitle>Toatal Classes</CardTitle>
              <CardContent>20</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
        <CardTitle>All Events</CardTitle>
        </Section>
      </TopContent>

      <BottomContent>
        <Performance />
        <Announcement /> 
      </BottomContent>
    </Content>
  </AdminDashboardContainer> 
 )
}

export default AdminDashborad