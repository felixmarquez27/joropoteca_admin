import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import GlobalStyle from "./theme/GlobalStyle"
import {ProviderSession} from './context/contextSession'


const container=document.getElementById('root');
const root=createRoot(container);
root.render(
  <React.StrictMode>
  <GlobalStyle/>
  
    <ProviderSession>
    <App />
    </ProviderSession>
  
</React.StrictMode>
)



