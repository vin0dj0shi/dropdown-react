import DropDown from './components/Dropdown';

function App() {
  return (
    <div className="flex justify-center items-center">
      <DropDown 
      items={
        [
          {id: 1, label: 'Yes', value: 'yes'},
          {id: 2, label: 'Probably Not', value: 'probably not'},
        ]
      }
      />
    </div>
  );
}

export default App;
