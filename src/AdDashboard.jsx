// AdDashboard.jsx
import React from 'react';
import styles from './AdDashboard.module.css';
import userIcon from './assets/logo.png';

const AdDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.notificationIcon}>
          <div className={styles.notificationDot}></div>
        </div>
        <div className={styles.userProfile}>
          <img src={userIcon} alt="User" className={styles.userImage} />
          <span className={styles.userName}>user</span>
        </div>
      </div>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarItemActive}>
          <div className={styles.sidebarIcon}>
            <div className={styles.iconCircle1}></div>
            <div className={styles.iconCircle2}></div>
          </div>
          <span>Dashboard</span>
        </div>
        <div className={styles.sidebarItem}>
          <div className={styles.sidebarIcon}>
            <div className={styles.shoppingBagIcon}></div>
          </div>
          <span>Users</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Stats Cards */}
        <div className={styles.statsContainer}>
          <div className={styles.statCardOrange}>
            <div className={styles.statIcon}>
              <div className={styles.personIcon}></div>
            </div>
            <div className={styles.statNumber}>87</div>
            <div className={styles.statLabel}>Total Users</div>
          </div>
          <div className={styles.statCardBlue}>
            <div className={styles.statNumber}>31</div>
            <div className={styles.statLabel}>Total Registered as Sellers</div>
          </div>
        </div>

        {/* Visitors Chart */}
        <div className={styles.visitorsChart}>
          <div className={styles.chartTitle}>Visitors Over Time</div>
          <div className={styles.chartContainer}>
            <div className={styles.yAxis}>
              <span>100</span>
              <span>90</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
            </div>
            <div className={styles.chartLines}>
              <div className={styles.chartLine}></div>
              <div className={styles.chartLineDashed}></div>
              <div className={styles.chartLineDashed}></div>
              <div className={styles.chartLineDashed}></div>
              <div className={styles.chartLineDashed}></div>
              <div className={styles.chartLineDashed}></div>
              <div className={styles.chartLineDashed}></div>
              <div className={styles.dataLine}></div>
            </div>
            <div className={styles.dataPoints}>
              <div className={styles.dataPoint}></div>
              <div className={styles.dataPoint}></div>
              <div className={styles.dataPoint}></div>
              <div className={styles.dataPoint}></div>
              <div className={styles.dataPoint}></div>
            </div>
            <div className={styles.xAxis}>
              <span>March 2024</span>
              <span>April 2024</span>
              <span>May 2024</span>
              <span>June 2024</span>
              <span>July 2024</span>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className={styles.activeUsersCard}>
          <div className={styles.cardHeader}>
            <div className={styles.activeDot}></div>
            <span>Active Users</span>
          </div>
          <div className={styles.activeUsersContent}>
            <div className={styles.activeUsersPercentage}>40%</div>
            <div className={styles.activeUsersChart}>
              <div className={styles.chartBackground}></div>
              <div className={styles.chartFill}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDashboard;