import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { GrFacebook, GrTwitter, GrGooglePlus, GrInstagram,GrLinkedin } from "react-icons/gr";
import { FormText, Form } from "reactstrap";
import { RiVisaFill } from 'react-icons/ri';
import { SiQiwi } from 'react-icons/si';
import { FaCcMastercard, FaRegCreditCard, FaCcPaypal } from 'react-icons/fa';



function FooterPagePro ()  {
  return (
    <MDBFooter className="page-footer font-small pt-4 mt-4 bg-dark text-white ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Our mission
            </h5>
            <p>
            Our mission is to build digital products that last. By being reasonable product craftsmen, we're able to avoid surprises and focus on the quality of the software we deliver.{<hr/>}
            What helps us achieve it is our goal to become the no. 1 JavaScript software development company in the world by focusing on one technology, supporting the ecosystem (open source). We're eager to help technology driven companies achieve their business goals with our help. All that is possible thanks to our great team.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Помощь покупателю
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Как сделать заказ</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!">Оплата</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!">Доставка</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!">Сервисная служба</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!">Обмен и возврат</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Методы оплаты
            </h5>
            <ul className="list-unstyled">
              
              <li>
                <a href="#!"> <RiVisaFill style={{fontSize:"40px", marginRight:"5px"}}/> Visa cart</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!"> <FaCcMastercard style={{fontSize:"40px", marginRight:"5px"}} /> Master cart</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!"> <FaRegCreditCard style={{fontSize:"40px", marginRight:"5px"}} /> Credit cart</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!"> <SiQiwi style={{fontSize:"40px", marginRight:"5px"}} /> Qiwi wallet</a>
              </li>
              {<hr/>}
              <li>
                <a href="#!"> <FaCcPaypal style={{fontSize:"40px", marginRight:"5px"}} /> Paypal</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              ИНформация
            </h5>
            <ul className="list-unstyled">
              <Form>
              <li>
                <a href="#!">Адреса магазинов и пункты выдачи</a>
              </li>
              </Form>
              {<hr/>}

             <Form>
             <li>
                <a href="#!">Контакты</a>
              </li>
             </Form>
             {<hr/>}

              <Form> <li>
                <a href="#!">Гарантии</a>
              </li>
              </Form>
              {<hr/>}

              <Form> <li>
                <a href="#!">Бонусная программа и Акции</a>
              </li>
              </Form>
              {<hr/>}

              <Form><li>
                <a href="#!">Кредит</a>
              </li></Form>
              
             
              
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
          &copy; {new Date().getFullYear()} Bishkek/312: <a href="https://www.Bishkek/312.com"> Alan, Marat, Meerim </a>
        </MDBContainer>
      </div>
    
    </MDBFooter>
  );
}

export default FooterPagePro;
