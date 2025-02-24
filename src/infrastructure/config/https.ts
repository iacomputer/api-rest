import fs from 'fs'
import path from 'path'

export const https = {
  key: fs.readFileSync(path.join(process.cwd(), 'certs/key.pem')),
  cert: fs.readFileSync(path.join(process.cwd(), 'certs/cert.pem')),
}
