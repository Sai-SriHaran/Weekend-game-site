import React from 'react';
import {Route,  Redirect } from 'react-router-dom';

const ProtectedRouter=({component,...rest})=> {
    var RenderComponents=component;
    let usrtoken =JSON.parse(localStorage.getItem('auth'))?.usrtoken;

    return (
        <Route
        {...rest}
        render={
            props=>{
               return usrtoken ?(
                <RenderComponents {...props}/>
                ):(
                    <Redirect to={{
                        pathname:'/login'
                    }}
                    />
                )  
            }
        }
        />
    )
}

export default ProtectedRouter;
