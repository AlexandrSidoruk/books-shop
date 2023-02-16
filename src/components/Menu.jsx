import {Menu, Popup, List, Button, Image} from 'semantic-ui-react'
import React from "react";

const CardComponent = ({title, id, image, removeFromCard}) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCard.bind(this, id)} color={'red'}>Remove</Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const MenuComponent = ({totalPrice, count, items}) => (
    <Menu>
        <Menu.Item name='browse'> Shop books </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup'> ALL &nbsp; <b>{totalPrice}</b>$. </Menu.Item>

            <Popup trigger={<Menu.Item name='help'> Card (<b>{count}</b>) </Menu.Item>}
                   content={items.map((book, i) => (<CardComponent key={i} {...book} />))}
                   on="click"
                   hideOnScroll/>
        </Menu.Menu>
    </Menu>
);

export default MenuComponent;