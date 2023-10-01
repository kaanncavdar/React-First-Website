import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Games from "../components/Games/games"
import NotFound from "../components/404"
import Search from "../components/Search"
import GameDetail from "../components/Games/gameDetail"
const mydata = [
    {link: "/", title: "Home", component: Home,isExact: true, isLink : true},
    {link: "/games", title: "Games", component: Games,isExact: true,isLink : true},
    {link: "/games/:gameID", title: "All Games", component: GameDetail, isExact: false, isLink:false},
    {link: "/search", title: "Search", component: Search, isExact: false, isLink:false},
    {link: "/contact", title: "Contact", component: Contact,isExact: true,isLink : true },
    {link: "/about", title: "About", component: About,isExact: true,isLink : true},
    {link: "", title: "404", component: NotFound, isExact: false, isLink:false}
    
    
]

export default mydata