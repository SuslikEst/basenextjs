import Header from './Header';

const appStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const App = (props) => (
  <div style={appStyle}>
    <Header />
    {props.children}
  </div>
);

export default App;