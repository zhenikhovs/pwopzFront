import useResultService from "../../services/resultService";

export async function StatisticsGroupsLoader() {

    const {getStatisticsGroups} = useResultService();

    let groups_progress = await getStatisticsGroups().then(data => data.groups_progress)
        .catch(res => console.log(res));

    return {groups_progress};
}