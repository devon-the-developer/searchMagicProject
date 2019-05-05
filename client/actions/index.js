import request from 'superagent'

export function getMagicCards(searchTerm) {
    console.log('getMagicCards firing')
    return request
        .get('/magiccards/' + searchTerm)
        .then(res => {
         console.log(res.body)
        })
        .catch(err => {
            console.log(err.message, err.response)
        });
}