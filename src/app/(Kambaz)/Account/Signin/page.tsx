import Link from "next/link";
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input placeholder="username" defaultValue="NEU Student" className="wd-username" /> <br />
            <input placeholder="password" defaultValue="abc123" type="password" className="wd-password" /> <br />
            <Link href="/Dashboard" id="wd-signin-btn">
                <button type="button">Sign in</button>
            </Link>
             <br />
            <Link href="Signup" id="wd-signup-link"> Sign up </Link>
        </div>
);}