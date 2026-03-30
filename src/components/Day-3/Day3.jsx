import css from '../assets/day2/css.svg'
import html from '../assets/day2/html.svg'
import js from '../assets/day2/js.svg'
import react from '../assets/day2/react.svg'
import profile from '../assets/day2/profile.jpg'


//1
let img = [css, html, js, react];
const style = ['w-1/5', 'min-h-20', 'object-cover']
const RenderImage = () => {
    return (
        <div className={'flex flex-col justify-center w-full p-8 gap-12 max-w-full'}>
            <span className={'font-bold text-lg text-center'}>Front End Technologies</span>
            <div className="flex justify-center gap-30">
                {img.map((img) => <img key={img} src={img} className={'w-1/8 min-h-20'} />)}
            </div>
        </div>
    )
} 


//2
const Subscribe = () => {
    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center bg-blue-200 py-12 px-4 gap-8">
                <h1 className="font-mono text-4xl">SUBSCRIBE</h1>
                <p className="text-center">Sign up with your email address to receive news and updates</p>
                <div className="flex flex-col items-center gap-3 w-full lg:flex-row lg:justify-center">
                    <input type="text" placeholder="First Name" className="bg-white rounded-lg px-4 py-2 w-7/8 lg:w-2/14" />
                    <input type="text" placeholder="Last Name" className="bg-white rounded-lg px-4 py-2 w-7/8 lg:w-2/14" />
                    <input type="text" placeholder="Email" className="bg-white rounded-lg px-4 py-2 w-7/8 lg:w-2/14" />
                </div>
                <button className="px-4 py-2 w-4/8 rounded-lg bg-red-400 lg:w-2/8">Subscribe</button>
            </div>
        </div>
    )
}


//3
let skills = ['HTML', 'CSS', 'Javascript', 'Vite', 'Tailwind CSS', 'Java', 'MySQL', 'React']

const UserCard = () => {
    return (
        <div className="p-6 bg-blue-50 min-h-screen">
            <div className="flex flex-col p-4 bg-white w-full gap-8">
                <div className="">
                    <img src={profile} className="rounded-full w-50" />
                </div>
                <h1 className="-mt-4 text-lg font-semibold">JOHN FRANCIS VECINA</h1>
                <h1 className="font-thin">IT Student, Pamantasan ng Lungsod ng Valenzuela</h1>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Skills</h1>
                    <div className="flex gap-4">
                        {skills.map(skill => <span className="bg-blue-500 py-1 px-4 rounded-md text-white">{skill}</span>) }
                    </div>
                </div>
                <p className="">Started 30-Days-of-React on March 31, 2026</p>
            </div>
        </div>
    )
}



export default UserCard;