import Browser from './Browser'


export default function Home() {
    const genres = [
        {
            name: 'Action Films',
            titles: ["70060018","80196613","81464765","81059369","81238155","70229179"]
        },
        {
            name: 'Anime Shows',
            titles: ["80183051","80161848","80198505","81008536","80043576","70299043"]
        },
        {
            name: 'Black Stories Films',
            titles: ["81412227","81056700","80125979","80147908","80091741","81059369"]
        },
        { 
            name: 'Classic & Cult Shows',
            titles: ["70142405","70304245","70140450","81014647","70213238","81443363"]
    }]

    return (
        <div className='home'>
            <Browser genres={genres} />
        </div>
)}