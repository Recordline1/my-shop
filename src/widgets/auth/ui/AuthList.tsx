import Link from "next/link";

export const AuthList = () => {
    return (
        <div className="flex gap-4 mb-4 ">
            <Link href="/auth">Login/Register</Link>
        </div>
    )
}