const baseURL = 'http://localhost:3000/api/planets/'

export default {
  getPlanets(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postPlanet(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  updateBooking(id, payload){
    return fetch(baseURL + id,{
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteBooking(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}