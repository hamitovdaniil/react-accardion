import Accordion from './components/Accordion/Accardion';
import ToggleTheme from './components/toggleTheme/ToggleTheme';
function App() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xxl-8">
            <Accordion/>
          </div>
        </div>
      </div>
      {/* <ToggleTheme/> */}
    </main>
  );
}

export default App;
