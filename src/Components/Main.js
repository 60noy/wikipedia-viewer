import React, {Component} from 'react';
import {ListItem,List} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import fetchJsonp from 'fetch-jsonp';
import _ from 'lodash';
const styles={
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
    },
  title:{
    marginTop:'4%',
    marginBottom:'4%',
    fontSize:'3em',
    textAlign:'center'
  },
  search:{
    marginLeft:'20%',
    marginRight:'20%',
  }
}

export default class Main extends Component {
  constructor(props) {
    super(props);
    // input: the value entered in the search box
    // data: the data from the server from Wikipedia API
    this.state={
      input :'',
      data:[],
      errMsg: ''

    }

  }

  // gets the json data and creates an array with keys of title, text and url for every list item
  // sets the state of data to the fetched array
  fetchData = (data) => {
    let titles = data[1]
    let texts = data[2]
    let urls = data[3]

    let fetchedData =  _.zipWith(titles,texts,urls,((title,text,url) =>
     ({title,text,url})
  ))
  this.setState({data: fetchedData})

}

  // GET to Wikipedia API with the input value
  handleData = (input) => {
    {input ?
    fetchJsonp(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&limit=10&format=json`,
      { mode: 'no-cors',headers:{'Access-Control-Allow-Origin':'*'}})
      .then(response => response.json())
      .then(data => this.fetchData(data))
      .catch((err) => this.showErrorMessage(err))
      :
      this.setState({data: ''})}
  }

  showErrorMessage = (err) => {
    this.setState({errMsg: err})
  }

  componentDidMount(){
    let data = this.state.data
    this.setState({data: this.fetchData(data)})
  }

  // gets the input value, calls to handleData if the input is valid
  handleInputChange = (e,input) => {
    if (!!input) {
      this.setState({input})
      this.handleData(input)
    }
    else
    this.setState({input: '', data:[]})


  }

  // navigate the user to the url of the wikipedia item
  redirect = (url) =>{
    window.location = url
  }

  render() {
    let listStyle =  {border: '1px solid grey'}
    let data = this.state.data
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          Wikipedia Viewer
        </div>
        <div style={styles.search}>
        <TextField
          hintText="Search anything in Wikipedia"
          onChange={this.handleInputChange}
          value={this.state.input}
          errorText={this.state.errMsg}
        />
        <List>
          {data && (this.state.data.map(
            (item,index) =>
              <ListItem
               onTouchTap={() => this.redirect(item.url)}
               primaryText={item.title}
               secondaryText={item.text}
               key={index}
             />
          ))
        }
        </List>
      </div>
    </div>
  );
  }


}
