import React from 'react'

export default function Banner() {
  return (
      <div className='news'>
              <marquee > <h5 className='news-line'>*** This  web portal has made for testing purspose only ***</h5></marquee>


<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9859884_png.webp" class="d-block w-100 " alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1080/https://tahmidurrahman.com/wp-content/uploads/2019/11/Tax-Lawyer-in-Bangladesh-1080x1071.jpg" class="mx-auto w-100 " alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src="https://technovista.com.bd/wp-content/uploads/2018/08/all-portfolio-mockup-11.jpg" class="d-block w-100" alt="..."/>
      

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




      </div>



    
  )
}

