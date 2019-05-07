import request from 'superagent'

const magicApiUrl = 'https://api.magicthegathering.io/v1/cards'

export function getCards () {
    return request.get(magicApiUrl)
        .then((card) => {
            return card.body.cards
        })
}