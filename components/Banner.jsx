import {
  useContract,
  useActiveListings,
  useContractMetadata,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import css from "../styles/css.module.css";

export default function Banner() {
  const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS);
  const { data: listings, isLoading } = useActiveListings(marketplace);
  // Load contract metadata
  const { data: contractMetadata, isLoading: loadingMetadata } =
    useContractMetadata(marketplace);
  return (
    <Flex className={`${css.bannerContaint}`}
      position={'fixed'}
      w={'full'}
      h={{ base: '30vh', md: '90vh' }}
      animation={'animate 8s ease-in-out infinite, bgMove 16s linear infinite'}
      backgroundImage={
        'url(./stars.png)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      top={'64px'}>
      <VStack style={{ boxShadow: '0px 5px 20px -4px #0000008c' }}
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack className={css.bannerText} maxW={'2xl'} align={'center'} spacing={6}>
          <Text className={css.slideInLeft}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              {contractMetadata?.name}
          </Text>
              <Text color={'white'} className={css.slideInRight}>{contractMetadata?.description}</Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
