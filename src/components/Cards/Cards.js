import React from 'react';
function Cards(props){
    console.log(props.data)
    const ListData = JSON.parse(props.data);
    const List = ListData.map(data=>
    <li onClick="cardClick" key={data.toString()}>
        <nav>
            <div className="advertse-label">
                {data.label}
            </div>
            {data.author}·{data.time}
        </nav>
        {data.title}
    </li>
    );
    return (
                <ul className="card-list">
                    <List></List>
                </ul>
    )
}
export default Cards