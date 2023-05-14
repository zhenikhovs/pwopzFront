import BlockImage from "./moduleBlockImage";
import BlockHtag from "./moduleBlockHtag";
import BlockText from "./moduleBlockText";
import BlockVideo from "./moduleBlockVideo";
import BlockButtonLink from "./moduleBlockButtonLink";
import BlockButtonList from "./moduleBlockList";

export default function getBlockContent(block){
    switch (block.name){
        case "htag":
            return <BlockHtag htag={block}/>;
        case "text":
            return <BlockText text={block}/>;
        case "image":
            return <BlockImage img={block}/>;
        case "video":
            return <BlockVideo video={block}/>;
        case "button_link":
            return <BlockButtonLink buttonLink={block}/>;
        case "lists":
            return <BlockButtonList list={block}/>;
        default:
            return <div className={'m-[0 auto] justify-center w-max h-max bg-[#dadada80]'}>Контент блока не может быть отображён &#128546;</div>
    }
}