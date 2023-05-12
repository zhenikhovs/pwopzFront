import './moduleBlockText.scss';

const BlockText = ({text}) => {

    return (
        <div className={'block_text_content flex flex-col gap-y-2'} dangerouslySetInnerHTML={{__html:
            text.value}}>
        </div>
    )
}


export default BlockText;