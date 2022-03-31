import './navigation.styles.scss'
import {Fragment} from "react";

const Navigation = () => {
    return (
        <Fragment>
           <div className="navigation">
               <div className="logo-container">
                   <div className="logo">
                       Logo
                   </div>
               </div>
               <div className="nav-links-container">
                   <div className="nav-link">
                       log in
                   </div>
                   <div className="nav-link">
                       settings
                   </div>
               </div>
           </div>
        </Fragment>
    )
}

export default Navigation;