import { Text, Progress, Card } from '@mantine/core';

type SpendingCardPropType = {
    title: string;
    report: string;
    goal: string;
}

function SpendingCard({ title, report, goal }: SpendingCardPropType) {
  return (
    <Card
      withBorder
      radius="md"
      p="xl"
      shadow="sm"
      className="w-1/3"
    >
      <Text size="xs" transform="uppercase" weight={700} color="dimmed">
        {title}
      </Text>

      <Text size="lg" weight={500}>
        {report} / {goal}
      </Text>
      <Progress value={Number(report.replaceAll("$", "")) / Number(goal.replaceAll("$", "")) * 100} mt="md" size="lg" radius="xl" />
    </Card>
  );
}

export default SpendingCard;
