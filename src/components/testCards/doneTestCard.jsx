
const DoneTestCard = ({test}) => {
    const {course_name, test_name, correct_answers, questions_count} = test;
    return (
        <div
            className="flex flex-col justify-between w-1/4 min-w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{test_name}</h5>
            <p className="mb-3 font-normal text-gray-700">Тест курса <span className={'font-bold'}>"{course_name}"</span></p>
            <div
               className="flex justify-center border border-gray-200 rounded-lg shadow items-baseline text-xl gap-x-1">
                Вы набрали <span className={'font-bold text-2xl text-primary-800'}>{correct_answers}</span> из <span className={'font-bold text-2xl text-primary-800'}>{questions_count}</span> баллов.
            </div>
        </div>
    )
}


export default DoneTestCard;