import React from 'react';
import Picture from '../../assets/day2/profile.jpg'

class Header extends React.Component {
    
    render () {
        return (
            <div className="px-6 py-10 font-mono bg-blue-200 bt-solid border-b-3 border-white">
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
            <div className="flex justify-center py-8 bg-blue-200 bt-solid b-t-3"> Copyright {year}</div>
        )
    }
}

class Main extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="">
                <h1>Prerequisite to get started at react.js</h1>
                <TechStack techs={this.props.techs}/>
                <img src={this.props.picture} className="w-20 h-20 object-cover rounded-full" />
                <h2>John Francis Vecina</h2>
                <div className="flex gap-2">
                    <Button style={this.props.style} text={this.props.text.button1} onClick={this.props.funcs.greet} />
                    <Button style={this.props.style} text={this.props.text.button2} onClick={this.props.funcs.time} />
                    <Button style={this.props.style} text={this.props.text.button3} onClick={this.props.funcs.changeBg}/>
                </div>
            </div>
        )
    }
}

class Application extends React.Component {
    constructor (props) {
        super(props)
    }

    state = {
        bg: 'bg-white',
        textColor: 'text-black'
    }

    render () {
        const { techs, picture, style, text: {}, funcs: {}} = this.props;
        const { button1, button2, button3 } = this.props.text;
        const { greet, time, changeBg } = this.props.funcs

        return (
            <div className={`${this.state.bg}`}>
                <Header />
                <Main techs={techs} picture={picture} style={style} button1={button1} button2={button2} button3={button3} greet={greet} time={time} changeBg={changeBg}/>
                <Footer />
            </div>
        )
    }
}









export default Header;