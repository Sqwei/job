import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return (
      <div>
        <Header />
        {
          this.state.error ?
          <div>页面异常</div>
          :
          this.props.children
        }
        <Footer />
      </div>
    );
  }
};

DefaultLayout.propTypes = {
};
