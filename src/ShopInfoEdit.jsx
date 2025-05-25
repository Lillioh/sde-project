// src/pages/ShopInfoEdit.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed
import styles from './ShopInfoEdit.module.css';

const ShopInfoEdit = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.shopProfileContainer}>
        <div className={styles.shopProfileCard}>
          <h2 className={styles.shopProfileTitle}>Shop Profile Information</h2>

          <form className={styles.profileForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="shopName">Shop Name</label>
                <input type="text" id="shopName" placeholder="Input" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Input" />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="idType">ID Type</label>
                <input type="text" id="idType" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="houseWard">House# and Ward</label>
                <input type="text" id="houseWard" placeholder="Street/Block Lot/Barangay" />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="idNumber">ID Number</label>
                <input type="text" id="idNumber" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="districtProvince">District and Province</label>
                <input type="text" id="districtProvince" />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="file">Photo of the valid ID</label>
                <div className={styles.fileInputWrapper}>
                  <input type="file" id="file" className={styles.fileInput} />
                  <label htmlFor="file" className={styles.uploadButton}>Upload Image</label>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <div className={styles.phoneInput}>
                  <span className={styles.phonePrefix}>+63</span>
                  <input type="tel" id="phone" className={styles.phoneNumberInput} />
                </div>
              </div>
            </div>

            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submitButton}>Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopInfoEdit;
