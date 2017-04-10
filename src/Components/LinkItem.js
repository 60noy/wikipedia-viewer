import React, {PropTypes} from 'react';
import {ListItem} from 'material-ui';
export const LinkItem = (props) => {
  return (
    <ListItem
      primaryText={props.primary}
      onClick={props.onClick}
      secondaryText={props.secondary}

    />


);
}

LinkItem.propTypes = {
};
