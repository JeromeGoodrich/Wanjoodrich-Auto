/* global */
import React from 'react';

class IconSet extends React.Component {
  constructor() {
    super();
    this.state = { icons: '' };
  }

  componentDidMount() {
    fetch('https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages/Icons/spark-icons-v14.svg')
      .then(r => r.text())
      .then((text) => {
        this.setState({ icons: text });
      }).then(() => {
        window.dispatchEvent(new CustomEvent('icons-loaded'));
      });
  }

  render() {
    const { icons } = this.state;
    return (
      <div className='icons' aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons }} />
    );
  }
}

export default IconSet;
