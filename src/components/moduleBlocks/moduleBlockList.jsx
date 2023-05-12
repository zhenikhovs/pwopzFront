import './moduleBlockList.scss';


const BlockButtonList = ({list}) => {
    let listContent;

    switch (list.settings.type){
        case 'ul':
            listContent = <ul>{renderUl(list)}</ul> ;
            break;
        case 'ol':
            listContent = <ol>{renderOl(list)}</ol> ;
            break;
    }


    function renderUl(listLevel){
        return listLevel.elements.map(element =>{
            let content;
            if (element.elements.length >0){
                content = <ul className={'space-y-1 pl-5'}>{renderUl(element)}</ul>;
            }
            return <li>{element.text}{content}</li>;

        })
    }

    function renderOl(listLevel){
        return listLevel.elements.map(element =>{
            let content;
            if (element.elements.length >0){
                content = <ol className={'space-y-1 pl-5'}>{renderOl(element)}</ol>;
            }
            return <li>{element.text}{content}</li>;

        })
    }


    return (
        <div className={'block_link_content'}>
            {listContent}
        </div>
    )
}


export default BlockButtonList;