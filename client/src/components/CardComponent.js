import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardGroup,
  CardSubtitle,
  NavLink
} from 'reactstrap';

export default function CardComponent() {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardHeader style={{ backgroundColor: 'gray' }}>Header</CardHeader>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>kartonka #1</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>cardtext</CardText>
            <Button><NavLink href="https://twitter.com/home" className='stretched-link' target="_blank"></NavLink>Go somewhere</Button>
          </CardBody>
          <CardFooter style={{ backgroundColor: 'gray' }}>Footer</CardFooter>
        </Card>
        <Card>
          <CardHeader style={{ backgroundColor: 'gray' }}>Header</CardHeader>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>cardtext№2</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
        <CardHeader style={{ backgroundColor: 'gray' }}>Header</CardHeader>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>cardtext№2</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
