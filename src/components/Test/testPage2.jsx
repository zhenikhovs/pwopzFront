import { Modal } from 'flowbite'


const TestPage2 = () => {

    const register = async () => {
        const login = document.querySelector("input[name='login']").value;
        let data = {
            "login" : login,
            "name" : "testik",
            "lastname" : "testik",
            "password" : "testik",
            "confirm_password" : "testik",
            "email" : "testik@mail.ru",
            "group" : "5"
        };

        let res = await fetch( 'http://pwopz.devaid.ru/api/Auth.Registration', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(json => console.log(json));
    }

    const login = async () => {
        let data = {
            "login" : "testik26",
            "password" : "testik",
            "remember" : "Y"
        };

        let res = await fetch('http://pwopz.devaid.ru/api/Auth.Login', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(json => console.log(json));
    }

    const logout = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Auth.Logout', {
            method: 'POST',
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(json => console.log(json));
    }


    const info = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Auth.GetUser', {
            method: 'POST'
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(json => console.log(json));
    }

    return (
        <div className="App">
            <input name="login" type="text"/>
            <button onClick={register}>Регистрация</button>
            <button onClick={login}>Логин</button>
            <button onClick={info}>Инфо</button>
            <button onClick={logout}>Выйти</button>
        </div>
    );
}

export default TestPage2;
