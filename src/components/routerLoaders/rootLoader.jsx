import useUserService from "../../services/userService";
import {setCurrentUser} from "../../store/users/slice";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../../store/users/selectors";

export async function RootLoader() {
    const {getUser} = useUserService();

    let user = await getUser().then(res => res.user? res.user : null)
        .catch(res => console.log(res));

    // const userForLocal = {
    //     name: 'Костыль',
    //     last_name: 'Костылев',
    //     login: 'kostil',
    //     email: 'kostilev@mail.ru'};
    // user = user? user : userForLocal;

    return {user};

}