import React, {PropTypes} from 'react';
import {TextField,List,ListItem} from 'material-ui';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      input :''
    }
  }

  handleInputChange = (e,val) =>{
    alert(val)
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          Wikipeida Viewer
        </div>
        <TextField
          hintText="Search anything in Wikipedia"
          onChange={this.handleInputChange}
          value={this.state.input}
        />
        <List style={{alignItems:'center'}}>
          <ListItem onClick={ () => alert('click')} primaryText="hi" secondaryText="second"/>
          <ListItem primaryText="bye"/>
          <ListItem primaryText="lol"/>
          <ListItem primaryText="eh"/>
        </List>

    </div>
  );
  }


}

const styles={
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'blue',
    marginLeft:'20%',
    marginRight:'20%',
  },
  title:{
    fontSize:'2em',
  }
}
Main.propTypes = {
};
