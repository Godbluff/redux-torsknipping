import React, {Component} from 'react';

class NumberInstance extends Component {
  render(){
    return(
      <div className={this.props.className} key={this.props.number}
           onClick={()=> this.props.showNumber(this.props.number)}>
        <div className="numbercircle"></div>
        <p>{this.props.number}</p>
      </div>
    )
  }
}

export default NumberInstance;
