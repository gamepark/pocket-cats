import { getEnumValues } from '@gamepark/rules-api'

export enum CatClan {
  RoyalClaws = 1,
  Gourmets,
  Crooks,
  DefendersOfJustice,
  Chaoticats,
  PowerCats,
  Polterkitties
}

export const playerColors = getEnumValues(CatClan)
