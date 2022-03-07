import React from "react";


const NewList = (props) => {
    return (
        <div>
            <ul>
                {props.list.map((news) => (
                    <li key={news.Math.random().toString()}>
                        {news.title}
                        <br/>
                        {news.content}
                    </li>
                ))}
            </ul>           
        </div>
    );
}
export default NewList;

