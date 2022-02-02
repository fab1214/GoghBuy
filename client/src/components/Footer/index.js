import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
<<<<<<< HEAD
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position="sticky"
      mt="700px"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 goghbuy. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"https://twitter.com/"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"https://youtube.com"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://instagram.com"}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={"Facebook"} href={"https://facebook.com"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"GitHub"}
            href={"https://github.com/fab1214/goghbuy"}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
=======
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
			position="sticky"
			mt="700px"
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Text>© 2022 goghbuy. All rights reserved</Text>
				<Stack direction={"row"} spacing={6}>
					<SocialButton label={"Twitter"} href={"https://twitter.com/"}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={"YouTube"} href={"https://youtube.com"}>
						<FaYoutube />
					</SocialButton>
					<SocialButton label={"Instagram"} href={"https://instagram.com"}>
						<FaInstagram />
					</SocialButton>
					<SocialButton label={"Facebook"} href={"https://facebook.com"}>
						<FaFacebook />
					</SocialButton>
					<SocialButton
						label={"GitHub"}
						href={"https://github.com/fab1214/goghbuy"}
					>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
>>>>>>> 9cffad2a535df1ff4efc061275e86b813dd71472
};

export default Footer;
