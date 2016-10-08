import React, {Component} from 'react';

class RowNumbers extends Component {
  render(){
    return(
      <div className={this.props.className} key={this.props.number}
           onClick={() => console.log('Insert function to remove number.')}>
        <div className="numbercircle"></div>
        <p>{this.props.number}</p>
      </div>
    )
  }
}

export default RowNumbers;
