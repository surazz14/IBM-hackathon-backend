import * as jwt from 'jsonwebtoken'
import * as pick from 'lodash/pick'

export const createToken = (user: any, secret: string) => {
  const createToken = jwt.sign(
    {
      user: pick(user, ['id']),
    },
    secret,
    {
      expiresIn: '24h',
    },
  )

  return createToken
}

export const decodeToken = (token: string, secret: string) => {
  const decodedToken = jwt.verify(token, secret)
  return decodedToken
}
