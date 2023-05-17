import useResultService from "../../services/resultService";

export async function StatisticsLoader() {

    const {getUserCoursesProgress} = useResultService();

    let user_courses_progress = await getUserCoursesProgress().then(data => data.user_courses_progress)
        .catch(res => console.log(res));

    return {user_courses_progress};
}