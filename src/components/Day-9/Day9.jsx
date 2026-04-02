
import React from 'react';
import Picture from '../../assets/day2/profile.jpg'

class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div className="px-6 py-10 font-mono bt-solid border-b-2 border-white" style={this.props.bground}>
                <h1 className="text-6xl ">Welcome to 30 days or React</h1>
                <h2 className="text-4xl">Getting Started React</h2>
                <h3 className="text-2xl">Javascript library</h3>
                <h4 className="text-lg">John Francis Vecina</h4>
                <h4 className="text-md">April 1, 2026</h4>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <button className={this.props.style} onClick={this.props.func}>
                {this.props.text}
            </button>
        )        
    }
}

class TechStack extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <ul>
                {this.props.techs.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
        )
    }
}

class Footer extends React.Component {

    render() {
        const now = new Date();
        const year = now.getFullYear();
        return (
            <div className="flex justify-center py-8 bg-blue-200 bt-solid b-t-2"> Copyright {year}</div>
        )
    }
}

class Main extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="p-8 flex flex-col gap-8">
                <h1>Prerequisite to get started at react.js</h1>
                <TechStack techs={this.props.techs}/>
                <img src={this.props.picture} className="w-40 h-40 object-cover rounded-full" />
                <h2>John Francis Vecina</h2>
            </div>
        )
    }
}

class Application extends React.Component {

    state = {
        season: 'spring',
    }

    showTime = () => {
        const now = new Date();
        const time = now.getMonth() + 1

        if (time > 2 && time < 6) {
            this.setState( {season: 'spring'} )
        }
        else if (time > 5 && time < 9) {
            this.setState( {season: 'summer'} )
        }
        else if (time > 8 && time < 12) {
            this.setState( {season: 'autumn'});
        }
        else {
            this.setState( {season: 'winter'} )
        }
    }

    componentDidMount() {
        this.timerID = setInterval(this.showTime, 1000)
    }



    render () {
        const techs = ['HTML', 'CSS', 'Javascript'];

        const season = {
            spring: { backgroundColor: 'orange' },
            autumn: { backgroundColor: 'red' },
            winter: { backgroundColor: 'lightblue' },
            summer: { backgroundColor: 'yellow' }
        }
            
        return (
            <div style={season[this.state.season]}>
                <Header bground={season[this.state.season]} />
                <Main techs={techs} picture={Picture}/>
                <Footer />
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

export default Application;
