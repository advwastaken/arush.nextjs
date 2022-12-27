import type { NextPage } from "next";
import { Navbar, Link, Text } from "@nextui-org/react";

const NavBar: NextPage = () => {
  return (
    <div>
      <Navbar isBordered>
        <Navbar.Brand>
          <div>
            <Navbar.Toggle
              className="md:hidden"
              aria-label="toggle navigation"
            />
          </div>
          <Link href="/">
            <img
              className="h-12 w-auto"
              src="https://i.postimg.cc/L8ZJJxM0/1671883685742.png"
              alt=""
            />
            <Text className="" b color="white" hideIn="xs">
              Arush
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          className="mr-8"
          enableCursorHighlight
          hideIn="xs"
          variant="underline"
        >
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content></Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link href="/">
              <Text h4>Home</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/about">
              <Text h4>About</Text>
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
