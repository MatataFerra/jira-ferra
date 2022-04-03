import { FC } from "react";
import { useContext } from "react";
import { Sidebar, HamMenu, Navbar } from "../ui";
import { MenuContext } from "../../context/menu";
import { Grid } from "@nextui-org/react";
import { useWindowSize } from "../../hooks";

export const MainLayout: FC = ({ children }) => {
  const { menuStatus } = useContext(MenuContext);
  const { width } = useWindowSize();
  return (
    <>
      <Grid.Container css={{ height: "100vh" }}>
        {width > 768 ? menuStatus ? <HamMenu /> : <Sidebar /> : <HamMenu />}
        <Grid xs={10}>
          <Grid.Container>
            <Grid xs={12}>
              <Navbar />
            </Grid>
            <Grid
              css={{ m: 8, flexWrap: "wrap", "@sm": {} }}
              xs={12}
              justify="space-between"
            >
              {children}
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  );
};
