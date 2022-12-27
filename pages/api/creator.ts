// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment'

type Creator = {
  name: string,
  age: number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Creator>
) {
  res.status(200).json({ name: 'Arush Mishra', age: moment().year() - 2005 })
}
