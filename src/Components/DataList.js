import React from 'react';
import {List,ListItem} from 'material-ui/List';
import PropTypes from 'prop-types';

const DataList = (props) => {
  return (
    <div style={{border: '1px solid gray'}}>
      {props.data.map(
        (item,index) =>
          <ListItem
           primaryText={item.title}
           secondaryText={item.text}
           key={index}
         />
      )
    }
  </div>
);
}
DataList.PropTypes ={
  onTouchTap: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}
export default DataList;
