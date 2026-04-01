
import Application from './components/Day-8/Day8';
import Picture from './assets/day2/profile.jpg'

export default function App() {
  const techs = ['HTML', 'CSS', 'Javascript'];
  const picture = Picture;


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
