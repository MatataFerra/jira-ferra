import { Spacer, Grid, Image, Text, Link } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  img: string;
  name: string;
}

export const UserOptions: FC<Props> = ({ img, name }) => {
  return (
    <>
      <Grid.Container gap={2} alignItems={"center"}>
        <Grid xs={12} sm={3}>
          <Image src={`/${img}`} alt="Calavera" showSkeleton />
        </Grid>
        <Grid xs={12} sm={9}>
          <Link
            as="h5"
            css={{
              color: "#dcdfe4",
              cursor: "pointer",
              margin: 0,
            }}
          >
            {name}
          </Link>
        </Grid>
      </Grid.Container>
    </>
  );
};
