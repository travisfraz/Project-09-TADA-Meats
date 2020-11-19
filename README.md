#MERN Full Stack Heroku Template

>This repository is built with the intention of being a Heroku ready deployable app. Simply pull this template and begin your development.

## Quick Start Tools

```bash
# Run the server for development
npm run dev

# Run the client for develipment
npm start

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## FYI Heroku deployable code

# Server.js
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
(Configuration condition, directs requests to the client if not found in the server)

# package.json (Server side)
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
(Post build script executed when pushed to Heroku)