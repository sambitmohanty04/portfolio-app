import React from 'react'
import './portfolio.css'
import portimg1 from '../../assets/images/adamsea.png'
import portimg2 from '../../assets/images/probiotic.png'
import portimg3 from '../../assets/images/flowerhorn.png'
import portimg4 from '../../assets/images/ecomm.png'
import portimg5 from '../../assets/images/tourinrome.png'

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio-wrapper">
        <div className="container">
          <h5 className='text-center my-5'>Projects</h5>
          <div className="row">
            <div class="col-lg-3 col-md-6 content">
              <div class="screen">
                <img src={portimg1} alt='portImg' />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 content">
              <div class="screen">
                <img src={portimg2} alt='portImg' />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 content">
              <div class="screen">
                <img src={portimg3} alt='portImg' />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 content">
              <div class="screen">
                <img src={portimg4} alt='portImg' />
              </div>
            </div>
            <div class="col-lg-3 col-md-6 content">
              <div class="screen">
                <img src={portimg5} alt='portImg' />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Portfolio