import React from 'react';
import styles from './index.css';
import classnames from 'classnames';

const menus = [{
  name: `首\xa0\xa0\xa0页`,
  url: '/',
  key: 'index'
}, {
  name: '社会招聘',
  url: '/',
  key: 'positionList'
}, {
  name: '校园招聘',
  url: '/',
  key: 'campus'
}, {
  name: '了解阿里',
  url: '/',
  key: 'about'
}, {
  name: '个人中心',
  url: '/',
  key: 'apply'
}];

const active = 'index'; // 应根据url判断

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <a className={styles.logo} href="/">
          <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt="" />
        </a>
        <i className={styles.line}>|</i>
        <i className={styles.title}>社招官网</i>
        <div className={styles.menus}>
          {
            menus.map(menu => <a className={classnames(styles.menu, { [styles.active]: active === menu.key })} key={menu.key} href={menu.url}>{menu.name}</a>)
          }
        </div>

        {/* 未登录 */}
        <div className={styles.login}>
					<span>欢迎来到阿里巴巴集团招聘！ </span>
          <a href="">登录</a>&nbsp;|&nbsp;
          <a href="">注册</a>
        </div>

        {/* 已登录 */}

      </div>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
