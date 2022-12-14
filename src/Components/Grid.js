import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AbcIcon from "@mui/icons-material/Abc";
import MenuIcon from "@mui/icons-material/Menu";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const GridSection = () => {
  //change text style functionlity
  const [changeTextSize, setChangeTextSize] = useState({
    active: false,
  });
  const changeStyleHandle = () => {
    setChangeTextSize({
      active: !changeTextSize.active,
    });
  };

  const [textSize, setTextSize] = useState("16px");

  return (
    <>
      <MDBContainer className="mt-4  demo">
        <MDBRow>
          <MDBCol size="4" className="grid-menu">
            <MDBCard>
              <MDBCardTitle className="display-6 p-3">
                <MenuIcon style={{ fontSize: "30px" }} /> Menubar
              </MDBCardTitle>
              <MDBCardText style={{ color: "grey" }}>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} /> Getting
                      Started
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} /> MDB Pro
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      CLI and Hosting
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      Navigation
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      Components
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      Form
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      Methods
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      Utilities
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      Templates
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#!" className="p-2">
                      <AccessibilityIcon style={{ fontSize: "35px" }} />
                      Plugins
                    </a>
                  </li>
                </ul>
              </MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol size="1">
            <MDBBtn
              color="light"
              style={{ border: "0.5px solid #949494", borderRadius: "12px" }}
            >
              <ShareIcon />
            </MDBBtn>
            <MDBBtn
              size="small"
              className="mt-2"
              color="light"
              style={{ border: "0.5px solid #949494", borderRadius: "12px" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <BookmarkBorderIcon />
            </MDBBtn>
            <MDBBtn
              className="mt-2"
              color="light"
              style={{ border: "0.5px solid #949494", borderRadius: "12px" }}
              onClick={changeStyleHandle}
            >
              <AbcIcon />
            </MDBBtn>
            {changeTextSize.active && (
              <MDBBtnGroup vertical className="m-2">
                <MDBBtn
                  color="light"
                  onClick={() => {
                    setTextSize("25px");
                  }}
                >
                  <h5>A</h5>
                </MDBBtn>
                <MDBBtn
                  color="light"
                  onClick={() => {
                    setTextSize("16px");
                  }}
                >
                  <h6>A</h6>
                </MDBBtn>
                <MDBBtn
                  color="light"
                  onClick={() => {
                    setTextSize("13px");
                  }}
                >
                  <p>A</p>
                </MDBBtn>
              </MDBBtnGroup>
            )}
          </MDBCol>
          <MDBCol size="7">
            <MDBCard>
              <MDBCardTitle className="display-6 p-3">
                <h1> Professional DashBoard! </h1>
              </MDBCardTitle>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://i.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"
                  fluid
                  alt="..."
                />
                <a>
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardText style={{ fontSize: textSize }}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available. It is also used to temporarily replace text in a
                  process called greeking, which allows designers to consider
                  the form of a webpage or publication, without the meaning of
                  the text influencing the design.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      SignUp and Login in now to save Blog stories
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src="https://picsum.photos/600/300"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                  <div className="modal-footer">
                   <NavLink to="/login">
                   <button className="btn btn-success" >login</button>
                   </NavLink>
                   <NavLink to="/signup">
                   <button className="btn btn-danger" >signUp</button>
                   </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default GridSection;
