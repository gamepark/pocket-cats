/** @jsxImportSource @emotion/react */
import { RuleId } from '@gamepark/pocket-cats/rules/RuleId'
import { ComponentType } from 'react'
import { PlayerTurnHeader } from './PlayerTurnHeader'

export const Headers: Partial<Record<RuleId, ComponentType>> = {
  [RuleId.PlayerTurn]: PlayerTurnHeader
}