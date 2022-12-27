import { Avatar, Collapse, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Modal, useModal, Button } from "@nextui-org/react";

function choose(choices: string | any[]) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const About: NextPage = () => {
  const { setVisible, bindings } = useModal();
  let randomfacts = [
    "Apple were originally designing an apple shaped flip phone.",
    "Samsung is 38 years and 1 month older than Apple.",
    "Domain name registration used to be free.",
    "Alexa is always listening to your conversations.",
    "Computer Security Day is celebrated on November 30th.",
    "The QWERTY keyboard can slow your typing speed on the computer.",
    "Motorola produced the first-ever portable mobile phone.",
    "Japan has the fastest Internet speed of 319 terabits per second.",
    "Wi-Fi doesn’t stand for Wireless Fidelity.",
    "The first video camera recorder was as big as a grand piano!",
    "The founders of Microsoft, Apple, Facebook, and SpaceX have one thing in common—they are all dropouts!",
  ];
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="h-full w-full flex items-center justify-center p-4">
        <Head>
          <title>Arush - About</title>
          <link
            rel="icon"
            href="https://i.postimg.cc/L8ZJJxM0/1671883685742.png"
          />
        </Head>
        <div className="scale-[0.80]">
          <Collapse
            divider={false}
            title={<Text h4>Arush</Text>}
            subtitle="About"
            contentLeft={
              <Avatar
                css={{size: '$20'}}
                src="https://i.postimg.cc/28J352gF/20221203-082215.webp"
                alt="Arush/Avatar"
                color="gradient"
                bordered
              />
            }
          >
            <Text h4>Hi, I'm a high school student, my hobby is of writing.</Text>
            <Text h4 
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Member of Har Ghar Gita organization.
            </Text>
            <div className="h-4"></div>
            <Collapse.Group shadow>
          <Collapse title="Opinion on Anonymity?">
            <Text>
              Perhaps it *Depends*, valid for good cause. 
            </Text>
          </Collapse>
          <Collapse title="What I Like?">
            <Text>
              Descent, hardworking, and independent people.
            </Text>
          </Collapse>
          <Collapse title="What languages I speak?">
            <Text>
              English, Hindi, and Maithli.
            </Text>
          </Collapse>
        </Collapse.Group>
          </Collapse>
        </div>
      </div>
      <div className="h-auto w-80 p-8 flex justify-center">
        <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
          Did you know:
        </Button>
        <Modal
          scroll
          blur
          width="600px"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Fact!
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text id="modal-description">
              {choose(randomfacts)} (Source: Google)
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={() => setVisible(false)}>
              I knew bruh
            </Button>
            <Button auto onClick={() => setVisible(false)}>
              Haha, OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default About;
//
