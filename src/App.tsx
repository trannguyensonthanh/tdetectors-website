import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Challenges from './pages/Challenges';
import Solution from './pages/Solution';
import Architecture from './pages/Architecture';
import Data from './pages/Data';
import Yolo from './pages/Yolo';
import BoTSort from './pages/BoTSort';
import ViT from './pages/ViT';
import TripletLoss from './pages/TripletLoss';
import Faiss from './pages/Faiss';
import OpenVINO from './pages/OpenVINO';
import Results from './pages/Results';
import Demo from './pages/Demo';
import NotFound from './pages/NotFound';
import ScrollToTop from '@/components/ScrollToTop';
import Team from '@/pages/Team';
import { ThemeProvider } from 'next-themes';
import Future from '@/pages/Future';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/problem" element={<Problem />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/solution" element={<Solution />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/data" element={<Data />} />
              <Route path="/yolo" element={<Yolo />} />
              <Route path="/botsort" element={<BoTSort />} />
              <Route path="/vit" element={<ViT />} />
              <Route path="/triplet-loss" element={<TripletLoss />} />
              <Route path="/faiss" element={<Faiss />} />
              <Route path="/openvino" element={<OpenVINO />} />
              <Route path="/results" element={<Results />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/team" element={<Team />} />
              <Route path="/future" element={<Future />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
