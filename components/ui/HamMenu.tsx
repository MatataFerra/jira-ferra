import { Grid, Image, Divider, Spacer, Avatar } from "@nextui-org/react";
import { FC, useContext, useEffect } from "react";
import { UserHamOptions } from "./sidebar-ui/UserHamOptions";
import { MenuContext } from "../../context/menu";
import { useWindowSize } from "../../hooks";

export const HamMenu: FC = () => {
  const { open, menuStatus, close } = useContext(MenuContext);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      close();
    }
  }, [width, close]);

  const handleSize = () => {
    if (width < 768) {
      return close();
    }

    open();
  };

  return (
    <>
      <Grid.Container
        xs={1.5}
        sm={0.5}
        alignItems="center"
        css={{
          backgroundColor: "#222327",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid>
          <Image
            src="/ham.svg"
            alt="Ham icon"
            width={"1.5rem"}
            height={"4rem"}
            css={{ borderRadius: 0, cursor: "pointer" }}
            onClick={handleSize}
          />
          <Divider />
          <Grid>
            <UserHamOptions img="die.svg" tooltip="El grupo de la muerte" />
            <UserHamOptions img="chat.svg" tooltip="Hablanos" />
            <UserHamOptions img="close.svg" tooltip="Cerrar" />
            <UserHamOptions img="download.svg" tooltip="Descargar" />
            <UserHamOptions img="fill.svg" tooltip="Completar" />
          </Grid>
          <Spacer />
          <Divider />
          <Spacer />
        </Grid>
        <Grid
          justify="center"
          css={{
            p: 8,
          }}
          xs={1}
        >
          <Avatar text="AR" color="gradient" />
        </Grid>
      </Grid.Container>
    </>
  );
};
