import { Carousel } from '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect } from 'react'
import problems from '../assets/99problems.jpeg'
import britney from '../assets/britney.jpeg'
import nobodyAsked from '../assets/nobodyAsked.jpeg'

const TheOfficeCarousel = () => {

  useEffect(() => {
    let myCarousel = document.querySelector('#theOfficeCarousel')
    new Carousel(myCarousel, {
      interval: 1000,
      wrap: true
    })
  }, [])

  return (
    <div className='container'>
      <div id="theOfficeCarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={problems} className="d-block w-100" alt="99 problems"/>
          </div>
          <div className="carousel-item">
            <img src={britney} className="d-block w-100" alt="It's Britney, b*tch"/>
          </div>
          <div className="carousel-item">
            <img src={nobodyAsked} className="d-block w-100" alt="nobody asked"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheOfficeCarousel