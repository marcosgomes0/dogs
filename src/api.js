// repositório de endpoints

export const API_URL = 'https://dogsapi.origamid.dev/json';



export function LOST_PASSWORD (body) {
  return {
    url: API_URL + `/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(body)
  }
}
}
export function RESET_PASSWORD (body) {
  return {
    url: API_URL + `/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(body)
  }
}
}

export function PHOTO_DELETE (id, token) {
  return {
    url: API_URL + `/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token
      },
  }
}
}

export function COMMENT_POST ( id, token, comment ) {
  return {
    url: API_URL + `/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(comment)
  }
}
}

export function PHOTO_GET (id) {
  return {
    url: API_URL + `/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store'
  }
}
}

export function PHOTOS_GET ({page, total, user}) {
  return {
    url: API_URL + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store'
  }
}
}

export function PHOTO_POST (formData, token) {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData
    }
  }
}

export function REGISTER_USER (body) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function TOKEN_POST (body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}

export function GET_USER (token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      },
    }
  }
}

export function VALIDATE_TOKEN(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
    }
  }
}

export function GET_STATS(token) {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      },
    }
  }
}
