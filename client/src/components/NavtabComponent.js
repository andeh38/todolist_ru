import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

export default function NavtabComponent(props) {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const tabs = props.children.map((child) => {
    const id = props.children.indexOf(child);
    return (
      <NavItem key={id}>
        <NavLink
          style={activeTab === id ? style1 : style2}
          className={classnames({ active: activeTab === id })}
          onClick={() => {
            toggle(id);
          }}>
          {`tag №${id+1}`}
        </NavLink>
      </NavItem>
    );
  });
  const content = props.children.map((child) => {
    const id = props.children.indexOf(child);
    return (
      <TabContent activeTab={activeTab} key={id}>
        <TabPane tabId={id} >
          {child}
        </TabPane>
      </TabContent>
    );
  });

  return (
    <div>
      <Nav
        tabs={true}
        nav-pills="true"
        className="d-flex justify-content-center">
        {tabs}
      </Nav>
      {content}
    </div>
  );
}
const style1 = {
  backgroundColor: 'lightblue',
  cursor: 'pointer'
};
const style2 = {
  backgroundColor: 'white',
  cursor: 'pointer'
};
