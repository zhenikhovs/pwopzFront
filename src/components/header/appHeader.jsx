import {Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <header className={'flex gap-x-[10px]'}>
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'login'}>
                Логин
            </Link>
            <Link to={'test'}>
                Тест
            </Link>
        </header>
    );
}

export default AppHeader;
