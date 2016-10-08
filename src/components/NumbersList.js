import React, {Component} from 'react';
import {connect} from 'react-redux';
import NumberInstance from '../containers/NumberInstance';
import * as numbersActions from '../actions/numbersActions';

class NumbersList extends Component {
  constructor() {
    super();
    this.state = {
      clickedNumbers: []
    };
  }

  // Called when clicking on a number.
  // Checks number for uniqueness in the array, then adds, if array is not full (max 7).
  showNumber(number){
    //simplification of syntax
    var clickedNumbers = this.state.clickedNumbers;
    let storedNumbers = this.state.numbers;
    //
    if (clickedNumbers.indexOf(number) === -1 ){
      if (clickedNumbers.length === 7) {
        console.log('All 7 numbers selected. Not adding any more.');
      }
      else {
        clickedNumbers.push(number);
        clickedNumbers.sort((a,b) => {return a-b});
        this.props.dispatch(numbersActions.addNumber(this.state.clickedNumbers));
      }
    }
    else{
      console.log(number+' is already selected.')
    }
    console.log('You have selected: ' + clickedNumbers);
    console.log('Store has: ' + this.props.numbers);
  }

  render(){
    // numbers array for creating all numbers elements.
    var numbers = [];

    // Generation of each clickable number
    for(var i = 1; i<=34; i++){
      var className = "col-sm-2 text-center numberslist number-" + i;
      numbers.push(
        <NumberInstance
          number={i}
          key={i}
          className={className}
          clickedNumbers={this.state.clickedNumbers}
          showNumber={this.showNumber.bind(this,i)}
        />
      );
    }
    // DOM output
    return(
      <div>
        {numbers}
        <div>
          <button onClick={() => {this.state.clickedNumbers = []; console.log('You have no numbers selected')}}>Reset</button>
        </div>
      </div>
    );
  }
}
NumbersList.PropTypes = {
  number: React.PropTypes.number.isRequired,
  key: React.PropTypes.number.isRequired,
  className: React.PropTypes.string.isRequired,
  clickedNumbers: React.PropTypes.array.isRequired,
  showNumber: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers
  };
}

export default connect(mapStateToProps) (NumbersList);
