import { Card, Text, Divider } from "@nextui-org/react";
import { DragEvent, FC, useContext, useState } from "react";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";
import { useRouter } from "next/router";
import { dateFunctions } from "../../utils";
import { ModalEdit } from "./";

interface Props {
  entry: Entry;
}

export const CardToDo: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const [visible, setVisible] = useState(false);
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Card
        color={"default"}
        css={{ my: 8 }}
        animated
        clickable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onClick={openModal}
        draggable
      >
        <Card.Header>
          <Text h4> {entry.title} </Text>
        </Card.Header>
        <Card.Body>
          <Text size={12}>{entry.description}</Text>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Text size={10} small>
            {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
          </Text>
        </Card.Footer>
      </Card>
      <ModalEdit entry={entry} visible={visible} onClose={closeModal} />
    </>
  );
};
