import Input from '../Input/Input';
import Button from '../Button/Button';
import { useHistory } from 'react-router';
import { useState, useContext } from 'react';
import AuthContext from '../store/auth-context';
import './Login.css';


function Login(){
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword]=useState()
    const [buttontitle, setButtontitle] = useState('Sign Up')
    const [maintitle, setMaintitle] = useState('Sign-Up')
    const [signedup, setSignedup] = useState(false)
    const [changetitle, setChangetitle] = useState('Already Signed-Up? So Sign-In!')
    const history = useHistory();

    const authCTX = useContext(AuthContext)

    const usernameChangeHandler = (e) =>{
        setUsername(e.target.value)
    }
    const emailChangeHandler = (e) =>{
        setEmail(e.target.value)
    }
    const passChangeHandler = (e) =>{
        setPassword(e.target.value)
    }
    const signedupClickHandler = () =>{
        setMaintitle('Sign-In');
        setButtontitle('Sign In')
        setChangetitle('Not Signed-Up yet? So Sign-Up!')
        setSignedup(true)
        if(signedup){
            setMaintitle('Sign-Up');
            setButtontitle('Sign Up')
            setChangetitle('Already Signed-Up? So Sign-In!')
            setSignedup(false)
        }
    }
    const buttonClickHandler = () =>{
        if(signedup === false){
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVYj9DmDiJRrpFvZ2q5sqYY7trMbAn9mI',
            {
                method:'POST',
                body:JSON.stringify({
                    username:username,
                    email:email,
                    password:password,
                    returnSecureToken :true,
                }),
                headers: {
                    "Content-type":'application/json'
                }
            }
        ).then((res) => {
            if(res.ok){
                return res.json();
            }else{
                return res.json().then(() => {
                    let errorMessage = 'Authentication failed';
                    throw new Error(errorMessage)
                })
            }
        }).then((data) => {
            console.log(data);
            console.log(data.idToken)
            alert('Successfully signed up')
        })
        .catch((err) => {
            alert(err.message);
        })
        setUsername('');
        setEmail('');
        setPassword('');
        }else{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVYj9DmDiJRrpFvZ2q5sqYY7trMbAn9mI',
                {
                    method:'POST',
                    body:JSON.stringify({
                        username:username,
                        email:email,
                        password:password,
                        returnSecureToken :true,
                    }),
                    headers: {
                        "Content-type":'application/json'
                    }
                }
            ).then((res) => {
                if(res.ok){
                    return res.json();
                }else{
                    return res.json().then(() => {
                        let errorMessage = 'Authentication failed';
                        // if( data && data.error && data.error.message){
                        //      errorMessage = data.error.message;
                        // }
                        throw new Error(errorMessage)
                    })
                }
            }).then((data) => {
                console.log(data);
                console.log(data.idToken)
                authCTX.login(data.idToken);
                console.log(authCTX);
                history.replace('/profile')
            })
            .catch((err) => {
                alert(err.message);
            })
            setUsername('');
            setEmail('');
            setPassword('');
        }
        
    }
    
    return(
        <div className='login-root'>
            <div className='login-header'>
                <h1>{maintitle}</h1>
            </div>
            <br />
            <div className='login-form'>
            {!signedup && <Input label='Username' type='text' value={username} onChange={usernameChangeHandler} />}
                 <Input label='E-Mail' type='text' value={email} onChange={emailChangeHandler}/>
                <Input label='Password' type='password' value={password} onChange={passChangeHandler}/>
                <Button title={buttontitle} onClick={buttonClickHandler}/>
                <h5 onClick={signedupClickHandler}>{changetitle}</h5>
            </div>
        </div>
    )
}

export default Login;