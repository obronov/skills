
import {NavLink} from 'react-router-dom'
import {mainMenu} from "../data/mainMenu";

export const Navbar = () => (
    <nav className='list-group'>
        {mainMenu.map((item, i) => <NavLink key={i} className='list-group-item' activeClassName="list-group-item-action active" exact={item.exact||false} to={item.path} >{item.name}</NavLink>)}
    </nav>
)