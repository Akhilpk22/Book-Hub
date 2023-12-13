import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';


function Footer() {
  return (
    <>
        <div style={{width:'100%',height:'500px',backgroundColor:("black"),filter: 'brightness(0.6)'}} className='d-flex flex-column justify-content-center align-items-center text-white  rounded-top  '>
        <div className=" border-0 footer-div d-flex justify-content-evenly  w-100 flex-wrap border border-white  ">
          <div className="website" style={{width:'400px'}}>
            <h4 style={{color:'white'}}>{' '}
            Book-hub</h4>
            <h6>Discover the world of literature with [<Link to={'/'}><span className='text-info'>Book-hub</span></Link>]. We are passionate about bringing you a curated collection of books that inspire and captivate. Our dedicated team, along with the invaluable contributions from our community of readers, has crafted a unique space for book enthusiasts.</h6>
            <h6 className='mt-3'>Ak@gmail.com</h6>
            <p className='text-secondary'>Currently v1.0.0.</p>
          </div>
          <div className="links d-flex flex-column">
            <h4 style={{color:'white'}}>Explore</h4>
            <Link to={'/'} style={{textDecoration:'none'}}>About as</Link>
            <Link to={'/'} style={{textDecoration:'none'}}>Sitemap</Link>
            <Link to={'/'} style={{textDecoration:'none'}}>Bookmarks</Link>
            <Link to={'/'} style={{textDecoration:'none'}}>Sign in/Join</Link>
          </div>
          <div className="links d-flex flex-column">
            <h4 style={{color:'white'}}>
              Customer Service
            </h4>
            <Link to={'/'} style={{textDecoration:'none'}}>
              help Center
            </Link>
            <Link to={'/'} style={{textDecoration:'none'}}>
              Returns
            </Link>
            <Link to={'/'} style={{textDecoration:'none'}}>
              Accessibility
            </Link>
            <Link to={'/'} style={{textDecoration:'none'}}>
             Contact Us
            </Link>
            <Link to={'/'} style={{textDecoration:'none'}}>
              Store Pickup
            </Link>
          </div>
          <div className="guides d-flex flex-column">
          <h4 style={{  color:'white'}}>
            Categories
          </h4>
            <Link to={''} style={{textDecoration:'none'}}>
              Actions
            </Link>
            <Link to={''} style={{textDecoration:'none'}}>Comedy</Link>
            <Link to={''} style={{textDecoration:'none'}}>Drama</Link>
          </div>
          <div className="contact">
            <h4 style={{color:'white'}} className='text-center'>Contact Us</h4>
            
            <div className="icons fs-4 d-flex justify-content-evenly  mt-5  ">
            <Link to={'https://mail.google.com/'}  className='ms-3' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-envelope"></i></Link>
            <Link to={'https://www.twitter.com/'} className='ms-4' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></Link>
            <Link to={'https://www.linkedin.com/'}className='ms-4' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://www.instagram.com/'}className='ms-4' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
            <Link to={'https://www.github.com/'}className='ms-4' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></Link>
            <Link to={'https://www.facebook.com/'}className='ms-4' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></Link>
    
            </div>
          </div>
        </div>
        <p className=''>Copyright © 2023 Book-hub. Built with React.</p>
      </div>
    </>
  )
}

export default Footer