import React from 'react'

export const DashboardItems = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "}  w-full`}>Dashboard</div>
  )
}
