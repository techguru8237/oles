import CustomNav from "./NavBar";
import { Container, Button, Row, Col, CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { contactDetails } from "../utils/helperList";
import ContactSvg from "../utils/contactSvg";

const Contact = () => {
  return (
    <>
      <CustomNav />
      <Container className="pt-lg-3">
        <Row className="mt-3 mt-lg-4 mb-3">
          <Col xs={12} md={9}>
            <CardDeck className="contact">
              {contactDetails.map(obj => (
                <Card className="contact-card" key={obj.type}>
                  <a href={obj.href} className="text-link" target="_blank" rel="noreferrer">
                    <div className="shadow d-flex justify-content-center text-center flex-column py-3">
                      <div>
                        <img className="contact-img" src={obj.iconSrc} alt={obj.type} loading="lazy" />
                      </div>
                      <span className="text-muted mt-2 mb-3">{obj.type}</span>
                      <span className="color-custom-blue">{obj.data}</span>
                    </div>
                  </a>
                </Card>
              ))}
            </CardDeck>
          </Col>
          <Col className="float-md-right text-right">
            <h2 className="pr-lg-5 pr-xs-3 text-boldest color-custom-blue mb-4">
              Lets <br />Work <br /> Together!
            </h2>
            <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
              <Button className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1">
                <FontAwesomeIcon size="1x" icon={faPhoneAlt} /><span><a href="tel:+919895051128" className="text-link">Phone</a></span>
              </Button>
              <Button className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1 px-2" onClick={() => window.open('mailto:bipinmv23@gmail.com?subject="Hello !"', '_blank')}>
                <FontAwesomeIcon size="1x" icon={faEnvelope} /><span>Email</span>
              </Button>
              <Button className="contact-btns bg-custom-blue shadow border-0 py-1" onClick={() => window.open('https://www.linkedin.com/in/bipin-mv', '_blank')}>
                <FontAwesomeIcon size="1x" icon={faLinkedinIn} /><span>Linkedin</span>
              </Button>
            </div>
          </Col>
        </Row>
        <ContactSvg />
      </Container>
    </>
  )
};

export default Contact;
