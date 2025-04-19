import React, { useState, useEffect } from 'react';
import './Todos.css';
import { Checkbox, List, ListItem, ListItemText, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../navbar/Navbar';

function Todos() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  useEffect(() => {
    const defaultCategories = ["کارهای روزانه", "کارهای فوری", "کارهای تکراری", "کارهای آخر ماه", "کارهای خانه"];
    localStorage.setItem('categories', JSON.stringify(defaultCategories));
    setCategories(defaultCategories);
  }, []);

  const addTask = (newTask) => {
    if (newTask.trim() !== '' && selectedCategory) {
      setTasks([...tasks, { text: newTask, category: selectedCategory, completed: false }]);
      setTask(''); // Clear the input box after adding a task
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);

    // Add completed tasks to localStorage for reminders
    const completedTasks = updatedTasks.filter((t) => t.completed);
    localStorage.setItem('reminders', JSON.stringify(completedTasks));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setAccordionExpanded(false);
  };

  return (
    <div className="todos-container">
      <Navbar tasks={tasks} onAddTask={addTask} onSearch={() => {}} />
      <h1>لیست انجام کار</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'flex-start' }}>
        <Accordion
          style={{ flex: 1 }}
          expanded={accordionExpanded}
          onChange={() => setAccordionExpanded(!accordionExpanded)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <span>{selectedCategory || 'دسته‌بندی‌ها'}</span>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {categories.map((category, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  selected={selectedCategory === category}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <TextField
          label="وظیفه جدید"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ flex: 3 }}
        />
        <Button variant="contained" color="primary" onClick={() => addTask(task)}>
          اضافه کردن
        </Button>
      </div>
      <List>
        {tasks.map((t, index) => (
          <ListItem key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={t.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <ListItemText
              primary={t.text}
              secondary={`دسته‌بندی: ${t.category}`}
              style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Todos;