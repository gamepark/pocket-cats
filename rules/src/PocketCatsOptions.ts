import { OptionsSpec } from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import { CatClan, playerColors } from './CatClan'

/**
 * This is the options for each player in the game.
 */
type PlayerOptions = { id: CatClan }

/**
 * This is the type of object that the game receives when a new game is started.
 * The first generic parameter, "{}", can be changed to include game options like variants or expansions.
 */
export type PocketCatsOptions = {
  players: PlayerOptions[]
}

/**
 * This object describes all the options a game can have, and will be used by GamePark website to create automatically forms for you game
 * (forms for friendly games, or forms for matchmaking preferences, for instance).
 */
export const PocketCatsOptionsSpec: OptionsSpec<PocketCatsOptions> = {
  players: {
    id: {
      label: (t: TFunction) => t('Cat Clan'),
      values: playerColors,
      valueSpec: color => ({ label: t => getPlayerName(color, t) })
    }
  }
}

export function getPlayerName(playerId: CatClan, t: TFunction) {
  switch (playerId) {
    case CatClan.RoyalClaws:
      return t('clan.1')
    case CatClan.Gourmets:
      return t('clan.2')
    case CatClan.Crooks:
      return t('clan.3')
    case CatClan.DefendersOfJustice:
      return t('clan.4')
    case CatClan.Chaoticats:
      return t('clan.5')
    case CatClan.PowerCats:
      return t('clan.6')
    case CatClan.Polterkitties:
      return t('clan.7')
  }
}