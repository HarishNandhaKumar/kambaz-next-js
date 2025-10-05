import Link from "next/link";
import Image from "next/image";
import {Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button} from "react-bootstrap";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> 
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Full Stack software development</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1235" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/python.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1235 Python</CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Introduction to Python Programming</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1236" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/aicourse.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1236 AI</CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Foundations to Artificial Intelligence</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1237" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/oop.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1237 OOP</CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Object Oriented Programming</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1238" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/operatingsystem.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1238 OPsys</CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Operating Systems</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1239" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/dbms.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1239 DBMS</CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Database Management Systems</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1240" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/networks.png" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1240 CompNet</CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Computer Network</CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
);}