import type { NextPage } from "next";
import { Popover, Button } from "@nextui-org/react";
import { Collapse, Text } from "@nextui-org/react";

const Footer: NextPage = () => {
  return (
    <div className="h-auto p-2 w-full flex items-center justify-center flex-col">
      <div className="h-20 w-full"></div>
        <Collapse.Group>
      <Collapse title="Whats your location?">
        <Text>
            India 🇮🇳{"‎ ".repeat(90)}
        </Text>
      </Collapse>
      <Collapse title="Whats your socials?">
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
      </Collapse>
    </Collapse.Group>
      <div className="h-20 w-full"></div>
      <div className="h-4 w-full"></div>
      <Text h6>©Arush 2022</Text>
    </div>
  );
};

export default Footer;
