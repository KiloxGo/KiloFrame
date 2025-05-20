import { Box, Text, VStack, Flex, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>

        <Text
          fontWeight={"bold"}
          fontSize={12}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          {" "}
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Unicorn"
        followers={7210}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser />
      <SuggestedUser />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 KiloxGo. All rights reserved.
        <Link
          href="https://github.com/KiloxGo"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          KiloxGo
        </Link>
      </Box>
      <Box fontSize={12} color={"gray.500"} mt={5}>
        Privacy Policy · Terms of Service
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
