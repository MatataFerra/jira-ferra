import { Grid, Image, Divider, Spacer, Avatar } from "@nextui-org/react";
import { FC, useContext } from "react";
import { UserHamOptions } from "./sidebar-ui/UserHamOptions";
import { MenuContext } from "../../context/menu";

export const HamMenu: FC = () => {
  const { open } = useContext(MenuContext);

  return (
    <>
      <Grid alignItems="center" css={{ p: 16 }}>
        <Image
          src="/ham.svg"
          alt="Ham icon"
          width={"1.5rem"}
          height={"4rem"}
          css={{ borderRadius: 0, cursor: "pointer" }}
          onClick={open}
        />
        <Divider />
        <UserHamOptions img="die.svg" tooltip="El grupo de la muerte" />
        <UserHamOptions img="chat.svg" tooltip="Hablanos" />
        <UserHamOptions img="close.svg" tooltip="Cerrar" />
        <UserHamOptions img="download.svg" tooltip="Descargar" />
        <UserHamOptions img="fill.svg" tooltip="Completar" />
        <Spacer />
        <Divider />
        <Spacer />
      </Grid>
      <Grid
        justify="center"
        css={{ height: "100%", display: "flex", alignItems: "flex-end", p: 8 }}
      >
        <Avatar text="AR" color="gradient" />
      </Grid>
    </>
  );
};
