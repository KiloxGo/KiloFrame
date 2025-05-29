import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/ProfilePage/ProfileHeader";
import ProfileTabs from "../../components/ProfilePage/ProfileTabs";
import ProfilePosts from "../../components/ProfilePage/ProfilePosts";

const ProfilePage = () => {
  return (
    <Container maxWidth={"container.lg"} py={5}>
      <Flex
        px={4}
        py={10}
        pl={{ base: 0, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.200"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
