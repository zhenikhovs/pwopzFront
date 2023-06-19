const StatisticMainStatistics = () => {

    return (
        <div className={'flex flex-col w-full gap-y-8 '}>
            <div className={'flex flex-col gap-y-3'}>
                <div>
                    Страница <span className={'font-bold text-primary-800'}>"По курсам"</span> содержит:
                </div>
                <ul className={' flex flex-col ml-8'}>
                    <li className={'list-disc'}>
                        общую информацию о курсах, а именно количество модулей курса, количество групп
                        и обучающихся, средний процент прохождения курса и средний процент решения тестового задания
                    </li>
                    <li className={'list-disc'}>
                        детальную статистику по выбранному курсу, содержащую подробную информацию об изучении студентом курса (ФИО
                        студента, прохождение модулей выбранного курса, результат теста).
                    </li>
                </ul>
            </div>
            <div className={' flex flex-col gap-y-3'}>
                <div>
                    Страница <span className={'font-bold text-primary-800'}>"По пользователям"</span> содержит:
                </div>
                <ul className={' flex flex-col ml-8'}>
                    <li className={'list-disc'}>
                        общую информацию о пользователях, а именно количество курсов пользователя, средний процент
                        изучения курсов, средний процент прохождения тестов
                    </li>
                    <li className={'list-disc'}>
                        детальную статистику по выбранному пользователю, содержащую подробную информацию об изучении студентом
                        каждого курса (название курса, количество модулей в этом курсе, процент прохождения, результат
                        решения теста).
                    </li>
                </ul>
            </div>


            <div className={'flex flex-col gap-y-3'}>
                <div>
                    Страница <span className={'font-bold text-primary-800'}>"По группам"</span> содержит:
                </div>
                <ul className={' flex flex-col ml-8'}>
                    <li className={'list-disc'}>
                        общую информацию о группе, а именно название группы, количество обучающихся в группе, количество
                        назначенных группе курсов, средний процент изучения курсов, средний процент прохождения всеми
                        пользователями тестов
                    </li>
                    <li className={'list-disc'}>
                        детальные статистики по выбранной группе: статистика группы по курсам (название курса, количество модулей в этом курсе, средний процент прохождения студентами, средний результат
                        решений теста) и статистика группы по обучающимся (ФИО студента, средний процент изучения курсов, средний процент прохождения тестов)
                    </li>
                </ul>
            </div>


        </div>

    )
}


export default StatisticMainStatistics;