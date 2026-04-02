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

let data = [];

(async ()=> {
    data = await fetchC();
    console.log(data);
})()


class CountryCard extends React.Component {
    constructor (props) {
        super(props)
    }

    state = {
        country: {}
    }

    randomCountry = (countries) => {
        const randomC = countries[Math.floor(Math.random() * countries.length)];
        this.setState({ country: randomC });
    }

    render () {

    const { country } = this.state;
    const hasData = country.name; 
    const currency = hasData ? Object.values(country.currencies)[0] : null;
    const arrayLang = hasData? Object.values(country.languages) : []
    const language = arrayLang[1] || arrayLang[0]

    return (
        <div className="min-h-screen">
            <Header />
            <div className="flex flex-col justify-center items-center font-mono gap-4">
                
                {hasData ? (
                    <div className="flex flex-col gap-4 justify-center items-center bg-yellow-300 p-4 min-w-120 max-h-120">
                        <div className="flex flex-col items-center justify-center p-4">
                            <img src={country.flags.png} alt="flag" className="max-w-30" />
                            <h1 className="font-bold text-2xl">{country.name.official}</h1>
                        </div>
                        <div className="">
                            <h2 className="font-bold">Capital: <span className="font-normal">{country.capital}</span></h2> 
                            <h2 className="font-bold">Currency: <span className="font-normal">{currency?.name} ({currency?.symbol})</span></h2> 
                            <h2 className="font-bold">Population: <span className="font-normal">{country.population}</span></h2> 
                            <h2 className="font-bold">Language: <span className="font-normal">{language}</span></h2> 
                        </div>
                    </div>
                ) : (
                    <p>Please click the button to select a country!</p>
                )}

                <div className="">
                    <Button 
                        text={'Select Country'} 
                        style={'px-8 py-2 bg-blue-400 rounded-lg'} 
                        func={() => this.randomCountry(data)} 

                    />
                </div>
            </div>
        </div>
    );
    }
}

export default CountryCard;