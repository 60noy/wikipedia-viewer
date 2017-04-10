import React, {PropTypes} from 'react';
import LinkItem from './LinkItem';
export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        {this.props.data.map((item) =>
          <LinkItem item={item}/>
        )}
      </List>
  );
  }
}

LinksList.propTypes = {
};
