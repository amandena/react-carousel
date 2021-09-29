import { Carousel } from '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect } from 'react'
import problems from '../assets/99problems.jpeg'
import britney from '../assets/britney.jpeg'
import nobodyAsked from '../assets/nobodyAsked.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const TheOfficeCarousel = () => {

  useEffect(() => {
    let myCarousel = document.querySelector('#theOfficeCarousel')
    new Carousel(myCarousel, {
      interval: 5000,
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
        <button class="carousel-control-prev" type="button" data-bs-target="#theOfficeCarousel" data-bs-slide="prev">
          <i class="fas fa-arrow-alt-circle-left">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{height: '50px', width: 'auto'}}/>
          </i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#theOfficeCarousel" data-bs-slide="next">
          <i class="fas fa-arrow-alt-circle-right">
            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{height: '50px', width: 'auto'}}/>
          </i>
          <span class="visually-hidden">Next</span>
        </button>
        <ol class="carousel-indicators">
          {/* <button type="button" data-bs-target="#theOfficeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#theOfficeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#theOfficeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
          [...Array(3)].map((item, i) => {
            return <li key={i} className={`bg-secondary ${i === 0 ? 'active' : ''}`} data-bs-target="#theOfficeCarousel" data-bs-slide-to={i} aria-current={`${i === 0 ? true : false}`} aria-label={`Slide ${i}`}></li>
          })
        </ol>
      </div>
    </div>
  )
}

export default TheOfficeCarousel