import { FC, useMemo, useContext, DragEvent, useState } from "react";
import { Row, Grid, Col, Text, Image } from "@nextui-org/react";
import styles from "./styles/CardsList.module.css";
import { CardToDo } from "./CardTodo";
import { EntryStatus } from "../../interfaces/entryInterface";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import { ModalAdd } from "./ModalAdd";

interface Props {
  status: EntryStatus;
}

export const CardList: FC<Props> = ({ status }) => {
  const [visible, setVisible] = useState(false);
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [status, entries]
  );

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const entryId = event.dataTransfer.getData("text");
    const entry = entries.find((entry) => entry._id === entryId)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const statusHeader = {
    pending: "Pendientes",
    "in-progress": "En progreso",
    finished: "Terminados",
  };

  return (
    <Grid.Container
      css={{
        backgroundColor: "$accents8",
        m: 8,
        w: "100%",
        "@sm": { flexBasis: "30%" },
      }}
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Grid xs={12}>
        <Col>
          <Row
            className={isDragging ? styles.headerDraggin : ""}
            css={{ backgroundColor: "$accents7", p: 6 }}
          >
            <Text
              h2
              color="#000"
              className={isDragging ? styles.titleDraggin : ""}
            >
              {statusHeader[status]}
            </Text>
          </Row>
          <Col css={{ p: 6 }}>
            {entriesByStatus.map((entry) => {
              return <CardToDo key={entry._id} entry={entry} />;
            })}
          </Col>
        </Col>
      </Grid>
      {statusHeader[status] === "Pendientes" && (
        <Grid css={{ width: "100%" }} justify="center" alignItems="center">
          <Image
            src="/plus.svg"
            alt="plus icon"
            width={"1.5rem"}
            height={"2rem"}
            css={{ borderRadius: 0, cursor: "pointer" }}
            onClick={openModal}
          />
          <ModalAdd visible={visible} onClose={closeModal} />
        </Grid>
      )}
    </Grid.Container>
  );
};
