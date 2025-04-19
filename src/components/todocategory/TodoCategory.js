import React, { useState, useEffect } from 'react';
import './TodoCategory.css';
import Navbar from '../navbar/Navbar';
import { Tabs, Tab, List, ListItem, ListItemText } from '@mui/material';

function TodoCategory() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || ["کارهای روزانه", "کارهای فوری"];
    const additionalCategories = ["کارهای تکراری", "کارهای آخر ماه", "کارهای خانه"];
    const updatedCategories = [...storedCategories, ...additionalCategories];
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    setCategories(updatedCategories);

    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredTasks = tasks.filter(task => task.category === categories[selectedCategory]);

  return (
    <div className="category-container">
      <Navbar tasks={tasks} onAddTask={() => {}} onSearch={() => {}} />
      <h1>دسته‌بندی وظایف</h1>
      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>
      <List>
        {filteredTasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoCategory;