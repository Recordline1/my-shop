import { SingUp } from "@features/auth/index";
import { SingIn } from "@features/auth/index";

export default function Page() {
    return (
        <div className="container mx-auto p-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Auth</h1>
            <SingUp />
            <SingIn />
        </div>
    );
}