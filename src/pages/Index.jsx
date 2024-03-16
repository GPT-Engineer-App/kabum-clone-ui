import React from "react";
import { Box, Flex, Heading, Text, Input, Button, Image, Grid, GridItem, Container } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="blue.500" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading color="white" size="lg">
              Kabum
            </Heading>
            <Flex align="center">
              <Input placeholder="Buscar" bg="white" borderRadius="full" px={4} py={2} mr={4} />
              <Button leftIcon={<FaSearch />} colorScheme="teal" borderRadius="full" px={6}>
                Buscar
              </Button>
              <Button leftIcon={<FaShoppingCart />} variant="ghost" color="white" ml={4}>
                Carrinho
              </Button>
              <Button leftIcon={<FaUser />} variant="ghost" color="white">
                Login
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Banner */}
      <Box>
        <Image src="https://images.unsplash.com/photo-1546502208-81d149d52bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHNhbGUlMjBiYW5uZXJ8ZW58MHx8fHwxNzEwNjI0NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
      </Box>

      {/* Categories */}
      <Container maxW="container.lg" my={8}>
        <Heading size="lg" mb={4}>
          Categorias
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlfGVufDB8fHx8MTcxMDYyNDYyM3ww&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Hardware</Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1705332112231-4dff35a9587c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHBlcmlwaGVyYWxzfGVufDB8fHx8MTcxMDYyNDYyM3ww&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Periféricos</Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwwfHx8fDE3MTA2MjQ2MjN8MA&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Games</Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1602009445825-70e98455ea7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNoYWlyfGVufDB8fHx8MTcxMDYyNDYyNHww&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Cadeiras</Heading>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Featured Products */}
      <Container maxW="container.lg" my={8}>
        <Heading size="lg" mb={4}>
          Destaques
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1629429408209-1f912961dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZXxlbnwwfHx8fDE3MTA2MjQ2MjR8MA&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Mouse Gamer</Heading>
              <Text fontWeight="bold" color="green.500">
                R$ 199,90
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZHxlbnwwfHx8fDE3MTA2MjQ2MjR8MA&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Teclado Mecânico</Heading>
              <Text fontWeight="bold" color="green.500">
                R$ 349,90
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1593112723196-e841f5c60799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0fGVufDB8fHx8MTcxMDYyNDYyNXww&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Headset Gamer</Heading>
              <Text fontWeight="bold" color="green.500">
                R$ 279,90
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb25pdG9yfGVufDB8fHx8MTcxMDYyNDYyNXww&ixlib=rb-4.0.3&q=80&w=1080" mb={2} />
              <Heading size="md">Monitor 144Hz</Heading>
              <Text fontWeight="bold" color="green.500">
                R$ 1.499,90
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between">
            <Box>
              <Heading size="md" mb={2}>
                Sobre
              </Heading>
              <Text>Quem Somos</Text>
              <Text>Política de Privacidade</Text>
              <Text>Termos de Uso</Text>
            </Box>
            <Box>
              <Heading size="md" mb={2}>
                Atendimento
              </Heading>
              <Text>Central de Ajuda</Text>
              <Text>Trocas e Devoluções</Text>
              <Text>Fale Conosco</Text>
            </Box>
            <Box>
              <Heading size="md" mb={2}>
                Redes Sociais
              </Heading>
              <Text>Facebook</Text>
              <Text>Instagram</Text>
              <Text>Twitter</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
