import useResultService from "../../services/resultService";

export async function StatisticsLoader() {

    const {getCoursesProgress} = useResultService();

    let user_courses_progress = await getCoursesProgress().then(data => data.user_courses_progress)
        .catch(res => console.log(res));

    return {user_courses_progress};
}