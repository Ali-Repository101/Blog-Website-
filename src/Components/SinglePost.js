import {
  MDBCard,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import usersData from "../usersDatabase/userData";
import { useParams } from "react-router-dom";
const SinglePost = () => {
  const { id } = useParams();
  return (
    <div className="single-post">
      <MDBContainer className="mt-4">
        <MDBRow>
          {usersData.map((value) => {
            if (value.id != id) {
                return 
            }
            else{
               
                return (
                <MDBCol size="medium">
                  <MDBCard className="p-4">
                    <MDBCardBody>
                      <MDBCardImage src={value.imgPath} fluid alt="..." />
                      <MDBCardTitle>
                        <h1 className="mt-3 display-5">{value.name}</h1>
                      </MDBCardTitle>
                      <MDBCardSubTitle>d/o/b: {value.dob}</MDBCardSubTitle>
                      <MDBCardText className="p-2">
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available. It is also
                        used to temporarily replace text in a process called
                        greeking, which allows designers to consider
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              );
            }
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SinglePost;
