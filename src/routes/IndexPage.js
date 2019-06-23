import React from 'react';
import { connect } from 'dva';
import DefaultLayout from '../layout/Default';
import Search from '../components/Search';
import Jobs from '../components/Jobs';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <DefaultLayout>
      <Search />
      <div className={styles.jobs}>
        <div className={styles.jobsContent}>
          <Jobs />
        </div>
        <div className={styles.links}>
          <a className={styles.link} href="">
            <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" width="179" alt="" />
          </a>
          <a className={styles.link} href="">
            <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" width="260" alt="" />
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
