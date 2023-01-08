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

        <Avatar src="https://media.licdn.com/dms/image/C5603AQGjoeXfgWa5zw/profile-displayphoto-shrink_800_800/0/1633988267986?e=1678924800&v=beta&t=7-eDNZ0N_kWHDAYy-uGap_T3AaW9Ti7IA9QJxhUuQ08" name="Lisa Tsang" caption="Nurse"/>
      </Flex>
    </AppShell>
  )
}
