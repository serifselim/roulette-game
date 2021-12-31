import { Container, ContainerItem, List, ListItem, ItemImage, Title } from "./History.styled";
import purple from '../../assets/purple.svg'
import green from '../../assets/green.svg'
import red from '../../assets/red.svg'

function History(){
    return(
        <Container>
            <ContainerItem>
                <Title>
                    Last Rolls
                </Title>

                <List>
                    <ListItem>
                        <ItemImage src={purple}/>
                    </ListItem>
                    
                    <ListItem>
                        <ItemImage src={red}/>
                    </ListItem>
                    
                    <ListItem>
                        <ItemImage src={green}/>
                    </ListItem>
                    
                    <ListItem>
                        <ItemImage src={purple}/>
                    </ListItem>
                </List>


            </ContainerItem>

            <ContainerItem>
                <Title>Last 100 Rolls</Title>
            </ContainerItem>

        </Container>
    );
}

export default History;