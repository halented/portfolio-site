
const Twitflip = (
    <div>
        <span style={{fontWeight: 'bold'}}><a href='http://twitflip.herokuapp.com/'>Twitflip</a></span> is a web app for searching/organzanizing Tweets using Twitter API's internal tool to search for specific Tweets, filtered out by positive or negative tones. The project uses <a href='https://github.com/jnunemaker/httparty'>HTTParty</a> to query the <a href='https://developer.twitter.com/en/docs/twitter-api'>Twitter API</a> and return results to the user, which can be saved to their account in different collections. The frontend builds pathing with <a href='https://reactrouter.com/'>React-Router</a> and modular components, which are reused throughout to app to improve efficiency. <br /><br /> The project is hosted <a href='http://twitflip.herokuapp.com/'>HERE</a>. <br/> The GitHub repository for the frontend can be found <a href='https://github.com/halented/twitflip'>HERE</a> and the backend can be found <a href='https://github.com/halented/twitflip-backend'>HERE</a>.
    </div>
)
const DnDLuxe = (
    <div>
        <span style={{fontWeight: 'bold'}}><a href='https://dndluxe.herokuapp.com/login'>DnDLuxe</a></span> is a web app created to help players of the tabletop game Dungeons & Dragons create and update their DnD characters, in addition to joining games with other players. The frontend manages state with the <a href='https://react-redux.js.org/'>Redux</a> pattern and the <a href='https://github.com/reduxjs/redux-thunk'>Thunk</a> library. The app has login which uses <a href='https://github.com/jwt/ruby-jwt'>JWT</a> tokens to secure the user's info. The data is stored in a relational database, set up with <a href='https://www.postgresql.org/'>PostgreSQL</a>. 
        <br/>
        <br/>
        The project is hosted <a href='https://dndluxe.herokuapp.com/login'>HERE</a>. <br/> The GitHub repository for the frontend can be found <a href='https://github.com/halented/dndeluxe-frontend'>HERE</a> and the backend can be found <a href='https://github.com/halented/dndeluxe-backend'>HERE</a>.
    </div>
)
const Finally = (
    <div>
        <span style={{fontWeight: 'bold'}}><a href='https://finally-app.herokuapp.com/#/'>Finally!</a></span> is a web app intended for extroverts to monitor and analyze their social activity with introverted friends. Users can add introverts to their friend list, record hangout sessions, and view year-by-year data of their logged social activity. The site incorperates <a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> for state management and persists user data with async calls using the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'>Fetch API</a>. The app also uses the <a href='https://formidable.com/open-source/victory/'>Victory Graphing Library</a> to crunch user records into charted data for easy review. 
        <br/>
        <br/>
        The project is hosted <a href='https://finally-app.herokuapp.com/#/'>HERE</a>. <br/> The GitHub repository for the frontend can be found <a href='https://github.com/halented/finally-frontend'>HERE</a> and the backend can be found <a href='https://github.com/halented/finally-backend'>HERE</a>.
    </div>
)

export const DetailBlurbs = {
    Twitflip,
    DnDLuxe,
    Finally
}