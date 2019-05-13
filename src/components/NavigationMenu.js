import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SubjectIcon from "@material-ui/icons/Subject";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";

const IndexLink = props => <Link to="/" {...props} />;
const OrdersLink = props => <Link to="/orders/" {...props} />;
const ClientsLink = props => <Link to="/clients/" {...props} />;
const ProductsLink = props => <Link to="/products/" {...props} />;

export default function NavigationMenu() {
  return (
    <List>
      <div>
        <ListItem button component={IndexLink}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Início" />
        </ListItem>
        <ListItem button component={OrdersLink}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Pedidos" />
        </ListItem>
        <ListItem button component={ClientsLink}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button component={ProductsLink}>
          <ListItemIcon>
            <SubjectIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" />
        </ListItem>
      </div>
    </List>
  );
}
