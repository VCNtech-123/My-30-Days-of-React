
// Exercises

//2
const name = 'John Francis Vecina'

const MyName = () => {
    return <h1 className={"font-bold "}> {name} </h1>
}

//3

const user = {
    name: 'John Francis Vecina',
    country: 'Philippines',
    title: 'student',
    gender: 'male',
    email: 'johnvecina640@gmail.com',
    phone: '0993 857 4301'
}

const MyInfo = () => {
    return (
        <div className="bg-blue-100">
            <h1 className={'font-bold text-blue-500 text-center'}>{user.name}</h1>
            <p>{user.country}</p>
            <p>{user.title}</p>
            <p>{user.gender}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

//4
let users = ['John', 'Neil', 'Mary', 'Noli', 'Angeli', 'Jeffrey']

const ShowUser = () => {
    return (
        <ul>
            {users.map((user, index) => <li key={user}>User {index + 1}: {user}</li>)}
        </ul>
    )
}




export default ShowUser;