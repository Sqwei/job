import React from 'react';
import styles from './index.css';
import { randomString } from '../../utils/utils';

class ScrollBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: randomString(8), // 生成随机ID， 防止一个页面多个组件id相同
    };
    this.timer = null;
  }

  componentDidMount() {
    this.scrollUp();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  scrollUp = () => {
    const scrollBox = document.querySelector( `#${this.state.id}`);
    const speed = 60;
    const scroll = () => {
      scrollBox.scrollTop = scrollBox.scrollTop + 1;
      if(scrollBox.scrollTop >= scrollBox.offsetHeight) {
        scrollBox.scrollTop = 0;
      }
    }
    this.timer = setInterval(scroll, speed);
    scrollBox.onmouseover = () => {
      clearInterval(this.timer);
    }
    scrollBox.onmouseout = () => {
      this.timer = setInterval(scroll, speed);
    }
  }

  render() {
    const { id } = this.state;
    return (
      <div id={id} className={styles.box}>
        {this.props.children}
        {this.props.children}
      </div>
    );
  }
};

ScrollBox.propTypes = {

};

export default ScrollBox;
