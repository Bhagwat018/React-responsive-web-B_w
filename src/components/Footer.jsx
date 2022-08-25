import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="row justify-content-evenly bg-danger pt-3 pb-5 " >
  <div className="col-md-3 pt-4">
    <h4 className="mb-3 text-center"> Tech</h4>
    <p className="text-center">Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consecte lorem is the great tur lorm12
       adipisicing elit. Quam laudantium impedit dicta! adipisicing elit. Modi ducimus dolorem explicabo.</p>
  </div>
  <div className="col-md-3 pt-4">
    <h4 className="pb-2 text-center" > Impottent Links</h4>
    <p className="text-center">
      <a href="/#" className="link-light text-decoration-none">Home</a><br/>
      <a href="/#" className="link-light text-decoration-none">About us </a><br/>
      <a href="/#" className="link-light text-decoration-none">Contect us</a><br/>
      <a href="/#" className="link-light text-decoration-none">Our Team </a><br/>
      <a href="/#" className="link-light text-decoration-none">Our Features</a><br/>
    </p>
  </div>
  <div className="col-md-3 pt-4 pb-3 text-center">
    <a href="/#" className="link-light text-decoration-none text-center">Contect us</a><br/>
    <p className="text-center pt-3">
      1180 Kimberly Park <br/>
      WiLLISION WAY <br/>
      Purani Delhi <br/>
      INDIA <br/>
      <i className="bi bi-telephone"></i> : 626-789-6903
    </p>
  </div>
</div>
 {/* <!-- copyright  -->  */}
  <div className="row bg-secondary text-white text-center p-3">
  <div className="col-md-12">
    <p >
      copyright  1999-2022 by GOPAL &copy; All Rights Reserved.
    </p>
  </div>
 </div>
    </div>
  
  )
}

export default Footer
