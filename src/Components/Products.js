import React from 'react';



class Products extends React.Component {

  

  render() {


    return (
      <React.Fragment>
        <div className="flex container m9 mb10">

          <div className="album">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="" width="200" height="500" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="..." alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="..." alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="flex-col detndes m9">
              <div className="Details p5">


                <div className="container">
                  <div className="row">
                    <h4 className="fontb">Details</h4>
                  </div>
                  <div className="row">
                       <div></div>
                  </div>











                </div>
              </div>
              <hr/>
              
              <div className="description">
                  <h4 className="fontb">Description</h4>
                 <div></div>

              </div>





            </div>
          </div>






          <div className="album" >

            <div className="info">
              <div>
                <h2 className="color fontb">Rs 00,000,000</h2>
                <p>dummy data</p>
                <p className="cG">dummy data dummy data dummy data dummy data</p>
              </div>

              <div className="info-loc">
                <p className="s12">dummy data</p>
              </div>
            </div>

            <div className="info m9">
              <div>
                <p className="color s20 fontb">Seller description</p>
                <p>dummy data</p>
                <p className="cG">dummy data dummy data dummy data dummy data</p>

              </div>

              <div className="info-loc">
                <p className="s12">dummy data</p>
              </div>
            </div>


          </div>

        </div>
      </React.Fragment>
    )
  }
}





export default Products;

