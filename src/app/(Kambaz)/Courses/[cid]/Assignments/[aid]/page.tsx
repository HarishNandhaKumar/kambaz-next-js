import { Button, Form, FormSelect, ListGroup, ListGroupItem } from "react-bootstrap";

export default function AssignmentEditor() {
return (
    <>
    <div id="wd-assignments-editor" className="container mt-3 ms-5">
            <ListGroup className="rounded-0">
                <ListGroupItem className="border-0 px-4 pt-4 pb-2 w-50">
                    <Form.Label htmlFor="wd-name" >Assignment Name</Form.Label>
                    <Form.Control id="wd-name" defaultValue="A1" className="mt-2" />
                </ListGroupItem>

                <ListGroupItem className="border-0 px-4 pt-2 pb-4 w-50">
                    <div className="border rounded p-3 mt-2 bg-white">
                        <p>The assignment is <span className="text-danger">available online</span></p>
                        <p>Submit a link to the landing page of your Web application running on <span className="text-underline-dotted">Vercel</span>.</p>
                        <p>The landing page should include the following:</p>
                        <ul>
                            <li>Your full name and section</li>
                            <li>Links to each of the lab assignments</li>
                            <li>Link to the <span className="text-underline-dotted">Kanbas</span> application</li>
                            <li>Links to all relevant source code repositories</li>
                        </ul>
                        <p>The <span className="text-underline-dotted">Kanbas</span> application should include a link to navigate back to the landing page.</p>
                    </div>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-4 pt-2 pb-4 w-50">
                    <div className="d-flex align-items-center gap-3 justify-content-end">
                        <Form.Label htmlFor="wd-points" className="mb-0 text-end">Points</Form.Label>
                        <Form.Control id="wd-points" type="number" defaultValue="100" className="w-75" />
                    </div>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-4 pt-2 pb-4 w-50">
                    <div className="d-flex align-items-center gap-3 justify-content-end">
                        <div className="col-md-3">
                            <Form.Label htmlFor="wd-group" className="mb-0 text-end">Assignment Group</Form.Label>
                        </div>
                        <div className="col-md-9">
                            <FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </FormSelect>
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-4 pt-2 pb-4 w-50">
                    <div className="d-flex align-items-center gap-3 justify-content-end">
                        <div className="col-md-3">
                            <Form.Label htmlFor="wd-display-grade-as" className="mb-0 text-end">Display Grade as</Form.Label>
                        </div>
                        <div className="col-md-9">
                            <FormSelect id="wd-display-grade-as" defaultValue="Percentage">
                                <option value="Percentage" defaultChecked>Percentage</option>
                                <option value="Points">Points</option>
                                <option value="Complete/Incomplete">Complete/Incomplete</option>
                                <option value="Letter Grade">Letter Grade</option>
                            </FormSelect>
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-4 pt-2 pb-4 w-50">
                    <div className="row">
                        <div className="col-md-3">
                            <Form.Label htmlFor="wd-submission-type" className="mb-0 text-nowrap text-end">Submission Type</Form.Label>
                        </div>
                        <div className="col-md-9">
                            <div className="border rounded p-3">
                                <FormSelect id="wd-submission-type" defaultValue="Online">
                                <option value="Online" defaultChecked>Online</option>
                                <option value="On Paper">On Paper</option>
                                <option value="External Tool">External Tool</option>
                                <option value="No Submission">No Submission</option>
                            </FormSelect>

                                <div className="mt-3">
                                    <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                                    <div className="mt-2">
                                        <Form.Check 
                                            type="checkbox" 
                                            id="wd-text-entry"
                                            label="Text Entry"
                                            className="mb-3" 
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            id="wd-website-url"
                                            label="Website URL" 
                                            defaultChecked
                                            className="mb-3"
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            id="wd-media-recordings"
                                            label="Media Recordings" 
                                            className="mb-3"
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            id="wd-student-annotation"
                                            label="Student Annotation"
                                            className="mb-3" 
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            id="wd-file-upload"
                                            label="File Uploads"
                                            className="mb-3" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-4 pt-2 pb-4 w-50">
                    <div className="row">
                        <div className="col-md-3 text-end">
                            <Form.Label className="mb-0 text-nowrap text-end">Assign</Form.Label>
                        </div>
                        <div className="col-md-9">
                            <div className="border rounded p-3">
                                <Form.Label htmlFor="wd-assign-to" className="fw-bold">Assign to</Form.Label>
                                <div className="border rounded p-2 mb-3 bg-white d-flex align-items-center">
                                    <span className="badge bg-light text-dark border me-2">
                                        Everyone
                                        <button type="button" className="btn-close btn-close-sm ms-2" style={{ fontSize: "10px" }}></button>
                                    </span>
                                </div>

                                <Form.Label htmlFor="wd-due-date" className="fw-bold">Due</Form.Label>
                                <Form.Control 
                                    id="wd-due-date" 
                                    type="datetime-local" 
                                    defaultValue="2024-05-13T23:59"
                                    className="mb-3"
                                />

                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="wd-available-from" className="fw-bold">Available from</Form.Label>
                                        <Form.Control 
                                            id="wd-available-from" 
                                            type="datetime-local" 
                                            defaultValue="2024-05-06T00:00"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label htmlFor="wd-available-until" className="fw-bold">Until</Form.Label>
                                        <Form.Control 
                                            id="wd-available-until" 
                                            type="datetime-local"
                                            defaultValue="2024-05-20T23:59"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ListGroupItem>
            </ListGroup>

            {/* Action Buttons */}
            <div className="w-50 px-4 border-top mt-4 pt-3 d-flex justify-content-end gap-2">
                <Button variant="light" className="border">Cancel</Button>
                <Button variant="danger">Save</Button>
            </div>
        </div>
    </>
);}