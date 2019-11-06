import React, { Component } from 'react';

class Counter extends Component {
    // state ={
    //     count: this.props.counter.value
    //     // tags: ['tag1', 'tag2', 'tag3']
    //     // imageUrl: 'https://picsum.photos/200'
    // };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    // constructor(){
    //     super();
    //     this.handleIncrement.bind(this);
    // }

    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    // handleIncrement = () => {
    //     this.setState({ count: this.state.count + 1})
    // };

    render() { 
        console.log('props', this.props);

        return (<div>
            {/* <img src={this.state.imageUrl} alt="" />
            <span>{this.formatCount()}</span> */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        // const x = <h1>Zero</h1>
        return value === 0? "Zero" : value;
    }
}
 
export default Counter;
