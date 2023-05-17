import useResultService from "../../services/resultService";

export async function StatisticsCoursesLoader() {

    const {getStatisticsCourses} = useResultService();

    let courses_progress = await getStatisticsCourses().then(data => data.courses_progress)
        .catch(res => console.log(res));

    return {courses_progress};
}