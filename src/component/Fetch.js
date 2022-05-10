import { useEffect, useState } from "react"
import styles  from './Fetch.module.css';
function Fetch() {
    const [result,setResult] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setResult(data)
        })
    },[])
  return (
      <div className={styles.cont}>
          {result.map((res) => {
           return <div className={styles.c}> 

           <span>{res.id}</span>  
           <p>{res.title}</p>  
            <img src={res.thumbnailUrl} alt='фото' />

            </div>
          })}
      </div>
  )
}
export default Fetch