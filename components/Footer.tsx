import type { NextPage } from "next";
import { Popover, Button, Dropdown } from "@nextui-org/react";
import { Collapse, Text } from "@nextui-org/react";

const Footer: NextPage = () => {
  return (
    <div className="h-auto p-2 w-full flex items-center justify-center flex-col">
      <div className="h-20 w-full"></div>
      <Collapse title="Whats your location?">
        <div className="h-4"></div>
        <Text>India 🇮🇳<br />{"‎ ".repeat(100)}</Text>
      </Collapse>
      <div className="h-8 w-full"></div>
      <Collapse title="Whats your socials?">
        <div className="h-8 w-full"></div>
        <Popover>
          <Popover.Trigger>
            <Button shadow color="primary">
              Email
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ p: "$10" }}>mishraarush5655@gmail.com</Text>
          </Popover.Content>
        </Popover>
        <Text>{"‎ ".repeat(100)}</Text>
        <div className="h-4"></div>
      </Collapse>
      <div className="h-20 w-full"></div>
      <div className="h-12 w-full"></div>
      <Text h6>©Arush 2022</Text>
    </div>
  );
};

export default Footer;
