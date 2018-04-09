import * as React from 'react';

interface IProps {
  children?: any,
};

interface IState {};

class Layout extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default Layout;