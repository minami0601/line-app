import { useState } from "react";

import App from "./App";
import { Provider } from "./context";

const ProviderIndex: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Provider
      value={{
        isOn,
        setIsOn
      }}
    >
      <App />
    </Provider>
  );
};

export default ProviderIndex;
