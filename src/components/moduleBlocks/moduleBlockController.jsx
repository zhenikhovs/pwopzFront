import BlockImage from "./moduleBlockImage";
import BlockHtag from "./moduleBlockHtag";
import BlockText from "./moduleBlockText";
import BlockVideo from "./moduleBlockVideo";

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
    }
}