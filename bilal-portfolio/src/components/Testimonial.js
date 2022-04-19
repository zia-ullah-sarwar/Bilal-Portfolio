import React from "react"

const Testimonials = () => {
    return(
        <>
           <section id="Testimonials">
           <div className="bg-dark text-light">
          <h1 className="p-5 text-center">TESTIMONIALS</h1>
          <div className="container">
         
        
        <div className="row pb-5">
            <div className="col-sm-4 mb-3">
            {/* <div className="text-center testimonianl-user">
              <i class="fas fa-user text-light mt-3"></i> 
            </div> */}
                <div className="card-style">                 
                <i className="fa fa-quote-left p-4 text-secondary"></i> 

                    <blockquote className="card-text lh-lg ps-4 pe-4">
                   He is a good and hardoworking guy.I like his calmness and support through
                     out the course of my work..I will hire him 10000% time when i have more
                      work.
                      <div className="float-end">
                        <i className="text-end fa fa-quote-right ps-4 pe-4 pt-4 text-secondary"></i> 
                      </div>
                        </blockquote>
                        
                        <h5 className="card-text p-4">
                        Johnson 
                        <div className="float-end">
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star-half-alt text-warning fa-xs ms-1"></i>
                        </div>
                        </h5>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="card-style">
                <i className="fa fa-quote-left p-4 text-secondary"></i> 

                    <blockquote className="card-text lh-lg ps-4 pe-4">
                  
                    Amazing work - did exactly as I asked and was very flexible.
                     Would definitely work with him again. I do a lot of Fiverr gigs and
                      this was a top gig.
                                        
                      <div className="float-end">
                        <i className="text-end fa fa-quote-right ps-4 pe-4 pt-4 text-secondary"></i> 
                      </div>
                        </blockquote>
                        
                        <h5 className="card-text p-4 mb-3">
                        Gonzal 
                        <div className="float-end">
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star-half-alt text-warning fa-xs ms-1"></i>
                        </div>
                        </h5>     
                </div>
            </div>

            <div className="col-sm-4">
                <div className="card-style">
                <i className="fa fa-quote-left p-4 text-secondary"></i> 

                    <blockquote className="card-text lh-lg ps-4 pe-4">
                    Tout a parfaitement fonctionné dans les missions d'intégration de
                     plateforme de paiements, il est très professionnel et avec une bonne 
                     .

                      <div className="float-end">
                        <i className="text-end fa fa-quote-right ps-4 pe-4 pt-4 text-secondary"></i> 
                      </div>
                        </blockquote>
                        
                        <h5 className="card-text p-4">
                        Cedric 
                        <div className="float-end">
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star text-warning fa-xs ms-1"></i>
                        <i className="fas fa-star-half-alt text-warning fa-xs ms-1"></i>
                        </div>
                        </h5>
                       
                        
                        
                </div>
            </div>

        </div>
     </div>
 
  </div>

               </section> 
        </>
    )

}

export default Testimonials


