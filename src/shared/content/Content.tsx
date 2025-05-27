import { FC } from "react";
import { Text, Stack, StyleProps, Link, UnorderedList } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import common from "content/common/common.json";
import landing from "content/landing/landing-config.json";
import featuredProjects from "content/featured-projects/featured-projects-config.json";
import otherProjects from "content/other-projects/other-projects-config.json";
import about from "content/about/about-config.json";
import { markdownContent } from "content/markdown-content";

export const configs = {
    common,
    landing,
    featuredProjects,
    otherProjects,
    about,
};

interface State {
    landing: string;
    about: string;
}

export enum MarkdownFile {
    Landing = "landing",
    About = "about",
}

export const useContent = (fileName: MarkdownFile) => {
    // Return the content directly from our markdown content object
    return {
        [fileName]: markdownContent[fileName]
    } as State;
};

interface Props extends StyleProps {
    children?: string;
}

export const Content: FC<Props> = ({ children, ...rest }) => {
    return (
        <Stack spacing="4">
            <ReactMarkdown
                components={{
                    p: ({ node, ...props }) => <Text {...rest} {...props} />,
                    a: ({ node, ...props }) => (
                        <Link href={props.href} target="_blank" color="primary.200" {...props} />
                    ),
                    ul: ({ node, ...props }) => {
                        const { ordered, ...rest } = props;

                        return (
                            <UnorderedList
                                {...rest}
                                data-aos="fade"
                                listStylePosition="inside"
                                display="grid"
                                gridTemplateColumns="repeat(2, 1fr)"
                                listStyleType="'‣ '"
                                fontWeight="600"
                            />
                        );
                    },
                    li: ({ node, ...props }) => {
                        const { ordered, ...rest } = props;

                        return <li data-aos="flip-up" data-aos-delay={props.index * 100 + 400} {...rest} />;
                    },
                }}
            >
                {children as string}
            </ReactMarkdown>
        </Stack>
    );
};
