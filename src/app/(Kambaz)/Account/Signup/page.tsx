import Link from "next/link";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
        <h3>Sign up</h3>
        <input placeholder="username" defaultValue="NEU Student" className="wd-username" /><br/>
        <input placeholder="password" type="password" defaultValue="abc123" className="wd-password" /><br/>
        <input placeholder="verify password" type="password" defaultValue="abc123" className="wd-password-verify" /><br/>
        <Link href="Profile" >
            <button type="button">Sign up</button>
        </Link><br />
        <Link href="Signin" > Sign in </Link>
        </div>
);}