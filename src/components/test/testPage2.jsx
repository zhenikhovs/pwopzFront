import {Accordion, AccordionTab} from "primereact/accordion";
import {Link} from "react-router-dom";


const TestPage2 = () => {

    return (
        <div className="test">
            <video className={'h-[50vh]'}
                   controls
            >
                <source src={'https://youtu.be/GNrdg3PzpJQ'} />
            </video>
        </div>

    );
}

export default TestPage2;
