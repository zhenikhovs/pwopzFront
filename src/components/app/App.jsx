import { Switch } from '@headlessui/react'
import {getCurrentUserRole} from "../../store/users/selectors";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../../store/users/slice";




function App() {
    // const userStatus = useSelector(getCurrentUserRole);
    const dispatch = useDispatch();

    const saveUser = () => {
        dispatch(setCurrentUser({'name': 'clown'}))
    }

    const logout = () => {
        dispatch(setCurrentUser(null))
    }

  return (
      <>
        <div className='mt-10 hello'>Hello<span>World</span></div>
        <button className={'border'} onClick={saveUser}>
            Click me
        </button>
          <button className={'border'} onClick={logout}>
            LogOut
        </button>
      </>


  );
}

export default App;
