import {
  Row,
  Spacer,
  Input,
  Avatar,
  Text,
  Container,
  Grid,
} from "@nextui-org/react";
import { FC } from "react";
import { SearchSVG } from "./SearchSVG";
const nameUser = ["Diego", "Juan", "María", "MatataFerra", "Jimena"];

export const Navbar: FC = () => {
  return (
    <Grid.Container xs={12} css={{ p: 16 }}>
      <Row align="center">
        <Text
          h1
          size={48}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
            "@md": { fontSize: "5rem" },
          }}
        >
          Board
        </Text>
      </Row>

      <Grid xs={12} sm={3}>
        <Input
          clearable
          placeholder="Próximamente..."
          contentRight={<SearchSVG />}
          status="primary"
          color="primary"
          animated={false}
          disabled
          aria-label="Search"
        />
      </Grid>
      <Spacer x={2} y={2} />
      <Grid xs={12} sm={3} justify="center">
        <Avatar.Group count={4}>
          {nameUser.map((name, index) => (
            <Avatar
              key={index}
              size="lg"
              pointer
              text={name}
              stacked
              bordered
              color="gradient"
            />
          ))}
        </Avatar.Group>
      </Grid>
    </Grid.Container>
  );
};
