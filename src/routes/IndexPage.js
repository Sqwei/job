import React from 'react';
import { connect } from 'dva';
import DefaultLayout from '../layout/Default';

function IndexPage() {
  return (
    <DefaultLayout>
      content
    </DefaultLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
