import './tableHeader.style.css'

const TableHeader = () => {
    return(
        <div className='table-header'>
            <label className='ms-3' style={{ backgroundColor:"rgb(252, 165, 165)"}}>انجام نشده</label>
            <label className='ms-3' style={{ backgroundColor: "rgb(246, 239, 144)" }}>در حال انجام</label>
            <label className='ms-3' style={{ backgroundColor: "rgb(250, 181, 91)" }}>چالشی</label>
            <label className='' style={{ backgroundColor: "rgb(174, 246, 114)" }}>انجام شده</label>
        </div>
    );
}

export default TableHeader;