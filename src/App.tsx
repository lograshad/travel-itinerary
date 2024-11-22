import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import ItineraryDashboard from './components/ItineraryDashboard';
import SearchResults from './components/SearchResults';
import Auth from './components/Auth';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ItineraryDashboard />} />
            <Route path="/search/:type" element={<SearchResults />} />
            <Route path="/auth" element={<Auth 
                              onLogin={(email, password) => console.log('Login:', email, password)}
                              onRegister={(email, password) => console.log('Register:', email, password)}
            />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;