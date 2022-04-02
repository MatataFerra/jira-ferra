import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { UserAvatar, UserOptions, Compact } from "./sidebar-ui";

export const Sidebar: FC = () => {
  return (
    <Grid
      css={{
        backgroundColor: "#222327",
        //width: "20%",
        //padding: 16,
      }}
      className="sidebar"
    >
      <Compact />
      <UserAvatar />
      <UserOptions img="die.svg" name="Grupo de la muerte" />
      <UserOptions img="chat.svg" name="Conversar" />
      <UserOptions img="close.svg" name="Cerrar" />
      <UserOptions img="download.svg" name="Descargar" />
      <UserOptions img="fill.svg" name="Balde de pintura" />
    </Grid>
  );
};
