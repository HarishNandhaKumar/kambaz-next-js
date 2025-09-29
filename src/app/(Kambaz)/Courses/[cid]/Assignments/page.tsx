import Link from "next/link";
export default async function Assignments({ params }: { params: Promise<{ cid: string }>}) {
    const { cid } = await params;
return (
    <>
    <div id="wd-assignments">
        <input placeholder="Search for Assignments"
            id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/1`} className="wd-assignment-link">
                    A1 - ENV + HTML
                </Link>
                <br />
                <span> Multiple Modules | <b>Not Available until</b> May 6 at 12:00am | </span><br />
                <span><b>Due</b> May 13 at 11:59pm | 100 pts</span>
            </li>
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/2`} className="wd-assignment-link">
                    A2 - CSS + BOOTSTRAP
                </Link>
                <br />
                <span> Multiple Modules | <b>Not Available until</b> May 13 at 12:00am | </span><br />
                <span><b>Due</b> May 20 at 11:59pm | 100 pts</span>
            </li>
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/3`} className="wd-assignment-link">
                    A3 - JAVASCRIPT + REACT
                </Link>
                <br />
                <span> Multiple Modules | <b>Not Available until</b> May 20 at 12:00am | </span><br />
                <span><b>Due</b> May 27 at 11:59pm | 100 pts</span>
            </li>
        </ul>
    </div>

    <div id="wd-quiz">
        <h3 id="wd-quizzes-title">QUIZZES 10% of Total <button>+</button> </h3>
        <ul id="wd-quizzes-list">
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/4`} className="wd-assignment-link">
                    Q1 - ENV + HTML
                </Link>
                <br />
                <span> Multiple Modules | <b>Not Available until</b> May 20 at 12:00am | </span><br />
                <span><b>Due</b> May 27 at 11:59pm | 100 pts</span>
            </li>
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/4`} className="wd-assignment-link">
                    Q2 - CSS + BOOTSTRAP
                </Link>
                <br />
                <span> Multiple Modules | <b>Not Available until</b> Oct 6 at 12:00am | </span><br />
                <span><b>Due</b> Oct 6 at 11:59pm | 100 pts</span>
            </li>
        </ul>
    </div>

    <div id="wd-exams">
        <h3 id="wd-exams-title">EXAMS 20% of Total <button>+</button> </h3>
        <ul id="wd-exams-list">
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/4`} className="wd-assignment-link">
                    X1 - Exam 1
                </Link>
                <br />
                <span> Multiple Modules | <b>Not Available until</b> Oct 27 at 12:00am | </span><br />
                <span><b>Due</b> Nov 03 at 11:59pm | 100 pts</span>
            </li>
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/4`} className="wd-assignment-link">
                    X2 - Exam 2
                </Link>
                <br />
                <span> Multiple Modules | <b>Not Available until</b> Dec 01 at 12:00am | </span><br />
                <span><b>Due</b> Dec 08 at 11:59pm | 100 pts</span>
            </li>
        </ul>
    </div>

    <div id="wd-projects">
        <h3 id="wd-projects-title">PROJECTS 30% of Total <button>+</button> </h3>
        <ul id="wd-projects-list">
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/4`} className="wd-assignment-link">
                    Project - Kambaz Quizzes
                </Link>
                <br />
                <span><b>Due</b> Dec 07 at 11:59pm | 100 pts</span>
            </li>
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/4`} className="wd-assignment-link">
                    Project - Kambaz Pazza
                </Link>
                <br />
                <span><b>Due</b> Dec 07 at 11:59pm | 100 pts</span>
            </li>
            <li className="wd-assignment-list-item">
                <Link href={`/Courses/${cid}/Assignments/4`} className="wd-assignment-link">
                    Project - Social Network
                </Link>
                <br />
                <span><b>Due</b> Dec 07 at 11:59pm | 100 pts</span>
            </li>
        </ul>
    </div>
    </>
);}