// icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/BarChartOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import PrivateIcon from '@material-ui/icons/LockOutlined';
import PublicIcon from '@material-ui/icons/LockOpenOutlined';

// components
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contactme from '../pages/Contactme';
import Settings from '../pages/Settings';

// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Home",
        tooltip: "Home",
        path: "/",
        enabled: true,
        component: Home,
        icon: HomeIcon,
        appendDivider: true
    },
    {
        key: "router-projects",
        title: "Projects",
        tooltip: "projects",
        path: "/projects",
        enabled: true,
        component: Projects,
        icon: DashboardIcon
    },

    {
        key: "router-contact",
        title: "Contactme",
        tooltip: "Contactme",
        path: "/contactme",
        enabled: true,
        component: Contactme,
        icon: ContactsIcon,
        appendDivider: true
    },
    {
        key: "router-settings",
        title: "Settings",
        tooltip: "Settings",
        path: "/settings",
        enabled: true,
        component: Settings,
        icon: SettingsIcon
    },
]
