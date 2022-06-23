import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <div>
          <SearchPanel />
          <TodoList />
        </div>
      </main>
      <AppFooter />
    </>
  );
};

export default App;
