import Container from "@/ui/components/Container";
import { Box } from "@/ui/design/Box";
import Image from "next/image";

export const RegisterView = () => {
    return (
        <Container className="grid grid-cols-2 gap-20 ">
            <div className="bg-green-500">
                <div className=" w-full h-64 relative rounded-lg overflow-hidden">
                    <Image
                        src="/assets/images/hero.png"
                        fill
                        alt="hero"
                        className=" object-cover"
                    />
                </div>
            </div>
            <div className="bg-blue-500">
                <Box>
                    <h1>Register</h1>
                </Box>
            </div>
        </Container>
    );
}