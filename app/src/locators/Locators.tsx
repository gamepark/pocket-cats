import { LocationType } from '@gamepark/pocket-cats/material/LocationType'
import { MaterialType } from '@gamepark/pocket-cats/material/MaterialType'
import { PlayerColor } from '@gamepark/pocket-cats/PlayerColor'
import { Locator } from '@gamepark/react-game'

export const Locators: Partial<Record<LocationType, Locator<PlayerColor, MaterialType, LocationType>>> = {}
