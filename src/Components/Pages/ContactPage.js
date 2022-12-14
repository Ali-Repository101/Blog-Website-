import {
  MDBCard,
  MDBCardHeader,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ContactPage = () => {
  return (
    <div className="about-section">
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol size="6">
            <MDBCard>
              <MDBCardHeader>
                <h3 className="p-2 display-4">Contact Page</h3>
              </MDBCardHeader>
              <MDBCardText>
                <p className="p-4 ">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available. It is also used to temporarily replace text in a
                  process called greeking, which allows designers to consider
                  the form of a webpage or publication, without the meaning of
                  the text influencing the design.
                </p>
              </MDBCardText>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ContactPage;
