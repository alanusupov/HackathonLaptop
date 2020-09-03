import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { GrFacebook, GrTwitter, GrGooglePlus, GrInstagram,GrLinkedin } from "react-icons/gr";
import Contacts from "../pages/Contacts";




function FooterPagePro ()  {
  return (
    <MDBFooter className="page-footer font-small pt-4 mt-4 bg-dark text-white">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Footer Content
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="google.com" className="btn-floating btn-sm btn-fb mx-1">
            <i><GrFacebook style={{fontSize: "40px"}}/></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="google.com" className="btn-floating btn-sm btn-tw mx-1">
            <i><GrTwitter style={{fontSize: "40px"}}/></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="google.com" className="btn-floating btn-sm btn-gplus mx-1">
            <i><GrGooglePlus style={{fontSize: "40px"}}/></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="google.com" className="btn-floating btn-sm btn-li mx-1">
            <i><GrInstagram style={{fontSize: "40px"}}/></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="google.com" className="btn-floating btn-sm btn-dribbble mx-1">
            <i><GrLinkedin style={{fontSize: "40px"}}/></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    <Contacts />
    </MDBFooter>
  );
}

export default FooterPagePro;
