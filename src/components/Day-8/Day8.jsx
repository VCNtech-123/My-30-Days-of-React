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
                <div className="flex gap-2">
                    <Button style={this.props.style} text={this.props.button1} func={this.props.greet} />
                    <Button style={this.props.style} text={this.props.button2} func={this.props.time} />
                    <Button style={this.props.style} text={this.props.button3} func={this.props.changeBg}/>
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
        bg: {backgroundColor: 'white'},
        textColor: {color: 'black'}
    }

    greet = () => {
        window.alert('Hello World');
    }

    showTime = () => {
        window.alert('Today');
    }

    changeBg = () => {
        const colorBg = this.state.bg.backgroundColor === 'white' ? 'black' : 'white';
        const text = this.state.textColor.color === 'black' ?  'white' : 'black';
        this.setState({bg: {backgroundColor: colorBg}, textColor: {color: text}});
    }

    render () {
        const { techs, picture, style, button1, button2, button3 } = this.props;

        return (
            <div style={{ ...this.state.bg, ...this.state.textColor}}>
                <Header bground={{...this.state.bg}} />
                <Main techs={techs} picture={picture} style={style} button1={button1} button2={button2} button3={button3} greet={this.greet} time={this.showTime} changeBg={this.changeBg}/>
                <Footer />
            </div>
        )
    }
}

export default Application;

//2 

  const fetchC = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,languages,population,currencies');
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.error(e);
        return [];
    }
}

data = [];

(async ()=> {
    data = await fetchC();
    console.log(data);
})()


class CountryCard extends React.Component {
    constructor (props) {
        super(props)
    }

    state = {
        country: [...data]
    }

    render () {
        const { } = this.state.movies
        return (
            <div className="min-h-screen">
                <Header />
                <div className="flex justify-center items-center">
                    <div className="flex flex-col">
                        <img src="" alt="" className="" />

                    </div>
                </div>
            </div>
        )
    }
}