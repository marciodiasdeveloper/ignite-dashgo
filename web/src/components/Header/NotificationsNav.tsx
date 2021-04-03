import { Icon, HStack, useColorMode, Button } from '@chakra-ui/react';
import { 
    RiNotificationLine, 
    RiUserAddLine, 
    RiMoonFill,
    RiSunFill
} from 'react-icons/ri';

export function NotificationsNav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack
            spacing={["6", "8"]}
            mx={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
        >
            <Button onClick={toggleColorMode} variant="unstyled">
                {colorMode === "light" ? 
                    <Icon as={RiMoonFill} fontSize="20" /> : 
                    <Icon as={RiSunFill} fontSize="20" />
                }
            </Button>
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
    );
}