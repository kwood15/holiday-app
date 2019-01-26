import React from "react";
import { Flex } from "@rebass/grid";
import { FooterWrapper } from "./SharedStyles";

export const Footer = () => (
  <FooterWrapper className="footer">
    <Flex alignItems="center" flexDirection="column" py={3}>
      <p>&copy;2019.</p>
    </Flex>
  </FooterWrapper>
);
