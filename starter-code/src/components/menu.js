import React from 'react';

const Menu =({name})=> {
    return (
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">{name}</a>
</div>
    );
  }

export default Menu;

