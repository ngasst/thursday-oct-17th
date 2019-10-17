import React, {Component} from 'react'

export class DumbClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            one: 'red',
            two: 'blue',
            three: 'pink',
            time: 0
        }

        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({time: this.state.time + 3})
            if(this.state.time % 2 === 0) {
                this.setState({one: 'pink', two: 'red', three: 'blue'})
            } else {
                this.setState({
                    one: 'red',
                    two: 'blue',
                    three: 'pink',
                })
            }
        }, 3000)
    }

    componentWillUnmount() {
        if(this.timer) {
            clearTimeout(this.timer);
        }
    }

    render() {
        const {one, two, three} = this.state;
        return (
            <div className="container">
                <div className={`box ${one}`}></div>
                <div className={`box ${two}`}></div>
                <div className={`box ${three}`}></div>
            </div>
        )
    }
}