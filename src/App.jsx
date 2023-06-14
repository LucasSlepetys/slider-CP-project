import { useState } from 'react';
import { shortList, list, longList } from './data';
import SlickSlide from './SlickSlide';

const App = () => {
  const [data, setData] = useState(list);

  return (
    <main>
      <SlickSlide />
    </main>
  );
};
export default App;
