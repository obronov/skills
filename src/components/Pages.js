import {Route, Switch } from 'react-router-dom'
import {mainMenu} from "../data/mainMenu"

export const Pages = () => (
    <Switch>
        {mainMenu.map((item, i) => <Route key={i} path={item.path} exact={item.exact||false} component={item.component} />)}
    </Switch>
)
