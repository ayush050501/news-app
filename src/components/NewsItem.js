import React from 'react'

const NewsItem =(props)=> {
    let {title, description,imageurl,newsurl,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{height: "550px"}}>
            <div>
              <span className="badge rounded-pill bg-danger" style={{display:"flex",justifyContent:'flex-end',position:'absolute',right:'0'}}>
                  {source}
                </span> 
            </div>
            <img src={imageurl?imageurl:"https://www.deccanherald.com/sites/dh/files/Pict%201100-1229108-1687165822.jpg"} className="card-img-top" alt="..." style={{height: "230px"}}/>
            <div className="card-body " >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description + "..."}</p>
                <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                <p className="card-text my-2"><small className="text-body-secondary">{new Date(date).toGMTString().slice(4,16)}</small></p>
            </div>
            </div>
      </div>
    )
}

export default NewsItem
