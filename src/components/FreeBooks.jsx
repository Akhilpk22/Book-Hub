import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import './FreeBook.css'

function FreeBooks() {
  const [open, setOpen] = useState(false);

  const handleTap = () => {
    setOpen(!open);
  };

  return (
    <div className="mt-5">
      <div className="mb-5 d-flex justify-content-center align-items-center">
        <button className="border border-0" onClick={handleTap}>
          <h2>Get to Free Books</h2>
        </button>
      </div>

      <Collapse in={open}>
        <div style={{ height: "20vh" }}>
          <Carousel
            
            interval={950} // Set the interval to 1000 milliseconds (1 second)
          >
            {/* Add your carousel items here */}
            <Carousel.Item>
              {/* Content for the first carousel item */}
              <div style={{width:"100%"}} className="">
                <img
                  style={{
                   
                    width: "100%",
                   height:"800px"
                  }}
                  className="d-block w-100 img-fluid"
                  src="https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/v1662538106/Cyber%20Security/hacker-hoodie-csc_vbnkuc.jpg"
                  alt="Second slide"
                />
              </div>
              <Carousel.Caption>
                <h3>"Hacking: The Art of Exploitation</h3>
                <p>
                Hacking: The Art of Exploitation (ISBN 1-59327-007-0) is a book by Jon "Smibbs" Erickson[1] about computer security and network security.[2][3] It was published by No Starch Press in 2003, with a second edition in 2008. All of the examples in the book were developed, compiled, and tested on Gentoo Linux. The book also comes with a CD that contains a Linux environment with all the tools and examples used in the book.
                </p>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Hacking:_The_Art_of_Exploitation"><button className="freebook btn btn-light ">Lrean More</button></a>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* Content for the second carousel item */}
              <div style={{width:"100%"}} className="">
                <img
                  style={{
                   
                    width: "100%",
                   height:"800px"
                  }}
                  className="d-block w-100 img-fluid"
                  src="https://www.hdwallpapers.in/download/infinity_gauntlet_marvel_comics_supervillain_hd_thanos-1280x720.jpg"
                  alt="Second slide"
                />
              </div>
              <Carousel.Caption>
                <h3>Avengers: Infinity Gauntlet</h3>
                <p>The Infinity Gauntlet is an American comic book storyline published by Marvel Comics. In addition to an eponymous, six-issue limited series written by Jim Starlin and pencilled by George Pérez and Ron Lim, crossover chapters appeared in related comic books. Since its initial serialization from July to December 1991, the series has been reprinted in various formats and editions.</p>
                <a target="_blank" href="https://en.wikipedia.org/wiki/The_Infinity_Gauntlet"><button className="freebook btn btn-light ">Lrean More</button></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* Content for the second carousel item */}
              <div style={{width:"100%"}} className="">
                <img
                  style={{
                   
                    width: "100%",
                   height:"800px"
                  }}
                  className="d-block w-100 img-fluid"
                  src="https://c4.wallpaperflare.com/wallpaper/716/171/769/movie-the-da-vinci-code-audrey-tautou-tom-hanks-wallpaper-preview.jpg"
                  alt="Second slide"
                />
              </div>
              <Carousel.Caption>
                <h1>the Da Vinci Code </h1>
                <p>The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.</p>
                <a target="_blank" href="https://en.wikipedia.org/wiki/A_People%27s_History_of_the_United_States"><button className="freebook btn btn-light ">Lrean More</button></a>
              </Carousel.Caption>
            </Carousel.Item><Carousel.Item>
              {/* Content for the second carousel item */}
              <div style={{width:"100%"}} className="">
                <img
                  style={{
                   
                    width: "100%",
                   height:"800px"
                  }}
                  className="d-block img-fluid"
                  src="https://cdn.wallpapersafari.com/49/91/GxKUFf.jpg"
                  alt="Second slide"
                />
              </div>
              <Carousel.Caption>
                <h1>Dracula</h1>
                <p>Dracula is a novel by Bram Stoker, published in 1897. An epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist and opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian nobleman, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby. A small group, led by Abraham Van Helsing, investigate, hunt and kill Dracula</p>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Dracula"><button className="freebook btn btn-light ">Lrean More</button></a>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more Carousel.Items as needed */}
          </Carousel>
        </div>
      </Collapse>
    </div>
  );
}

export default FreeBooks;
