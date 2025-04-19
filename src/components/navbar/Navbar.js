import React, { useState } from 'react';
import './Navbar.css';
import { IconButton, TextField, Badge } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';

function Navbar({ tasks, onAddTask, onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleAddTaskClick = () => {
    const newTask = prompt('وظیفه جدید را وارد کنید:');
    if (newTask && onAddTask) {
      onAddTask(newTask);
    }
  };

  return (
    <div className="navbar-container">
      <IconButton color="primary" onClick={handleAddTaskClick}>
        <AddCircleIcon />
      </IconButton>
      <Badge badgeContent={tasks.length} color="secondary">
        <ListAltIcon />
      </Badge>
      <TextField
        variant="outlined"
        size="small"
        placeholder="جستجو..."
        value={searchText}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default Navbar;