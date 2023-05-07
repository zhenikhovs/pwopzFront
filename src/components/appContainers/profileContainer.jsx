import { Menu } from 'primereact/menu';
import {Link, Outlet} from "react-router-dom";

const ProfileContainer = () => {

    const menuItems = [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'}
    ]
    return(
        <div className={'flex gap-x-8'}>
            <aside
                   className="w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">

                <div
                    className="mt-[64px] w-full text-gray-900 bg-white border border-gray-200 rounded-lg">
                    <Link to={'/profile'}
                            className="text-gray-500 relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                        <svg aria-hidden="true"
                             className="w-6 h-6"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span className="ml-3">Личный кабинет</span>
                    </Link>
                    <Link to={'statistics'}
                           className="text-gray-500 relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                        <svg aria-hidden="true"
                             className="w-6 h-6"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span className="ml-3">Статистика</span>
                    </Link>
                   </div>


            </aside>

            <Outlet/>
        </div>

    );
}

export default ProfileContainer;