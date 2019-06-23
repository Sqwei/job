import React from 'react';
import styles from './index.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      hotText: [ "JAVA", "IOS", "数据", "安全", "搜索", "算法", "运营", "视觉", "交互", "前端"],
    }
  }

  changeText = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSubmit = () => {
    const { searchValue } = this.state;
    console.log(searchValue);
    // request('targetUrl.json', { searchValue })
  }

  render() {
    const { hotText } = this.state;
    return (
      <div className={styles.search}>
        <div className={styles.block}></div>
        <div className={styles.content}>
          <p>If not now, when?</p>
          <p>If not me, who?</p>
          <p>此时此刻，非我莫属！</p>
          <div className={styles.searchBox}>
            <input className={styles.searchInput} type="text" placeholder="请输入职位关键词" onChange={this.changeText} />
            <input className={styles.submit} type="button" value="搜索" onClick={this.handleSubmit} />
          </div>
          <div className={styles.hot}>
            热门搜索：
            {
              hotText.map(text => <a href="" key={text}>{text}</a>)
            }
          </div>
        </div>
      </div>
    );
  }
};

Search.propTypes = {
};
