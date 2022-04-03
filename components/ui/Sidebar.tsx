import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { UserAvatar, UserOptions, Compact } from "./sidebar-ui";

export const Sidebar: FC = () => {
  return (
    <Grid.Container
      css={{
        backgroundColor: "#222327",
        display: "flex",
        flexDirection: "column",
      }}
      className="sidebar"
      xs={2}
    >
      <Compact />
      <UserAvatar />

      <UserOptions img="die.svg" name="Grupo de la muerte" />
      <UserOptions img="chat.svg" name="Conversar" />
      <UserOptions img="close.svg" name="Cerrar" />
      <UserOptions img="download.svg" name="Descargar" />
      <UserOptions img="fill.svg" name="Balde de pintura" />
    </Grid.Container>
  );
};
