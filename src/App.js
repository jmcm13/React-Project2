import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Display from './components/Display';

const App = () => {
  const [data, setData] = useState([]);

  const getFormData = (props) => {
    console.log(props);
    let formData = [...data, props];
    setData(
      formData,
    );
  };

  return (
    <>
      <NavBar />
      <Form getFormData={getFormData} />
      <Display formData={data} />
    </>
  );
};

export default App;