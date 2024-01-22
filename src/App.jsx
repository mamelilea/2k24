import Particles from 'react-particles'
import { loadFireworksPreset } from 'tsparticles-preset-fireworks'
import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'
import Countdown from 'react-countdown'

function App() {
  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine)
  }

  function timeLeft() {
    const newYearDate = new Date ("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  const [newYearMessage, setNewYearMessage] = useState(["Babaiy 2k23!"])

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className='w-screen h-screen flex flex-col items-center justify-center min-h-screen gap-4'>
        <span className='text-white text-4xl font-bold px-4 z-50'>
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursor
            cursorStyle={"_"}
          />
        </span>
        <div className='z-50 text-white font-bold text-2xl '>
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat","tahun baru", "2k24"])}/>
        </div>
        <audio className='opacity-5' controls autoPlay loop src="../src/assets/audio/1.mp3"></audio>
      </div>
    </>
  )
}

export default App
