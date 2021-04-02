import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Márcio Dias</Text>
                <Text color="gray.300" fontSize="small">contato@marciodias.me</Text>
            </Box>
            <Avatar size="md" name="Márcio Dias" />
        </Flex>
    );
}