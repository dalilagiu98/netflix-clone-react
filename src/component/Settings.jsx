import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"

const Settings = function () {
    return (
        <>
        <Container>
            <Row className="text-start mt-3 mb-2">
            <h2>Account</h2>
            </Row>
        </Container>
        <Container>
            <Row className="mb-4  border-3 border-bottom">
                <Col className="col-12 col-md-3 flex-column">
                    <h5>MEMBERSHIP & BILLING</h5>
                    <Button>Cancel Membership</Button>
                </Col>
                <Col className="col-12 col-md-9 flex-column ">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p>nome.cognome@gmail.com</p>
                        <a href="#modifies">Change account email</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p>Password *******</p>
                        <a href="#modifies">Change password</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p>Phone: +39 *******</p>
                        <a href="#modifies">Change phone number</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p><i className="bi bi-credit-card-2-back-fill"></i>nome.cognome@gmail.com</p>
                        <a href="#modifies">Update payment info</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p></p>
                        <a href="#modifies">Billing details</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p></p>
                        <a href="#modifies">Redeem gift or promo code</a>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p></p>
                        <a href="#modifies">Where to buy gift cards</a>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4  border-3 border-bottom">
                <Col className="col-12 col-md-3">
                <h5>PLAN DETAILS</h5>
                </Col>
                <Col className="col-12 col-md-9 flex-column">
                <div className="d-flex flex-column flex-md-row justify-content-between mb-2 border-bottom border-md-0">
                        <p>Premium <i className="bi bi-badge-8k-fill"></i></p>
                        <a href="#modifies">Change plan</a>
                </div>
                </Col>
            </Row>
            <Row className="mb-4  border-3 border-bottom">
                <Col className="col-12 col-md-3">
                    <h5>SETTINGS</h5>
                </Col>
                <Col className="col-12 col-md-9 d-flex text-start flex-column">
                    <a href="#modifies">Parental controls</a>
                    <a href="#modifies">Test participation</a>
                    <a href="#modifies">Manage download devices</a>
                    <a href="#modifies">Activate a device</a>
                    <a href="#modifies">Recent device streaming activity</a>
                    <a href="#modifies">Sign out of all devices</a>
                </Col>
            </Row>
            <Row className="mb-4  border-3 border-bottom">
                <Col className="col-12 col-md-3">
                <h5>MY PROFILE</h5>
                </Col>
                <Col className="col-12 col-md-9 d-flex text-start flex-column">
                <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <p><img className="h-25 w-25" src="avatar.png" alt="avatar-logo"/>NomeUtente</p>
                        <a href="#modifies">Manage profile</a>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <p></p>
                        <a href="#modifies">Add profile email</a>
                </div>
                <div className="d-flex flex-column text-start">
                    <a href="#modifies">Language</a>
                    <a href="#modifies">Playback settings</a>
                    <a href="#modifies">Subtitle appearance</a>
                    <a href="#modifies">Viewing activity</a>
                    <a href="#modifies">Ratings</a>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Settings 