
import Cors from 'cors'

import { NextApiRequest, NextApiResponse } from "next"



// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
  })
  
  // Helper method to wait for a middleware to execute before continuing
  // And to throw an error when an error happens in a middleware
  function runMiddleware(req:any, res:any, fn:any) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result:any) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    await runMiddleware(req, res, cors)
    res.redirect(process.env.ORIGIN || "http://lcoalhost:3000")
}