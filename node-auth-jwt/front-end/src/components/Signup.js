import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Signup() {
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        emailError : '',
        passwordError: ''
    })
    
    const maxAge = 3 * 24 * 60 * 60; //expires in 3 days
    const history = useHistory();

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
        // console.log(data)
    }

    useEffect(() => {
        if(cookies.jwt){
            history.push('/');
        }
    }, []);

    const handleSubmit = (async (e) => {
        e.preventDefault();

        //reset the errors
        setErrors({
            email: '',
            password: ''
        });

        try {
            const res = await fetch('https://auth-node-jwt.herokuapp.com/signup',
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            //now recieve response we sent
            const dataRetrivied = await res.json();
            // console.log(dataRetrivied);
            if(dataRetrivied.errors){
                // console.log(dataRetrivied.error)
                setErrors({
                    ...errors,
                    ...dataRetrivied.errors
                })
            }
            if(dataRetrivied.user){
                setCookie('jwt', dataRetrivied.token, { maxAge: maxAge * 1000 });
                localStorage.setItem('userInfo', JSON.stringify(dataRetrivied.user));
                // console.log(dataRetrivied.token)
                history.push("/");
            }
        } catch (error) {
            // console.log(error);
        }
    });
    return (
        <div>
          <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label >Email</label>
                <input type="text" name="email" required onChange={handleOnChange}/>
                {
                    errors.email && <div className="email error">{errors.email}</div>
                }
               
                <label >Password</label>
                <input type="password" name="password" required onChange={handleOnChange}/>
                {
                    errors.password && <div className="password error">{errors.password}</div>
                }
                
                <button>Signup</button>
            </form>  
        </div>
    )
}

export default Signup
