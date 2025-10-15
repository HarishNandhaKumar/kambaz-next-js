"use client";
import AssignmentButtons from "./AssignmentButtons";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { NoteSymbol } from "./NoteSymbol"
import GreenCheckmark from "../Modules/GreenCheckmark";
import Link from "next/link";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter(assignment => assignment.course === cid);
return (
    <>
    <div id="wd-assignments">
        <AssignmentButtons />
        <br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between"> 
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" /> 
                        <IoMdArrowDropdown className="me-2" /> 
                        <b>ASSIGNMENTS</b>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="border rounded-pill px-3 py-1 me-1">40% of Total</span><FaPlus className="me-4" />
                        <IoEllipsisVertical />
                    </div>
                </div>

                <ListGroup className="wd-lessons rounded-0">
                    {assignments.filter((assignment) => assignment.course === cid).map((assignment) => (
                        <ListGroupItem key={assignment._id} className="wd-module wd-lesson p-0 fs-5">
                            <div className="wd-title p-3 ps-2 bg-white d-flex align-items-center">
                                <BsGripVertical className="me-4 fs-3" />
                                <NoteSymbol />
                                <div className="flex-grow-1 ms-5 me-4">
                                    <h6 className="mb-1 fw-bold">
                                        <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link text-black text-decoration-none">
                                            {assignment.title}
                                        </Link>
                                    </h6>
                                    <div className="small text-muted">
                                        <span className="text-danger">Multiple Modules</span>
                                        <span> | <b>Not available until</b> {assignment.avail_date} at {assignment.avail_time} |</span>
                                    </div>
                                    <div className="small text-muted">
                                        <span><b>Due</b> May 13 at 11:59pm | 100 pts</span>
                                    </div>
                                </div>
                                <div className="float-end">
                                    <span className="me-3">
                                        <GreenCheckmark />
                                    </span>
                                    <IoEllipsisVertical className="fs-4"/>
                                </div>
                            </div>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </ListGroupItem>
        </ListGroup>
    </div>
    </>
);}