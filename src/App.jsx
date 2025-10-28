import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import Reasons from './pages/Reasons.jsx';
import Quiz from './pages/Quiz.jsx';
import Gallery from './pages/Gallery.jsx';
import Letters from './pages/Letters.jsx';
import LetterDetail from './pages/LetterDetail.jsx';
import Playlist from './pages/Playlist.jsx';
import NotForYou from './pages/NotForYou.jsx';
import MusicPlayerBar from './components/MusicPlayerBar.jsx';
import CallReminder from './components/CallReminder.jsx';

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  const handleAuthorize = () => {
    setIsAuthorized(true);
    navigate('/playlist', { replace: true });
  };

  const handleReject = () => {
    setIsAuthorized(false);
    navigate('/not-for-you', { replace: true });
  };

  return (
    <div className={`text-white ${isAuthorized ? 'pb-36' : ''}`}>
      <Routes>
        <Route path="/" element={<Landing onAuthorize={handleAuthorize} onReject={handleReject} />} />
        <Route path="/not-for-you" element={<NotForYou />} />
        <Route path="/home" element={isAuthorized ? <Home /> : <Navigate to="/" replace />} />
        <Route path="/reasons" element={isAuthorized ? <Reasons /> : <Navigate to="/" replace />} />
        <Route path="/quiz" element={isAuthorized ? <Quiz /> : <Navigate to="/" replace />} />
        <Route path="/gallery" element={isAuthorized ? <Gallery /> : <Navigate to="/" replace />} />
        <Route path="/letters" element={isAuthorized ? <Letters /> : <Navigate to="/" replace />} />
        <Route path="/letters/:letterId" element={isAuthorized ? <LetterDetail /> : <Navigate to="/" replace />} />
        <Route path="/playlist" element={isAuthorized ? <Playlist /> : <Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {isAuthorized && <MusicPlayerBar />}
      {isAuthorized && <CallReminder />}
    </div>
  );
}
