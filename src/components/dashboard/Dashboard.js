import React, { useState, useEffect } from 'react'
import { DashboardStyled } from './DashboardStyled'
import CustomerData from '../../views/customerDashboard/customerData/CustomerData'
import OrderHistory from '../../views/customerDashboard/orderHistory/OrderHistory'
import capitalizeFirstLetter from '../../functions/capinalizeFirstLetter'
import CustomerGreeting from '../../views/customerDashboard/customerGreeting/CustomerGreeting'

function Dashboard() {
  return (
    <>
      <DashboardStyled>
        <CustomerGreeting />
        <CustomerData />
        <OrderHistory />
      </DashboardStyled>
    </>
  )
}

export default Dashboard
