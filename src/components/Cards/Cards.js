import React from 'react';
import './cards.less';
function Cards(props){
    console.log(props.data);
    const hasBorder = '';//add-border
    const ListData = JSON.parse(props.data);
    const ListItem = ListData.map((data,index)=>
    <li onClick={cardClick} key={data.id} data-index={index}>
        <div className="box">
            <nav>
                <div className={"advertse-label"  +  " " + hasBorder} >
                    {data.label}
                </div>
                <span>{data.author}·{data.time}</span>
            </nav>
            <p>{data.title}</p>
            <div className="icon-wrap">
                <div>
                    <p>
                        <i className="fa fa-thumbs-o-up fa-lg"></i>
                        <span>{data.zan}</span>
                    </p>
                </div>
                <div>
                    <p>
                        <i className="fa fa-thumbs-o-down fa-lg"></i>
                        <span>{data.noZan}</span>
                    </p>
                </div>
            </div>
        </div>
    </li>
    );
    function cardClick(ev){
        ev.preventDefault();
        const index= ev.currentTarget.dataset.index;
        console.log(ev,index);
    }
    return (
                <ul className="card-list">
                   {ListItem}
                </ul>
    )
}
export default Cards