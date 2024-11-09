import Link from "next/link";
import { Button } from "./ui/button";

const Unauthorize = () => {
    return ( 
        <>
            <h1>Unauthorize</h1>
            <Button>
                <Link href={"/"}>Home</Link>
            </Button>
        </>
     );
}
 
export default Unauthorize;