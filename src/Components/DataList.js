import React from 'react';
import {List,ListItem} from 'material-ui/List';
import PropTypes from 'prop-types';

const DataList = (props) => {
  return (
      <List>
          <div style={props.data && {border: '1px solid #BDBDBD'}}>
          {props.data && props.data.map(
            (item,index) =>
              <ListItem
                onTouchTap={() => props.onItemTap(item.url)}
                primaryText={item.title}
                secondaryText={item.text}
                key={index}
             />
          )
        }
        </div>
    </List>
);
}
DataList.PropTypes ={
  onItemTap: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}
export default DataList;
