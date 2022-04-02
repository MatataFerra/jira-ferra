import { Grid, Image, Spacer, Tooltip } from "@nextui-org/react";
import { FC } from "react";
interface Props {
  img: string;
  tooltip?: string;
}

export const UserHamOptions: FC<Props> = ({ img, tooltip = "Opción" }) => {
  return (
    <>
      <Grid xs={12}>
        <Spacer />
        <Tooltip color="invert" content={tooltip} placement="right">
          <Image src={`/${img}`} alt="Calavera" showSkeleton />
        </Tooltip>
      </Grid>
    </>
  );
};
