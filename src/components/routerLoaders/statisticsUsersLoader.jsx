import useResultService from "../../services/resultService";

export async function StatisticsUsersLoader() {

    const {getStatisticsUsers} = useResultService();

    let users_progress = await getStatisticsUsers()
        .catch(res => console.log(res));

    return {users_progress};
}