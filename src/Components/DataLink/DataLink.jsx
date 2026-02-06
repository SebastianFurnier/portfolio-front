import "./DataLink.css"

function DataLink({title, onClickHandler}) {
    return (
        <span className="link-to-data" onClick={onClickHandler}>
            {title}
        </span>
    )
}

export default DataLink;