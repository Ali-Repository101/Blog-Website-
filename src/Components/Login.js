import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol size={6}>
            <MDBCard>
              <MDBCardHeader>
                <h1 className="display-4 text-center">Login</h1>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBInput label="enter your email" type="text" />
                <br />
                <MDBInput label="enter your password" type="password" />
                <br />

                <NavLink to="/">
                  <MDBBtn color="success">Login</MDBBtn>
                </NavLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LoginPage;
