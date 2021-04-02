import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Márcio Dias</Text>
                    <Text color="gray.300" fontSize="small">contato@marciodias.me</Text>
                </Box>
            )}
            <Avatar size="md" name="Márcio Dias" />
        </Flex>
    );
}