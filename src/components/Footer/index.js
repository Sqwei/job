import React from 'react';
import styles from './index.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
		    阿里巴巴集团 Copyright ©1999-2019 版权所有
      </div>
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
