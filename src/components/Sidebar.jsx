import React from "react";

const Sidebar = ({ contacts, onSelectChat }) => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Chats</h2>
      <ul>
        {contacts.map((c, i) => (
          <li
            key={i}
            className="p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => onSelectChat(c)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

