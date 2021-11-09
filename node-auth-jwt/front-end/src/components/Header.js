import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

function Header() {
    const [userInfo, setuserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : {});
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const history = useHistory();

    useEffect(() => {
        if(!cookies.jwt){
            setuserInfo({});
            history.push('/login');
        }else{
            setuserInfo(JSON.parse(localStorage.getItem('userInfo')))
        }
    }, [cookies.jwt])

    const removeCookiesAndStorage = () => {
        removeCookie('jwt');
        localStorage.removeItem('userInfo');
        setuserInfo({});
        history.push("/login");
    } 
    return (
        <nav>
            
            <Link to="/"><h1>Node Auth-JWT</h1></Link>
            <ul>
            {/* <% if(user) { %> */}
            
            {

                userInfo?.email && <li>Welcome, {userInfo.email}</li>
            }
            {
               cookies.jwt && <li style={{cursor: "pointer"}} onClick={removeCookiesAndStorage}>Log out</li>
            }
            
            {/* <% } else { %> */}
            {
                !cookies.jwt && <li><Link to='/login'>Log in</Link></li>
            }
            {
                !cookies.jwt && <li className="btn"><Link to='/signup'>Sign up</Link></li>
            }

                


            {/* <% } %> */}
            </ul>
        </nav>
    )
}

export default Header

  
  