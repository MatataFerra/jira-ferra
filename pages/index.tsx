import type { NextPage } from "next";
import { useContext } from "react";
import { Sidebar, HamMenu, CardList, Navbar } from "../components/ui";
import { MenuContext } from "../context/menu";
import { Grid, Spacer, Row, Col } from "@nextui-org/react";

const Home: NextPage = () => {
  const { menuStatus } = useContext(MenuContext);
  return (
    <>
      <Grid.Container css={{ height: "100vh" }}>
        <Grid
          css={{
            backgroundColor: "#222327",
            // padding: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {menuStatus ? <HamMenu /> : <Sidebar />}
        </Grid>
        <Grid xs={10}>
          <Grid.Container>
            <Grid xs={12}>
              <Navbar />
            </Grid>
            <Grid css={{ p: 24 }} xs={12} justify="space-between">
              <CardList status="pending" />
              <CardList status="in-progress" />
              <CardList status="finished" />
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Home;
