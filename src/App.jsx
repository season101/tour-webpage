import Tours from './Tours';
const App = () => {
  const url = 'https://course-api.com/react-tours-project';
  return (
    <>
      <h1>Our Tours</h1>
      <Tours url={url} />
    </>
  );
};
export default App;
