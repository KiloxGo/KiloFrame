import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As Kilox" size={"lg"} src="/profilepic.png" />
        <Text>As KiloxGo</Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        color={"blue.500"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
