import { MaterialGameSetup } from '@gamepark/rules-api'
import { PocketCatsOptions } from './PocketCatsOptions'
import { PocketCatsRules } from './PocketCatsRules'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'

/**
 * This class creates a new Game based on the game options
 */
export class PocketCatsSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, PocketCatsOptions> {
  Rules = PocketCatsRules

  setupMaterial(_options: PocketCatsOptions) {
  }

  start() {
    this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0])
  }
}