import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { TransactionsProvider } from "./hooks/useTransactions";

import { DarkTheme, GlobalStyle, LightTheme } from "./styles/global";

export function App() {

  const [themeColor, setThemeColor] = useState(localStorage.getItem('theme') || 'light')

  localStorage.setItem('theme', themeColor)

  function toggleTheme(){
    setThemeColor(themeColor === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', themeColor)
  }

  return (
    <TransactionsProvider >

      <Header toggleTheme={toggleTheme} currentTheme={themeColor} />
      <Dashboard />
      <GlobalStyle />

      {themeColor === 'light' ? <LightTheme /> : <DarkTheme/>}

    </TransactionsProvider>
  );
}
