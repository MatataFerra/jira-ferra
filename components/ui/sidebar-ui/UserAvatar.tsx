import { FC } from "react";
import { Avatar, Divider, Grid, Spacer, Text } from "@nextui-org/react";

export const UserAvatar: FC = () => {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Avatar text="AR" color="gradient" />
      </Grid>
      <Grid>
        <Text color="#b9b9b9">Nombre de usuario</Text>
        <Text small color="#727272">
          Algunas descripcion
        </Text>
      </Grid>
      <Divider />
    </Grid.Container>
  );
};
