import { Carousel } from '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect } from 'react'
import problems from '../assets/99problems.jpeg'
import britney from '../assets/britney.jpeg'
import nobodyAsked from '../assets/nobodyAsked.jpeg'
import dead from '../assets/dead.jpeg'
import anxiety from '../assets/anxiety.jpeg'
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
            <img src={problems} className="officeImage d-block w-100" alt="99 problems"/>
          </div>
          <div className="carousel-item">
            <img src={britney} className="officeImage d-block w-100" alt="It's Britney, b*tch"/>
          </div>
          <div className="carousel-item">
            <img src={nobodyAsked} className="officeImage d-block w-100" alt="nobody asked"/>
          </div>
          <div className="carousel-item">
            <img src={dead} className="officeImage d-block w-100" alt="dead inside"/>
          </div>
          <div className="carousel-item">
            <img src={anxiety} className="officeImage d-block w-100" alt="anxiety"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#theOfficeCarousel" data-bs-slide="prev">
          <i className="fas fa-arrow-alt-circle-left">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{height: '50px', width: 'auto'}}/>
          </i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#theOfficeCarousel" data-bs-slide="next">
          <i className="fas fa-arrow-alt-circle-right">
            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{height: '50px', width: 'auto'}}/>
          </i>
          <span className="visually-hidden">Next</span>
        </button>
        <ul className="carousel-indicators">
          {[...Array(5)].map((item, i) => {
            return <li key={`${item}-${i}`} className={`bg-secondary ${i === 0 ? 'active' : ''}`} data-bs-target="#theOfficeCarousel" data-bs-slide-to={i} aria-current='true' aria-label={`Slide ${i}`}></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TheOfficeCarousel