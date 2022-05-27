import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Albums from './components/Albums';
import AlbumItem from './components/AlbumItem';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const ReactQuery = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return(
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Albums />}/>
          <Route path="/albums/:id" element={<AlbumItem/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
};

export default ReactQuery;