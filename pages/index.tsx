import { AppShell, Title, Flex } from "@mantine/core";
import Avatar from "../components/avatar";
import Header from "../components/header";

export default function Home() {
  return (
    <AppShell header={<Header />}>
      <Flex mih={50} gap="md" justify="center" align="center" direction="column" className="h-screen">

        <div className="flex justify-center space-x-2 mb-5">
          <Title className="text-black-500 text-4xl font-medium leading-tight"> Hello,  </Title>
          <Title className="py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-500 text-white rounded"> Friend! </Title>
        </div>

        <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" name="Lisa Tsang" caption="Nurse"/>
      </Flex>
    </AppShell>
  )
}
