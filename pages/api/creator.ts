// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Creator = {
  name: string,
  age: number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Creator>
) {
  res.status(200).json({ name: 'Abhyudaya Deep Verma', age: 16 })
}
