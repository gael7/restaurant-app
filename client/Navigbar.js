import React from 'react';
import {Navbar, NavItem} from 'react-materialize';


class Navigbar extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
              <Navbar brand='Rest Online' right className='blue-grey darken-1'>
                <NavItem href='register.html'>Register</NavItem>
              </Navbar>
            </div>
        );
    }
}

export default Navigbar;
