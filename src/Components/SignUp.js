import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { useState } from "react";
import {NavLink} from "react-router-dom";
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });
  const [InputValue, setInputValue] = useState();
  console.log(InputValue);
  //handle userdata function
  const handleInputData = (event) => {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const getUserData = () => {
    setInputValue(user);
    setUser({
      name: "",
      email: "",
      age: "",
      password: "",
    });
  };
  return (
    <div className="sign-up">
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol size="md">
            <MDBCard>
              <MDBCardHeader>
                <h1 className="display-4 text-center">SignUp</h1>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBInput
                  label="enter your name"
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInputData}
               />
                <br />
                <MDBInput
                  label="enter your email"
                  type="text"
                  name="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputData}
                />
                <br />
                <MDBInput
                  label="enter your age"
                  type="text"
                  name="age"
                  autoComplete="off"
                  value={user.age}
                  onChange={handleInputData}
                />
                <br />
                <MDBInput
                  label="enter password"
                  type="password"
                  name="password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInputData}
                />
                <br />
                <MDBBtnGroup>
                 <NavLink to="/">
                 <MDBBtn color="danger" onClick={getUserData}>
                    SingUp
                  </MDBBtn>
                 </NavLink>
                </MDBBtnGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SignUp;
