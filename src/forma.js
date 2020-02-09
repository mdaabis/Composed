import React from 'react'

class Forma extends React.Component {
  constructor(props) {
  super(props);
  this.state = {title: '', author:'',tsig:''};
}
    render() { return    (<div className="field has-addons">
        <div className="control">
        <input className="input is-rounded is-medium" type="text" placeholder="Title" value={this.state.title}
        onChange={event => this.setState({title: event.target.value})}/>
        </div>
        <div className="control">
    </div>

    <div className="control">
        <input class="input is-rounded is-medium" type="text" placeholder="Author" value={this.state.author}
        onChange={event => this.setState({author: event.target.value})}/>
    </div>

    <div className="control">
        <input class="input is-rounded is-medium" type="text" placeholder="Time Signature" value={this.state.tsig}
        onChange={event => this.setState({tsig: event.target.value})}/>
    </div>

    <div className="control">
        <button onClick={() => this.props.callback(this.state)}>Submit</button>
    </div>
</div>);
}}

export default Forma
