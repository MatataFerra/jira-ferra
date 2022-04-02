import { Row, Spacer, Input, Avatar, Text, Container } from "@nextui-org/react";
import { FC } from "react";
import { SearchSVG } from "./SearchSVG";
const nameUser = ["Diego", "Juan", "María", "MatataFerra", "Jimena"];

export const Navbar: FC = () => {
  return (
    <Container>
      <Row css={{ marginBotton: 2 }} align="center">
        <Text
          h1
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
            marginRight: 16,
          }}
        >
          Board
        </Text>
        <Text
          h1
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
        >
          JiraFerra
        </Text>
      </Row>
      <Spacer />
      <Row align="center">
        <Input
          clearable
          placeholder="Próximamente..."
          contentRight={<SearchSVG />}
          status="primary"
          color="primary"
          animated={false}
          disabled
        />
        <Spacer x={2} />
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
      </Row>
    </Container>
  );
};
