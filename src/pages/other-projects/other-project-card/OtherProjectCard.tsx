import { FC } from "react";

import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Tags } from "shared/tags/Tags";
import { ProjectCardFooter } from "shared/project-card-footer/ProjectCardFooter";

interface Props {
    id: string;
    title: string;
    demo?: string;
    github?: string;
    role?: string;
    tags: string[];
    description: string;
    readMore?: string;
    image: string;
    jpg: string;
}

export const OtherProjectCard: FC<Props> = ({ id, title, demo, github, role, tags, description, readMore, image, jpg }) => {
    return (
        <Flex
            alignItems={{ base: "flex-start", lg: "center" }}
            gap="10"
            id={`other-project-card-${id}`}
            py={{ base: "8", md: "8" }}
        >
            <Box flex="0.25" display={{ base: "none", md: "block" }} data-aos="fade-up" data-aos-offset="200">
                <picture>
                    <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/${image}`}></source>
                    <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/${jpg}`}></source>
                    <Image ignoreFallback src={`${process.env.PUBLIC_URL}/${image}`} borderRadius="xl" alt={`${title}-cover-image`} />
                </picture>
            </Box>
            <Flex w="100%" direction="column" alignContent="center" flex={1}>
                <Box>
                    <Heading fontSize="2xl" data-aos="fade-down" data-aos-offset="200">
                        {title}
                    </Heading>
                    <Text
                        pt="2"
                        fontSize="sm"
                        fontWeight="600"
                        opacity="0.6"
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-offset="200"
                    >
                        {role}
                    </Text>
                    <Text py="2" data-aos="fade" data-aos-delay="200" data-aos-offset="200">
                        {description}
                    </Text>
                    <Tags tags={tags} id={id} size="xs" />
                </Box>
                <ProjectCardFooter readMore={readMore} github={github} demo={demo} />
            </Flex>
        </Flex>
    );
};
