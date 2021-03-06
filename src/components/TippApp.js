import React, { Component } from 'react';
import {connect} from 'react-redux';
import NumbersContainer from '../containers/NumbersContainer';
import RowContainer from '../containers/RowContainer';
import '../styles/styles.css';

class TippApp extends Component{
  constructor(){
    super();
    this.state = {
      clickedNumbers: [3,15,32]
    };
  }
  render(){
    return(
      <div className="col-sm-12">
        <div className="col-sm-5 jumbotron">
          <NumbersContainer />
        </div>
        <div className="col-sm-7">
          <RowContainer selectRow={this.state.clickedNumbers} />
        </div>
      </div>
    );
  }
}
TippApp.PropTypes = {
  selectRow: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    clickedNumbers: state.numbers
  }
}

export default connect(mapStateToProps)(TippApp);
