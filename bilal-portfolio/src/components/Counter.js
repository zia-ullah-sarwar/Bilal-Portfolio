import React from "react";

const Counter =() =>{
    return(
        <>
        <section>
        <div className="bg-dark text-light">
         <h1 className="p-5 text-center">SKILLS</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-3 col-lg-3 mb-3">
                        <div className="counter">
                                <div className="p-5 text-center">
                                <i class="far fa-check-circle pb-4"></i>
                                    <h4 data-target="200" className="counterspeed">      
                                        200+                                    </h4>
                                    <h6>
                                         Projects
                                    </h6>
                                 </div>
                            </div>
                        </div>

                        <div className="col-sm-9 col-md-3 col-lg-3 mb-3">
                        <div className="counter">
                                <div className="p-5 text-center">
                                <i class="fas fa-coffee pb-4"></i>
                                    <h4 data-target="200" className="counterspeed">      
                                        200+
                                    </h4>
                                    <h6>
                                         Meetings
                                    </h6>
                                 </div>
                            </div>
                        </div>

                        <div className="col-sm-9 col-md-3 col-lg-3 mb-3">
                        <div className="counter">
                                <div className="p-5 text-center">
                                <i class="fas fa-smile pb-4"></i>
                                    <h4 data-target="200" className="counterspeed">      
                                        200+
                                    </h4>
                                    <h6>
                                    Happy Clients
                                    </h6>
                                 </div>
                            </div>
                        </div>

                        <div className="col-sm-9 col-md-3 col-lg-3">
                        <div className="counter">
                                <div className="p-5 text-center">
                                <i class="far fa-calendar-alt pb-4"></i>
                                    <h4 data-target="200" className="counterspeed">      
                                        200+ 
                                    </h4>
                                    <h6>
                                         Year Experience
                                    </h6>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    


          
        </section>
        </>
    )
}

export default Counter;