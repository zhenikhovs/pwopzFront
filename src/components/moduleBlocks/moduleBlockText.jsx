const BlockText = ({text}) => {

    function createMarkup() {
        return {__html: text.value};
    };

    return (
        <div className={'block_text_content'} dangerouslySetInnerHTML={createMarkup()}>
        </div>
    )
}


export default BlockText;