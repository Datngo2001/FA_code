import { useState } from 'react';
import './App.css';
import ThemeSection from './components/ThemeSection';
import ThemeSectionClass from './components/ThemeSectionClass';
import ThemeSectionConsumer from './components/ThemeSectionConsumer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Context demo</h1>
        <ThemeSection></ThemeSection>
        <ThemeSectionClass></ThemeSectionClass>
        <ThemeSectionConsumer />
      </div>
    </ThemeProvider>
  );
}

export default App;
