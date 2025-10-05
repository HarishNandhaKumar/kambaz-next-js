'use client'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
    const pathname = usePathname();

    return (
        <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
                    id="wd-kambaz-navigation">
            <ListGroupItem className="bg-black border-0 text-center" as="a"
                    target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
                    <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
            </ListGroupItem>

            <ListGroupItem className={`border-0 text-center ${pathname.includes('/Account') ? 'bg-white' : 'bg-black'}`}>
                <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
                    <FaRegUserCircle className={`fs-1 ${pathname.includes('/Account') ? 'text-danger' : 'text-white'}`} />
                    <br />
                    <span className={pathname.includes('/Account') ? 'text-danger' : 'text-white'}>Account</span>
                </Link>
            </ListGroupItem>

            <ListGroupItem className="border-0 bg-white text-center">
                <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
                    <AiOutlineDashboard className="fs-1 text-danger" />
                    <br />
                    Dashboard
                </Link>
            </ListGroupItem>

            <ListGroupItem className={`border-0 text-center ${pathname.includes('/Dashboard') ? 'bg-white' : 'bg-black'}`}>
                <Link href="/Dashboard" id="wd-courses-link" className="text-white text-decoration-none">
                    <LiaBookSolid className="fs-1 text-danger" />
                    <br />
                    <span className={pathname.includes('/Dashboard') ? 'text-danger' : 'text-white'}>Courses</span>
                </Link>
            </ListGroupItem>

            <ListGroupItem className={`border-0 text-center ${pathname.includes('/Calender') ? 'bg-white' : 'bg-black'}`}>
                <Link href="/Calender" id="wd-calender-link" className="text-white text-decoration-none">
                    <IoCalendarOutline className="fs-1 text-danger" />
                    <br />
                    <span className={pathname.includes('/Calender') ? 'text-danger' : 'text-white'}>Calender</span>
                </Link>
            </ListGroupItem>

            <ListGroupItem className={`border-0 text-center ${pathname.includes('/Inbox') ? 'bg-white' : 'bg-black'}`}>
                <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none">
                    <FaInbox className="fs-1 text-danger" />
                    <br />
                    <span className={pathname.includes('/Inbox') ? 'text-danger' : 'text-white'}>Inbox</span>
                </Link>
            </ListGroupItem>

            <ListGroupItem className={`border-0 text-center ${pathname.includes('/Labs') ? 'bg-white' : 'bg-black'}`}>
                <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
                    <LiaCogSolid className="fs-1 text-danger" />
                    <br />
                    <span className={pathname.includes('/Labs') ? 'text-danger' : 'text-white'}>Labs</span>
                </Link>
            </ListGroupItem>
        </ListGroup>
);}