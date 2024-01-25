import { useState} from 'react'
import data from '../data'
import img1 from '../img/img1.jpg'
import Wear from '../components/Wear'
import Answer from '../components/Answer'
import Footer from '../components/Footer'
import dogWear from '../dataDog'


const Home = () => {
   let [index, setIndex] = useState(0)
    const {tags} = data[index]

  
    const checkIndex= (index) => {
      if (index > data.length -1) {
        return 0
      } else {
        return index
      }
      }

        const nextIndex = () => {
          setIndex ( (index) => {
              const newIndex = index +1 
              return checkIndex(newIndex)
          })
          } 
    
         window.addEventListener ('click', nextIndex) 
        

       return <section className='header'>
        <img src={img1} alt='' />
        <h1 className='header-color'>Oblečeme nejen Vaše psí miláčky</h1>
        <p>{tags} </p>
        <div className='wear-dog'>
       
              {
                dogWear.map ((dataDog) => {
                  return <Wear 
                 wearTitle = {dataDog.title}
                  wearImage = {dataDog.image}
                  wearTags = {dataDog.tags}
                  wearPrice = {dataDog.price}
                  />
                })
              }
        </div>
        <div>
               <Answer />
               <Footer />
          </div>
        </section>
        
    }
export default Home
