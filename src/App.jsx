
import Application from './components/Day-8/Day8';
import Picture from './assets/day2/profile.jpg'

export default function App() {
  const techs = ['HTML', 'CSS', 'Javascript'];
  const picture = Picture;

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

(async ()=> {
    const data = await fetchC();
    console.log(data);
})()



  return (
      <Application  techs={techs}
                    picture = {picture}
                    button1={'Greet People'}
                    button2={'Show Time'}
                    button3={'Change Background'}
                    style={'px-8 py-2 bg-blue-400 rounded-lg'}
      />
  )
}


