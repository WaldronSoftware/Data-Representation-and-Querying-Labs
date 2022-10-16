import React from 'react';



class Header extends React.Component {


    render() {


        return(
            <div>
                <h2 style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}>My Header in another component</h2>
            </div>        
            );
    }

}


export default Header;