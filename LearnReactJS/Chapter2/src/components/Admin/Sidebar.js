import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const SideBar = (pros) => {
  const { collapsed } = pros;
  return (
    <Sidebar
      collapsed={collapsed}
      rootStyles={{
        background: "#00ff00",
      }}
      collapsedWidth="60px"
      style={{ height: "100vh" }}
    >
      <Menu>
        <MenuItem
          active={false}
          rootStyles={{
            background: "lightblue",
            height: "100px",
            "&:hover": {
              backgroundColor: "inherit",
            },
          }}
        >
          Book
        </MenuItem>
        <MenuItem> Calendar </MenuItem>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </SubMenu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </SubMenu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};
export default SideBar;
