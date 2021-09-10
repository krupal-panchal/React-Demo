import { useState } from 'react';

function LoginForm() {

    const [userInfo, setuserInfo] = useState(null);
    const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);
    const [noticemsg, setnoticemsg] = useState('none');
    const [noticeclass, setnoticeclass] = useState('');

    function getUserInfo(e) {
        e.preventDefault();
        
        setnoticemsg('none');

        let url = 'http://wpdemo.local/wp-json/wp/login';

        /* const data = { 
            username: username,
            password: password
        }; */

        fetch( url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            /* body: JSON.stringify(data) */
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then( response => response.json() )
        .then( userData => {
            console.log(userData);
            setuserInfo(userData);
            setnoticemsg('block');
            if (userData.status === 'success' ) {
                setnoticeclass('green');
            } else {
                setnoticeclass('red');
            }
        } )
        .catch( ( error ) => {
            console.log( error );
        });
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form method="get" onSubmit={getUserInfo}>
                <input type="text" placeholder="username" onChange={(event) => setusername(event.target.value)} />
                <input type="password" placeholder="password" onChange={(event) => setpassword(event.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <div className={`${noticeclass}`} style={{ display: `${noticemsg}` }}>
                <div dangerouslySetInnerHTML={{ __html: userInfo?.message }} />
            </div>
        </div>
    )
}

export default LoginForm;