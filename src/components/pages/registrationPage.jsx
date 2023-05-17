import {useState} from "react";
import {setCurrentUser} from "../../store/users/slice";
import {useDispatch} from "react-redux";

import {Button} from "flowbite-react";

import InputAuth from "../inputs/inputAuth";
import useAuthService from "../../services/authService";
import {useLocation, useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');

    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();
    // const location = useLocation();
    const fromPage = '/';

    const dispatch = useDispatch();

    const {registration} = useAuthService();


    const registrationClick = async (e) => {
        e.preventDefault();

        let dealid = (new URL(document.location)).searchParams.get("dealid");

        let data = {
            login,
            name,
            last_name,
            email,
            password,
            confirm_password
        };

        if(dealid){
            data['dealid'] = dealid
        }

        await registration(data)
            .then(res => dispatch(setCurrentUser(res.user?res.user:null)))
            .then(()=>navigate(fromPage, {replace: true}))
            .catch(res => {
                setError(res.replace('<br>', ' '))
                setIsError(true)
            });
    }

    return (
        <>
            <div className="flex w-full h-screen justify-center items-center ">
                <div className="w-[500px]  p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 relative">

                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Регистрация
                        </h3>
                    </div>

                    <form className='flex flex-col' onSubmit={registrationClick}>
                        <div className="flex flex-col gap-4 mb-4 sm:grid-cols-2">
                            <InputAuth inputLabel={'Логин'} inputName={'login'} inputType={'text'}
                                       value={login}
                                       onChange={e => setLogin(e.target.value)}/>
                            <InputAuth inputLabel={'Имя'} inputName={'name'} inputType={'text'}
                                       value={name}
                                       onChange={e => setName(e.target.value)}/>
                            <InputAuth inputLabel={'Фамилия'} inputName={'last_name'} inputType={'text'}
                                       value={last_name}
                                       onChange={e => setLast_name(e.target.value)}/>
                            <InputAuth inputLabel={'Почта'} inputName={'email'} inputType={'text'}
                                       value={email}
                                       onChange={e => setEmail(e.target.value)}/>
                            <InputAuth inputLabel={'Пароль'} inputName={'password'} inputType={'password'}
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}/>
                            <InputAuth inputLabel={'Подтверждение пароля'} inputName={'confirm_password'} inputType={'password'}
                                       value={confirm_password}
                                       onChange={e => setConfirm_password(e.target.value)}/>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="submit"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Зарегистрироваться
                            </button>
                        </div>
                    </form>

                    <div
                        className={isError?"p-4 mt-8 text-sm text-red-800 rounded-lg bg-red-50" : 'hidden'}
                        role="alert">
                        <span className="font-medium">Ошибка!</span> {error}
                    </div>
                </div>
            </div>
        </>
    )
}


export default RegistrationPage;