import {
    Header as MantineHeader,
    Flex,
    Title,
    Button,
} from "@mantine/core"; 
import Link from "next/link";

function Header() {
    return (
        <MantineHeader height={60}>
            <Flex mih={50} gap="md" justify="flex-start" align="flex-start" direction="row" wrap="nowrap">
                <div className="flex justify-center space-x-1">
                    <Title className="text-black-500 pl-4 pt-1 mt-0.5 text-4xl font-medium leading-tight"> Fund.  </Title>
                    <Title className="py-1.5 px-2.5 mt-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-500 text-white rounded"> Me </Title>
                </div>

                <Link href={"/"}>
                    <Button radius="md" size="md" variant="outline" className="mt-2 ml-3"> Home </Button>
                </Link>

                <Link href={"/dashboard"}>
                    <Button radius="md" size="md" variant="outline" className="mt-2 ml-1"> Dashboard </Button>
                </Link>

            </Flex>
        </MantineHeader>
    );
};

export default Header;
