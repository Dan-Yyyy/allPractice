import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Albums from './components/Albums';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Album from './components/Album';

const ReactQuery = () => {
  const queryClient = new QueryClient();

  return(
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Albums />}/>
          <Route path="/albums/:id" element={<Album/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
};

export default ReactQuery;