import QuestionOneAnswer from "./questionOneAnswer";
import QuestionAnyAnswers from "./questionAnyAnswers";
import QuestionEnterSpace from "./questionEnterSpace";

export default function getQuestion(question, index){
    switch (question.answer_type){
        case "ONE_ANSWER":
            return <QuestionOneAnswer question={question} index={index}/>;
        case "ANY_ANSWERS":
            return <QuestionAnyAnswers question={question} index={index}/>;
        case "ENTER_SPACE":
            return <QuestionEnterSpace question={question} index={index}/>;
        default:
            return <div className={'m-[0 auto] justify-center w-max h-max bg-[#dadada80]'}>Контент блока не может быть отображён &#128546;</div>;
    }
}