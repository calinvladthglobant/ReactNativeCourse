/*
Docs: https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
 */
import axios from 'axios'

const KEY = 'AIzaSyBwBVqHpW1Da-45QYU0gug6tJ4HzH5HLaE'

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${KEY}`
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  })

  return response.data.idToken
}


export async function login(email, password) {
  return await authenticate('signInWithPassword', email, password)
}

export async function createUser(email, password) {
  return await authenticate('signUp', email, password)
}