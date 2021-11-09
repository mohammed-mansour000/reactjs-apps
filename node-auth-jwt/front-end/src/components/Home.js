import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

function Home() {
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const history = useHistory();
    
    useEffect(() => {
        if(!cookies.jwt){
            localStorage.removeItem('userInfo');
            history.push('/login');
        }
    }, []);
    return (
        <header>
        <div className="smoothie">
          <img src="smoothie.png" alt="" />
        </div>
        <div className="headings">
          <h2>Smoothie Recipes</h2>
          <h3>By Mohammed Mansur</h3>
          <Link to="smoothies" className="btn">View Recipes</Link>
        </div>
      </header>
    )
}

export default Home
