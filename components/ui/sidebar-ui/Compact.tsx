import { Button, Grid } from "@nextui-org/react";
import { FC, useContext } from "react";
import { ArrowSVG } from "./ArrowSVG";
import { MenuContext } from "../../../context/menu";

export const Compact: FC = () => {
  const { close } = useContext(MenuContext);
  return (
    <Grid.Container justify="flex-end">
      <Button
        icon={<ArrowSVG />}
        css={{ minWidth: "fit-content", backgroundColor: "transparent" }}
        onClick={close}
      />
    </Grid.Container>
  );
};
