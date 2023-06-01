import {Link, useLocation, useNavigate} from "react-router-dom";
import {Avatar, Dropdown, Navbar} from "flowbite-react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../../store/users/selectors";
import useAuthService from "../../services/authService";
import {setCurrentUser} from "../../store/users/slice";

import logo from "../../resourses/logo.png";

const AppHeader = () => {
    const dispatch = useDispatch();
    const user = useSelector(getCurrentUser);

    const navigate = useNavigate();

    const {logOut} = useAuthService();

    const logOutClick = async () => {
        await logOut()
            .then(res => dispatch(setCurrentUser(null))).then(()=>navigate('/login'))
            .catch(res => console.log(res));
    }

    return (
        <header className={'h-max border-b'}>
            <Navbar fluid={true} rounded={true}>
                <Link to="/">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                </Link>

                {user ? <>
                    <div className="flex md:order-2">

                        <Dropdown arrowIcon={true} inline={true} label={<span className="self-center text-primary-800">{user? user.name + ' ' + user.last_name : ''}</span>}>
                            <Dropdown.Item>
                                <Link to={'/profile'}>
                                    Личный кабинет
                                </Link>
                            </Dropdown.Item>

                            <Dropdown.Item>
                                <Link to={'/profile/statistics'}>
                                    Статистика
                                </Link>
                            </Dropdown.Item>

                            <Dropdown.Divider/>

                            {
                                user?
                                    <Dropdown.Item onClick={logOutClick}>
                                        Sign out
                                    </Dropdown.Item>
                                    : null
                            }

                        </Dropdown>

                        <Navbar.Toggle/>

                    </div>

                    <Navbar.Collapse>
                        <Link to={'/'}>
                            Главная
                        </Link>
                        {/*<Link to={'/login'}>*/}
                        {/*    Логин*/}
                        {/*</Link>*/}
                        <Link to={'/courses'}>
                            Курсы
                        </Link>
                        <Link to={'/tests'}>
                            Тесты
                        </Link>
                        {
                            user.group.name === 'Администратор' ||
                            user.group.name === 'Модератор' ||
                            user.group.name === 'Супер администратор' ?
                                <Link to={'/statistics'}>
                                    Статистика
                                </Link> : null
                        }

                        <Link to={'/test2'}>
                            Тест2
                        </Link>
                        {/*<Link to={'/test3'}>*/}
                        {/*    Тест3*/}
                        {/*</Link>*/}
                        {/*<Link to={'/lalalalalal'}>*/}
                        {/*    Страница ошибки*/}
                        {/*</Link>*/}
                    </Navbar.Collapse>
                </> : null}

            </Navbar>
        </header>
    );
}

export default AppHeader;
