/** @jsxImportSource @emotion/react */
import { PocketCatsOptionsSpec } from '@gamepark/pocket-cats/PocketCatsOptions'
import { PocketCatsRules } from '@gamepark/pocket-cats/PocketCatsRules'
import { PocketCatsSetup } from '@gamepark/pocket-cats/PocketCatsSetup'
import { GameProvider, MaterialGameAnimations, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="pocket-cats" Rules={PocketCatsRules} optionsSpec={PocketCatsOptionsSpec} GameSetup={PocketCatsSetup}
                  material={Material} locators={Locators} animations={new MaterialGameAnimations()}>
      <App/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)
