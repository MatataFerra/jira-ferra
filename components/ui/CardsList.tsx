import {
  Container,
  Row,
  Grid,
  Col,
  Text,
  Card,
  Image,
} from "@nextui-org/react";
import { FC, useMemo } from "react";
import { entries } from "../../mock/entries";
import { CardToDo } from "./CardTodo";
import { EntryStatus } from "../../interfaces/entryInterface";
import { PlusSVG } from "./PlusSVG";

interface Props {
  status: EntryStatus;
}

export const CardList: FC<Props> = ({ status }) => {
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [status]
  );

  const statusHeader = {
    pending: "Pendientes",
    "in-progress": "En progreso",
    finished: "Terminados",
  };

  return (
    <Grid.Container
      justify="space-between"
      css={{ backgroundColor: "$accents8", w: "30%" }}
    >
      <Grid xs={12}>
        <Col>
          <Row css={{ backgroundColor: "$accents7", p: 6 }}>
            <Text h2 color="#000">
              {statusHeader[status]}
            </Text>
          </Row>
          <Row css={{ p: 6 }}>
            {entriesByStatus.map((entry) => {
              return <CardToDo key={entry._id} entry={entry} />;
            })}
          </Row>
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
          />
        </Grid>
      )}
    </Grid.Container>
  );
};
