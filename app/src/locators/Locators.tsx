import { LocationType } from '@gamepark/pocket-cats/material/LocationType'
import { MaterialType } from '@gamepark/pocket-cats/material/MaterialType'
import { CatClan } from '@gamepark/pocket-cats/CatClan'
import { Locator } from '@gamepark/react-game'

export const Locators: Partial<Record<LocationType, Locator<CatClan, MaterialType, LocationType>>> = {}
