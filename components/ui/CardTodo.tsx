import { Card, Text, Divider } from "@nextui-org/react";
import { FC } from "react";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

export const CardToDo: FC<Props> = ({ entry }) => {
  return (
    <Card color={"default"} css={{ my: 8 }}>
      <Card.Header>
        <Text h4> {entry.title} </Text>
      </Card.Header>
      <Card.Body>
        <Text size={12}>{entry.description}</Text>
      </Card.Body>
      <Divider />
      <Card.Footer>
        <Text size={10} small>
          Hace 30 segundos
        </Text>
      </Card.Footer>
    </Card>
  );
};
