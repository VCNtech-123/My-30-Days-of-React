
//3
const randomColor = () => {
    let hex = '0123456789ABCDEF';
    let color = '';

    for (let i = 0; i < 6 ; i++) {
        const index = Math.floor(Math.random() * hex.length);
        color += hex[index];
    }

    return '#' + color;
}
const randomCard = []

    for (let i = 0; i < 5; i++) {
        randomCard.push(randomColor());
    }

const RandomColorCard = () =>  {
    return (
        <div className="flex flex-col gap-8 min-h-screen items-center p-8">
            {randomCard.map(card => <h3 key={card} className={`w-full p-4 flex justify-center items-center`} style={{backgroundColor: card}}>{card}</h3>)}
        </div>
    )
}

export default RandomColorCard;