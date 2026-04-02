import React from 'react'


class MouseEvent extends React.Component {

    state = {
        position: { top: '0%', right: '0%' }
    }

    randomNumber = () => {
        return Math.floor(Math.random() * 75) + '%'
    }

    randomPosition = () => {
        this.setState({ position: {top: this.randomNumber(), right: this.randomNumber()}})
    }

    render() {
        return (
            <div className="min-h-screen min-w-screen">
                <div className="bg-blue-300 p-12 text-2xl font-mono fixed" style={{...this.state.position}} onMouseEnter={this.randomPosition}>
                    30 Days of React
                </div>
            </div>
        )
    }
}

export default MouseEvent;