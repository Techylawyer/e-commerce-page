// import { useState } from "react";

type AppProps = {
  message: string
}

const appmsg: AppProps = {
  message: 'Hello, World!',
}

function App({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}) {
  // const [isDarkMode: boolean, setIsDarkMode : React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
  const handleClick = (evt: React.ChangeEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    setIsDarkMode(!isDarkMode)
  }
  return (
    <Message message={appmsg.message} />
  )
}

function Message({ message }: AppProps) {
  return <div className="text-3xl text-center bg-orange-50 font-semibold">{message}</div>
}



export default App
