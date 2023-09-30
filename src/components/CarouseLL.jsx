import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import "./carousell.css";

export const CarouseLL = () => {

    const [scrollPosition, setScrollPosition] = useState(0)
    const slideshowRef = useRef()
  
    useEffect(() => {
        slideshowRef.current?.children[0].classList.add('active')
    }, [])
  
    const handleRight = () => {
        const activeElement = slideshowRef.current?.querySelector('.active')
        if (activeElement?.nextElementSibling) {
            activeElement.classList.remove('active')
            activeElement.nextElementSibling.classList.add('active')
            setScrollPosition(scrollPosition - activeElement.offsetWidth)
        }
    }
    const handleLeft = () => {
        const activeElement = slideshowRef.current?.querySelector('.active')
        if (activeElement?.previousElementSibling) {
            activeElement.classList.remove('active')
            activeElement.previousElementSibling.classList.add('active')
            setScrollPosition(scrollPosition + activeElement.offsetWidth)
        }
    }
  return (
    <div className="slideshow-container">
    <BsChevronCompactLeft className='left-arrow' onClick={handleLeft} />
    <BsChevronCompactRight className='right-arrow' onClick={handleRight} />
    
    <div className="slideshow" style={{ transform: `translateX(${scrollPosition}px)` }} ref={slideshowRef}>
        <div className="carousel-container">
            <img className="carousel-image" src="https://donga.edu.vn/Portals/0/High-tech%20Agriculture.jpg" alt="" />
        </div>
        <div className="carousel-container">
          <img className="carousel-image" src="https://media.licdn.com/dms/image/D4E12AQEWekS8SXyduQ/article-cover_image-shrink_720_1280/0/1689244947952?e=2147483647&v=beta&t=Pxd9AsC2iivLlKPh2IBENasDvkVMSzWQngGz9JwUNes" alt=""/>
        </div>
        <div className="carousel-container">
          <img className="carousel-image" src="https://media.licdn.com/dms/image/D4E12AQE04IJCXZYt8Q/article-cover_image-shrink_720_1280/0/1688725404294?e=2147483647&v=beta&t=Uj2h0jsSEK63pSRwr1qHD_oWi5P0kmGP-16Hkm0p4C4" alt="" />
        </div>
        <div className="carousel-container">
          <img className="carousel-image" src="https://media.licdn.com/dms/image/C4D12AQF6zA68YG7eaw/article-cover_image-shrink_600_2000/0/1651144383000?e=2147483647&v=beta&t=E8weY8aCC60a8D7wY867B2UzLQoMcimZwNk7-jUI1FM" alt="" />
        </div>
        <div className="carousel-container">
          <img className="carousel-image" src="https://www.undp.org/sites/g/files/zskgke326/files/migration/sgtechcentre/Sustainable-Digital-Agri-thumbnail.JPG" alt="" />
        </div>
      
      </div>
</div>
  )
}

export default CarouseLL
