import Link from "next/link";
import { AppShell, Title, Flex, Button } from "@mantine/core";
import Avatar from "../components/avatar";

export default function Home() {
  return (
    <AppShell>
      <Flex mih={50} gap="md" justify="center" align="center" direction="column" className="h-screen">

        <Title className="text-blue-500 mb-5"> Hello, Friend! </Title>

        <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" name="Lisa Tsang" caption="Nurse"/>

        <Link href={"/dashboard"}>
          <Button radius="xl" size="lg"> Go to Dashboard </Button>
        </Link>

      </Flex>
    </AppShell>
  )
}
