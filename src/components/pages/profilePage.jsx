import {setCurrentUser} from "../../store/users/slice";
import {useDispatch, useSelector} from "react-redux";

import {Button} from "flowbite-react";

import useAuthService from "../../services/AuthService";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {getCurrentUser} from "../../store/users/selectors";
import {useState} from "react";
import useUserService from "../../services/UserService";

const ProfilePage = () => {
    const user = useSelector(getCurrentUser);
    const dispatch = useDispatch();


    const [edited, setEdited] = useState(false);
    const [passwordEdited, setPasswordEdited] = useState(false);

    const [name, setName] = useState(user.name);
    const [last_name, setLastName] = useState(user.last_name);
    const [login, setLogin] = useState(user.login);
    const [email, setEmail] = useState(user.email);

    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');

    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);

    const [isSuccess, setIsSuccess] = useState(false);


    const {updateUser, updateUserPassword} = useUserService();

    const updateUserClick = async (e) => {
        e.preventDefault();

        const data = {
            user_id: user.id,
            name,
            last_name,
            login,
            email
        }
        await updateUser(data)
            .then(res => dispatch(setCurrentUser(res.user?res.user:null)))
            .then(res => setIsError(false))
            .then(res => {
                setIsSuccess(true);
                setTimeout(()=>setIsSuccess(false), 2000)
            })
            .then(res => setEdited(false))
            .catch(res => {
                setError(res.replace('<br>', ' '))
                setIsError(true)
            })
    }

    const updateUserPasswordClick = async (e) => {
        e.preventDefault();

        const data = {
            user_id: user.id,
            password,
            confirm_password
        }
        await updateUserPassword(data)
            .then(res => dispatch(setCurrentUser(res.user?res.user:null)))
            .then(res => setIsError(false))
            .then(res => {
                setIsSuccess(true);
                setTimeout(()=>setIsSuccess(false), 2000)
            })
            .then(res => setPasswordEdited(false))
            .then(res => {
                setPassword('');
                setConfirm_password('');
            })
            .catch(res => {
                setError(res.replace('<br>', ' '))
                setIsError(true)
            })
    }

    const cancelClick = () => {
        setEdited(false)
        setPasswordEdited(false)
        setIsError(false)
    }

    return (
       <div className={'flex flex-col w-max gap-y-8 w-[638px]'}>
           <div className={'font-bold text-2xl text-primary-800'}>
               {edited||passwordEdited? 'Изменение личных данных' : 'Личный кабинет'}
           </div>
           <hr/>
           <div className="flex gap-x-8 ">
               <div className="flex flex-col gap-y-8">
                   <form onSubmit={updateUserClick} className={passwordEdited ? "hidden" : "flex flex-col gap-y-8"}>
                       <div className={'grid grid-cols-[250px_250px] gap-8 text-gray-700'}>
                           <div className={'flex flex-col gap-y-2 items-baseline'}>
                               <div className={'font-semibold text-lg'}>
                                   Фамилия:
                               </div>
                               {
                                   edited? <input type="text" id="name"
                                                  className="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                  value={last_name} onChange={(e) => setLastName(e.target.value)} required/> :<span className={'h-[46px] p-[11px]'}>{user.last_name}</span>
                               }
                           </div>
                           <div className={'flex flex-col gap-y-2 items-baseline'}>
                               <div className={'font-semibold text-lg'}>
                                   Имя:
                               </div>
                               {
                                   edited? <input type="text" id="name"
                                                  className="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                  value={name} onChange={(e) => setName(e.target.value)} required/> :<span className={'h-[46px] p-[11px]'}>{user.name}</span>
                               }
                           </div>

                           <div className={'flex flex-col gap-y-2 items-baseline'}>
                               <div className={'font-semibold text-lg'}>
                                   Логин:
                               </div>
                               {
                                   edited? <input type="text" id="name"
                                                  className="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                  value={login} onChange={(e) => setLogin(e.target.value)} required/> :<span className={'h-[46px] p-[11px]'}> {user.login}</span>
                               }

                           </div>
                           <div className={'flex flex-col gap-y-2 items-baseline'}>
                               <div className={'font-semibold text-lg'}>
                                   Почта:
                               </div>
                               {
                                   edited? <input type="text" id="name"
                                                  className="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                  value={email} onChange={(e) => setEmail(e.target.value)}  required/> :<span className={'h-[46px] p-[11px]'}> {user.email}</span>
                               }
                           </div>


                       </div>
                       {
                           edited?
                               <div className="flex gap-x-8 w-full">
                                   <button type={'submit'}
                                           className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ">
                                       Сохранить изменения
                                   </button>
                                   <button onClick={cancelClick} type="button"
                                           className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                                       Отменить
                                   </button>
                               </div>
                               : null
                       }


                   </form>

                   <form onSubmit={updateUserPasswordClick} className={passwordEdited ? "flex flex-col gap-y-8" : "hidden"}>
                       <div className={'grid grid-cols-[532px] gap-8 text-gray-700'}>
                           <div className={'flex flex-col gap-y-2 items-baseline'}>
                               <div className={'font-semibold text-lg'}>
                                   Пароль:
                               </div>
                               <input type="password" id="password"
                                                  className="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                           </div>

                           <div className={'flex flex-col gap-y-2 items-baseline'}>
                               <div className={'font-semibold text-lg'}>
                                   Подтверждение пароля:
                               </div>
                               <input type="password" id="confirm_password"
                                      className="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                      value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)} required/>

                           </div>
                       </div>
                       <div className="flex gap-x-4 w-full">
                           <button type={'submit'}
                                   className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ">
                               Сохранить пароль
                           </button>
                           <button onClick={cancelClick} type="button"
                                   className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                               Отменить
                           </button>
                       </div>
                   </form>

                   {
                       edited||passwordEdited ? null :
                       <button onClick={()=> setPasswordEdited(true)} type="click"
                               className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                           Изменить пароль
                       </button>
                   }

                   <div
                       className={isError?"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" : 'hidden'}
                       role="alert">
                       <span className="font-medium">Ошибка!</span> {error}
                   </div>
                   <div
                       className={isSuccess?"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" :'hidden'}
                       role="alert">
                       <span className="font-medium">Успешно!</span>
                   </div>

               </div>

               {
                   edited||passwordEdited ? null :
                   <button onClick={()=> setEdited(true)} className="flex text-primary-700 hover:text-primary-800 hover:underline">
                       Изменить
                   </button>
               }
           </div>

       </div>

    )
}


export default ProfilePage;