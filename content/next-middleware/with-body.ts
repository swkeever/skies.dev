// pages/api/rocket.js
import { NextApiRequest, NextApiResponse } from 'next'
import withMetrics from 'lib/middleware/with-metrics.ts'
import withAuth from 'lib/middleware/with-auth.ts' // highlight-line
import yup from 'yup' 

const rockets = [
  {
    id: 0,
    name: 'Falcon V',
    org: 'Space X',
  },
  {
    id: 1,
    name: 'New Glenn',
    org,
  },
]


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    rockets.push(req.body)
  }

  return res.status(200).send('🚀')
}

export default withMetrics(withAuth(withBody({
  POST: yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
})
}, handler))) // highlight-line