import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signin() {
    return (
        <div id="wd-signin-screen" className="ms-5">
            <h1>Sign in</h1>
            <FormControl id="wd-username" defaultValue="Student" placeholder="username" className="mb-2 w-25"/>
            <FormControl id="wd-password" defaultValue="abc123" placeholder="password" type="password" className="mb-2 w-25"/>
            <Link id="wd-signin-btn" href="/Dashboard" className="btn btn-primary w-25 mb-2"> Sign in </Link>
             <br />
            <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
        </div>
);}