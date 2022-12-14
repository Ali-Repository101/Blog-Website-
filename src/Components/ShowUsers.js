import usersData from "../usersDatabase/userData";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
const ShowUsers = () => {
  return (
    <div className="users">
      <MDBContainer className="mt-3">
        <MDBRow>
          {usersData.map((value) => {
            const { id, name, imgPath, dob } = value;
            return (
              <MDBCol size="4" className=" mt-2" key={id}>
                <NavLink to={`post/${id}/${name} `}>
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardTitle className="text-center">
                        {name}
                      </MDBCardTitle>
                    </MDBCardBody>
                    <div>
                      <MDBCardImage
                        src={imgPath}
                        position="top"
                        alt="..."
                        height="330"
                        className="p-2"
                      />
                    </div>
                    <MDBCardText className="p-2 text-center">
                      {" "}
                      Date Of Birth: {dob}
                    </MDBCardText>
                  </MDBCard>
                </NavLink>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ShowUsers;
