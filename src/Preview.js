import { useSelector, useDispatch } from 'react-redux'
import { selectTitle, setTitle } from './store'


export default function Preview() {
    const dispatch = useDispatch()
    const code = useSelector(selectTitle)

    const data = [
        {"id":"70060018","name":"10,000 B.C.","release":"2008","contentRating":"TV-14","duration":"1h 48m","imageDefinition":"HD","description":"Fierce mammoth hunter D'Leh sets out on an impossible journey to rescue the woman he loves from a vicious warlord and save the people of his village.","ratingReason":"sequences of intense action and violence","Director":["Roland Emmerich"],"Cast":["Steven Strait","Camilla Belle","Cliff Curtis","Joel Virgel","Affif Ben Badra","Mo Zinal","Nathanael Baring","Mona Hammond","Omar Sharif"],"Writer":["Roland Emmerich","Harald Kloser"],"Genres":["Action & Adventure"],"This film is":["Exciting"],"isFilm":true,"hasAudioDescription":false},
        {"id":"80196613","name":"12 Strong","release":"2018","contentRating":"TV-14","duration":"2h 9m","imageDefinition":"HD","description":"Following 9/11, a dozen US soldiers mount up on horseback in Afghanistan to help a local warlord take on a mutual enemy. Inspired by true events.","ratingReason":"war violence and language throughout","Director":["Nicolai Fuglsig"],"Cast":["Chris Hemsworth","Michael Shannon","Michael Peña","Navid Negahban","Trevante Rhodes","Geoff Stults","Thad Luckinbill","Austin Hébert","Austin Stowell","Ben O'Toole","Kenneth Miller","Kenny Sheard","Jack Kesy","Rob Riggle","William Fichtner"],"Writer":["Ted Tally","Peter Craig"],"Genres":["Military Films","Films Based on Real Life","Films Based on Books","Action & Adventure","Dramas"],"This film is":["Exciting"],"isFilm":true,"hasAudioDescription":false},
        {"id":"80198505","name":"Aggretsuko","release":"2021","contentRating":"TV-14","duration":"4 Seasons","imageDefinition":"HD","description":"Frustrated with her thankless office job, Retsuko the Red Panda copes with her daily struggles by belting out death metal karaoke after work.","ratingReason":"language","maturityDescription":"Parents strongly cautioned. May not be suitable for ages 14 and under.","Cast":["Kaolip","Komegumi Koiwasaki","Maki Tsuruta","Sohta Arai","Rina Inoue","Shingo Kato","Yuki Takahashi","Chiharu Sasa","Yuki Kaji","SAYUMI","RIMA","ARISA","Rarecho"],"Genres":["Japanese","Anime Series","Adult Animation","Anime Comedies"],"This programme is":["Deadpan","Offbeat"],"isFilm":false,"averageEpisodeDuration":"15m","hasAudioDescription":false},
        {"id":"81008536","name":"Aggretsuko: We Wish You a Metal Christmas","release":"2018","contentRating":"TV-14","duration":"22m","imageDefinition":"HD","description":"While Retsuko desperately makes plans for Christmas Eve, her new obsession with seeking validation through social media spirals out of control.","ratingReason":"substances","maturityDescription":"Parental Guidance suggested","Director":["Rarecho"],"Cast":["Kaolip","Shingo Kato","Komegumi Koiwasaki","Maki Tsuruta","Sohta Arai","Rina Inoue","Yuki Takahashi","Rarecho"],"Writer":["Rarecho"],"Genres":["Japanese","Anime Series","Adult Animation","Anime Comedies"],"This film is":["Deadpan","Offbeat"],"isFilm":true,"hasAudioDescription":false},
        {"id":"80091741","name":"13TH","release":"2016","contentRating":"TV-14","duration":"1h 40m","imageDefinition":"HD","description":"In this thought-provoking documentary, scholars, activists and politicians analyze the criminalization of African Americans and the U.S. prison boom.","ratingReason":"language","maturityDescription":"For Mature Audiences. May not be suitable for ages 17 and under.","Director":["Ava DuVernay"],"Writer":["Ava DuVernay","Spencer Averick"],"Genres":["Social & Cultural Docs","Documentaries"],"This film is":["Provocative","Investigative"],"isFilm":true,"hasAudioDescription":true},
        {"id":"81059369","name":"21 Bridges","release":"2019","contentRating":"TV-14","duration":"1h 39m","imageDefinition":"HD","description":"Armed with a bold plan to lock down Manhattan, a detective on a mission races against time to catch two cop killers — and makes a shocking discovery.","ratingReason":"violence and language throughout","Director":["Brian Kirk"],"Cast":["Chadwick Boseman","Sienna Miller","J.K. Simmons","Taylor Kitsch","Stephan James","Keith David","Alexander Siddig"],"Writer":["Adam Mervis","Matthew Michael Carnahan"],"Genres":["Action & Adventure","Dramas"],"This film is":["Exciting"],"isFilm":true,"hasAudioDescription":false}
    ]
    const titleData = data.find((title) => title.id === code)
    const staff = titleData.Director.concat(titleData.Writer).concat(titleData.Cast).slice(0, 8).concat([". . ."])
    
    const exit = () => dispatch(setTitle(null))

    return (
        <div className="preview">
            <div className ="preview-left">
                <img 
                    className='x-icon' 
                    src={`${process.env.PUBLIC_URL}/images/x-icon.png`} 
                    alt='x'
                    onClick={exit} 
                />
                <img 
                    className='preview-thumbnail' 
                    src={`${process.env.PUBLIC_URL}/images/${code}.jpg`} 
                    alt={`${code} preview`}
                />
                <a 
                    className='play-link' 
                    href={`https://www.netflix.com/watch/${code}`} 
                    target='_blank' 
                    rel='noreferrer'
                >
                    <img 
                        className='play-icon' 
                        src={`${process.env.PUBLIC_URL}/images/play-icon.png`} 
                        alt='play' 
                    />
                </a>
            </div>
            <div className ="preview-right">
                <div className='preview-header'>
                    <h1 className='preview-title'>{titleData.name}</h1>
                    <h3 className='preview-content-rating'>{titleData.contentRating}</h3>
                </div>
                <div className='preview-body'>
                    <div className='preview-column'>
                        <p className='preview-description'>{titleData.description}</p>
                        <div className='preview-buttons'>
                            <h5 className='preview-button'>VPNs</h5>
                            <h5 className='preview-button'>Language</h5>
                        </div>
                    </div>
                    <div className='preview-staff'>
                        <h3 className='preview-staff-title'>Staff</h3>
                        <div className='preview-staff-list'>
                            {staff.map((staffMember) => <h5 className='preview-staff-member' key={staffMember}>{staffMember}</h5>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}