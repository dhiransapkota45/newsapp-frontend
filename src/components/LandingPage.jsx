import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import NewsCard from './NewsCard'
// import sampledata from "../sampledata.json"

const LandingPage = () => {
    
    const [loader, setLoader] = useState(false)
    const categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
    const [category, setCategory] = useState("business")
    const [news, setNews] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchNews = async () => {
            if (localStorage.getItem("username")) {
                setLoader(true)
                const responseRaw = await fetch(`${process.env.REACT_APP_NEWSAPI}&category=${category}`)
                const response = await responseRaw.json()
                console.log(response);
                setLoader(false)
                setNews(response.articles)
                // setNews(sampledata.articles)
            }
            else {
                navigate("/login")
            }

        }
        fetchNews()
    }, [category])

    const onclickHandler = (e) => {
        setCategory(e.target.value)
    }
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "12px" }}>
                {
                    categories.map((category, index) => {
                        return <button key={index} value={category} onClick={onclickHandler}>{category}</button>
                    })
                }
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "40px" }}>
                {loader ? <h4>Loading...</h4> :

                    news.map((news, index) => {
                        return <NewsCard key={index} news={news} />
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage