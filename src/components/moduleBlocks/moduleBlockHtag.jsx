const BlockHtag = ({htag}) => {

    let HContent = getHContent();

    function getHContent() {
        switch (htag.type) {
            case 'h1':
                return <h1 className={'text-4xl'}>{htag.value}</h1>;
            case 'h2':
                return <h2 className={'text-3xl'}>{htag.value}</h2>;
            case 'h3':
                return <h3 className={'text-2xl'}>{htag.value}</h3>;
            case 'h4':
                return <h4 className={'text-xl'}>{htag.value}</h4>;
            case 'h5':
                return <h5 className={'text-lg'}>{htag.value}</h5>;
        }
    }

    return (
        <>{HContent}</>
    )
}


export default BlockHtag;
