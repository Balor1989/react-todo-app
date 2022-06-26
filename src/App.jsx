import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const todos = [
    { id: "id-1", task: "Learn React" },
    { id: "id-2", task: "Learn Vue" },
    { id: "id-3", task: "Learn JavaScript" },
    { id: "id-4", task: "Learn TypeScript" },
  ];

  return (
    <>
      <AppHeader />
      <main>
        <div>
          <SearchPanel />
          <TodoList todos={todos} />
        </div>
      </main>
      <AppFooter />
    </>
  );
};

export default App;
