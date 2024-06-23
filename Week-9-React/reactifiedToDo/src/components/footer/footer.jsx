import React from "react";
import "./footer.css";

function Footer({onFilterChange,clearCompleted}) {
 
  return (
    <div>
      <div className="footer">

        <ul className="filters">
        <li>
          <a href="#/" onClick={() => onFilterChange('all')} className="selected">All</a>
        </li>
        <li>
          <a href="#/" onClick={() => onFilterChange('active')}>Active</a>
        </li>
        <li>
          <a href="#/" onClick={() => onFilterChange('completed')}>Completed</a>
        </li>
      </ul>
        <button className="clear-completed" onClick={clearCompleted} >Clear completed</button>
      </div>
    </div>
  );
}

export default Footer;
