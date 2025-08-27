import React, { createContext, useContext, useEffect, useState, useRef } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [bgPlaylist] = useState([
    "/sounds/Respite.mp3",
    "/sounds/On Little Cat Feet - OneShot OST [KVqwvU49JLg].mp3",
    "/sounds/Limbus Company - Audite Pauper.mp3",
    "/sounds/House Set of LoLK_ The Reversed Wheel of Fortune ag Guest Mix.mp3",
    "/sounds/Yuyuko's Theme - Border of Life.mp3",
    "/sounds/A Tale of Eternity.mp3",
  ]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const bgAudioRef = useRef(new Audio(bgPlaylist[0])); // una sola instancia

  // Inicializamos la instancia al montar
  useEffect(() => {
    const audio = bgAudioRef.current;
    audio.volume = 0.3;
    audio.loop = false;

    const handleEnded = () => {
      const nextTrack = (currentTrack + 1) % bgPlaylist.length;
      setCurrentTrack(nextTrack);
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [bgPlaylist]);

  // Cambiar canción cuando currentTrack cambia
  useEffect(() => {
    const audio = bgAudioRef.current;
    audio.src = bgPlaylist[currentTrack];
    if (isPlaying) audio.play().catch(() => {});
  }, [currentTrack, bgPlaylist]);

  // Pausar o reanudar sin reiniciar
  useEffect(() => {
    const audio = bgAudioRef.current;
    if (isPlaying) audio.play().catch(() => {});
    else audio.pause();
  }, [isPlaying]);

  const toggleMusic = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % bgPlaylist.length);
  };

  const playSound = (url) => {
    const sfx = new Audio(url);
    sfx.volume = 0.05;
    sfx.play();
  };

  return (
    <AudioContext.Provider value={{ playSound, toggleMusic, isPlaying, nextTrack }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
