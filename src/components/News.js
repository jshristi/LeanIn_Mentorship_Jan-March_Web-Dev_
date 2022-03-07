
import {useState} from "react";
import Axios from "axios";
import classes from "../UI/News.module.css";
// import NewList from './New   List';


function News() {

    const [news, setNews]= useState('');
    const [category, setCategory] = useState('');

    const getNews = () => {
        Axios.get('https://inshortsapi.vercel.app/news?category=' + category).then((response) => {
            //taking only first data from the api.
            console.log(response.data.data[0]);
            //console.log(typeof(response.data.data[0]));
            setNews(response.data.data[0])
            console.log(news);
            // console.log(typeof(news));
        });
    };

    const setCategoryHandler = categoryName => {
        console.log(categoryName);
        setCategory(categoryName);
    }

    return (
        <div className={classes.card}>
            <hr/>
            <div className={classes.catBtn} >
                <button onClick={() => setCategoryHandler ('all')}>All</button>
                <button onClick={() => setCategoryHandler ('national')}>National</button>
                <button onClick={() => setCategoryHandler ('business')}>Business</button>
                <button onClick={() => setCategoryHandler ('sports')}>Sports</button>
                <button onClick={() => setCategoryHandler ('world')}>World</button>
                <button onClick={() => setCategoryHandler ('politics')}>Politics</button>
                <button onClick={() => setCategoryHandler ('startup')}>Startups</button>
                <button onClick={() => setCategoryHandler ('entertainment')}>Entertainment</button>
                <button onClick={() => setCategoryHandler ('miscellaneous')}>Miscellaneous</button>
                <button onClick={() => setCategoryHandler ('science')}>Science</button>
                <button onClick={() => setCategoryHandler ('technology')}>Technology</button>
                {/* <button onClick={() => setCategoryHandler ('hatke')}>?</button> */}
            </div>
            <div className={classes.getBtn}>
                <button onClick={getNews}>Get News</button>
            </div>
            <div className={classes.newsMaterial}>
            {/* <NewList list={news}/> */}
                <h1>{news.title}</h1>
                <div>
                   {news.date}
                </div>
                <div className={classes.picture}>
                     <img src={news.imageUrl} alt=''/>
                </div>
                <div>
                    {news.time}
                </div>
                <h2>{news.content}</h2>
                <a href={news.readMoreUrl} target="_blank" rel="noreferrer">Read More</a>
            </div>
        </div>
    )
};

export default News;



