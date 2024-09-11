import { MaterialGame, MaterialMove, MaterialRules, TimeLimit } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { CatClan } from './CatClan'
import { PlayerTurn } from './rules/PlayerTurn'
import { RuleId } from './rules/RuleId'


/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class PocketCatsRules extends MaterialRules<CatClan, MaterialType, LocationType>
  implements TimeLimit<MaterialGame<CatClan, MaterialType, LocationType>, MaterialMove<CatClan, MaterialType, LocationType>, CatClan> {
  rules = {
    [RuleId.PlayerTurn]: PlayerTurn
  }

  giveTime(): number {
    return 60
  }
}