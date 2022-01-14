import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import TokensPage from './pages/tokens'
import GrowthPage from './pages/growth'
import ConnectButton from './components/ConnectButton'
import { useWeb3ProviderContext, WebProviderContext } from './context/web3ProviderContext'
import TokenizeMarketSelect from './pages/tokenize-market-select'

function App() {
  const web3ProviderContext = useWeb3ProviderContext()
  const [_currentChangeId, setCurrentChainId] = useState<number | null>(null)

  const updateChain = (chainId: number) => {
    setCurrentChainId(+chainId)
  }

  return (
    <WebProviderContext.Provider value={web3ProviderContext}>
      <div className="container mx-auto">
        <header className="flex justify-between py-4">
          <h1>Launchpad</h1>
          <ConnectButton onChainChanged={updateChain} />
        </header>
        <main className="flex py-12 w-full flex-col">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tokens" element={<TokensPage />} />
              <Route path="/growth" element={<GrowthPage />} />
              <Route path="/tokenize" element={<TokenizeMarketSelect />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </WebProviderContext.Provider>
  )
}

export default App
