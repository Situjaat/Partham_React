import { Component } from "react";


class CountChangerClass extends Component {
   
  constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }

    handleChange = ()=>{
        this.setState({count : this.state.count +1})
    //     this.setState(prevState => ({
    //   count: prevState.count + 1
    //     }));
   
}
render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleChange}> Count</button>
      </div>
    );
  }
}
export default CountChangerClass