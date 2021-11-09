import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

function Smoothies() {
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const history = useHistory();

    useEffect(() => {
        if(!cookies.jwt){
            localStorage.removeItem('userInfo');
            history.push('/login');
        }
    }, []);

    return (
        <ul className="recipes">
            <li className="recipe">
                <img src="smoothie.png" alt="smoothie recipe icon" />
                <h4>Banana Boost</h4>
                <p>Banana, Vanilla ice cream, Milk</p>
            </li>
            <li className="recipe">
                <img src="smoothie.png" alt="smoothie recipe icon" />
                <h4>Tropical Twist</h4>
                <p>Peach, Pinapple, Apple juice</p>
            </li>
            <li className="recipe">
                <img src="smoothie.png" alt="smoothie recipe icon" />
                <h4>Protein Packer</h4>
                <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>
            </li>
            <li className="recipe">
                <img src="smoothie.png" alt="smoothie recipe icon" />
                <h4>Banana Boost</h4>
                <p>Banana, Vanilla ice cream, Milk</p>
            </li>
            <li className="recipe">
                <img src="smoothie.png" alt="smoothie recipe icon" />
                <h4>Tropical Twist</h4>
                <p>Peach, Pinapple, Apple juice</p>
            </li>
            <li className="recipe">
                <img src="smoothie.png" alt="smoothie recipe icon" />
                <h4>Protein Packer</h4>
                <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>
            </li>
        </ul>
    )
}

export default Smoothies
