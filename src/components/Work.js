import demogif1 from "./demogif1.gif";
import demogif2 from "./demogif2.gif";
import demogif3 from "./demogif3.gif";
import demogif4 from "./demogif4.gif";

export const works = [
    {
        id: 0,
        name: "Hangry",
        demo_gif: demogif1,
        description: "Hangry is a web application that randomly generates a restaurant depending on price range, restaurant category, and user location.",
        github: "https://github.com/cindy-qu/hangry",
        deployed: "https://hangry-r164.onrender.com/"
    
    },
    {
        id: 1,
        name: "Plantastic",
        demo_gif: demogif2,
        description: "Plantastic allows a user to login and signup, create posts to share favorite plants, and view/comment on post by other users. This full stack application utilizes a React JS frontend and Ruby on Rails backend. This Rails API was designed following MVC architecture.",
        github: "https://github.com/cindy-qu/plant-project-phase-4"
    },
    {
        id: 2,
        name: "Song Collector",
        demo_gif: demogif3,
        description: "Song Collector allows you to browse a user's playlist and add songs to a playlist. This application utilizes elements of React (JavaScript, CSS & HTML) and Ruby (Active Records), to create a cohesive front end and back end experience. Users data persists to a backend database so that any changes that the user has made (creating a song entry, or rating a song) will persist even if the page is refreshed.",
        github: "https://github.com/cindy-qu/Phase-3-project-frontend"
    
    },
    {
        id: 3,
        name: "Endless Eats",
        demo_gif: demogif4,
        description: "This applicaton allows a user to search a large external recipe API called Edamame and save favorite recipes. Favorite recipes are saved and accessed with the deployed site on Heroku. In production, the favorited recipes were saved to a db.json file. This app was made using React JS.",
        github: "https://github.com/cindy-qu/recipe-finder-1"
    
    }
]