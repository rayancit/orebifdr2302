import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import Img from "./layouts/Img";
import footerLogo from "../assets/footerlogo.png";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="py-16 bg-[#F5F5F3] font-dm ">
      <Container>
        <Flex className={"justify-between"}>
          <div>
            <h6 className="font-bold text-base text-[#262626] mb-4 capitalize">
              MENU
            </h6>
            <List className="font-normal text-sm  capitalize ">
              <ListItem
                listName={"home"}
               linkClassName={
                  " block  mb-3"
                }
                link={"/"}
              />
              <ListItem
                listName={"Shop"}
               linkClassName={
                  " block  mb-3"
                }
                link={"/shop"}
              />
              <ListItem
                listName={"About"}
               linkClassName={
                  " block  mb-3"
                }
              />
              <ListItem
                listName={"Contacts"}
               linkClassName={
                  " block  mb-3"
                }
              />
              <ListItem
                listName={"Journal"}
               linkClassName={
                  " block  mb-3"
                }
              />
            </List>
          </div>
          <div>
            <h6 className="font-bold text-base text-[#262626] mb-4 capitalize">
              SHOP
            </h6>
            <List className="font-normal text-sm  capitalize ">
              <ListItem
                listName={"Category 1"}
               linkClassName={
                  " block  mb-3"
                }
                link={"/"}
              />
              <ListItem
                listName={"Category 1"}
               linkClassName={
                  " block  mb-3"
                }
                link={"/shop"}
              />
              <ListItem
                listName={"Category 1"}
               linkClassName={
                  " block  mb-3"
                }
              />
              <ListItem
                listName={"Category 1"}
               linkClassName={
                  " block  mb-3"
                }
              />
              <ListItem
                listName={"Category 1"}
               linkClassName={
                  " block  mb-3"
                }
              />
            </List>
          </div>
          <div>
            <h6 className="font-bold text-base text-[#262626] mb-4 capitalize">
              HELP
            </h6>
            <List className="font-normal text-sm  capitalize ">
              <ListItem
                listName={"Privacy Policy"}
               linkClassName={
                  " block  mb-3"
                }
                link={"/"}
              />
              <ListItem
                listName={"Terms & Conditions"}
                linkClassName={
                  " block  mb-3"
                }
                link={"/shop"}
              />
              <ListItem
                listName={"Special E-shop"}
                linkClassName={
                  " block  mb-3"
                }
              />
              <ListItem
                listName={"Shipping"}
                linkClassName={
                  " block  mb-3"
                }
              />
              <ListItem
                listName={"Secure Payments"}
                linkClassName={
                  " block  mb-3"
                }
              />
            </List>
          </div>
          <div>
            <a
              href="tel:+(052) 611-5711"
              className="
            block font-bold text-base"
            >
              (052) 611-5711
            </a>
            <a
              href="mailto:company@domain.com"
              className="
            block font-bold text-base"
            >
              company@domain.com
            </a>
            <address className="mt-4">
              575 Crescent Ave. Quakertown, PA 18951
            </address>
          </div>
          <Img src={footerLogo} />
        </Flex>
        <Flex className={"mt-16 justify-between items-center"}>
          <Flex className={"gap-x-4 text-xl"}>
            <a href="" target="_blank">
              <FaFacebookF />
            </a>
            <a href="" target="_blank">
              <FaInstagram />
            </a>
            <a href="" target="_blank">
              <FaLinkedinIn />
            </a>
          </Flex>
          <h6>{year} Orebi Minimal eCommerce Figma Template by Adveits</h6>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
