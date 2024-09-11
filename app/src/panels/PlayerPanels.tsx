/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { CatClan } from '@gamepark/pocket-cats/CatClan'
import { StyledPlayerPanel, usePlayers } from '@gamepark/react-game'
import { FC } from 'react'
import { createPortal } from 'react-dom'

export const PlayerPanels: FC<any> = () => {
  const players = usePlayers({ sortFromMe: true })
  const root = document.getElementById('root')
  if (!root) {
    return null
  }

  return createPortal(
    <>
      {players.map((player, index) =>
        <StyledPlayerPanel key={player.id} player={player} color={playerColorCode[player.id]} css={panelPosition(index)}/>
      )}
    </>,
    root
  )
}
const panelPosition = (index: number) => css`
  position: absolute;
  right: 1em;
  top: ${8.5 + index * 16}em;
  width: 28em;
  height: 14em;
`

export const playerColorCode: Record<CatClan, string> = {
  [CatClan.RoyalClaws]: 'purple',
  [CatClan.Gourmets]: 'green',
  [CatClan.Crooks]: 'orange',
  [CatClan.DefendersOfJustice]: 'red',
  [CatClan.Chaoticats]: 'pink',
  [CatClan.PowerCats]: 'dodgerblue',
  [CatClan.Polterkitties]: 'blue'
}