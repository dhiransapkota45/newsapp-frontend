import React from 'react'

const NewsCard = ({news}) => {
    const { title, description, url, urlToImage } = news;
    const defaultImage = "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    return (
        
            <div style={{borderRadius:"5px", width:"400px", boxShadow:"2px 0px 7px 0px gray", margin:"20px 30px", fontFamily:"sans-serif"}}>
                <img
                    src={urlToImage ? urlToImage : defaultImage}
                    style={{width:"100%"}}
                    alt={title}
                />
                <div style={{padding:"8px"}}>
                    <p style={{fontSize:"16px", fontWeight:"550", marginBottom:"6px"}}>{title ? title : "No title available"}</p>
                    <p style={{fontSize:"14px",fontFamily:"monospace", marginBottom:"6px"}}>
                        {description
                            ? description.slice(0, 50)
                            : "no description available"}
                        ...
                    </p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration:"none", fontFamily:"cursive",  float:"right"}}
                    >
                        read more
                    </a>
                </div>
            </div>
       
    )
}

export default NewsCard