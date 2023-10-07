import { g, auth, config } from '@grafbase/sdk';

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
// const authProvider = auth.OpenIDConnect({
//   issuer: process.env.ISSUER_URL ?? ''
// })
//
// Define Data Models
// https://grafbase.com/docs/database

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 10 }),
  email: g.email().unique(),
  description: g.string().optional(),
  avatarUrl: g.url(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
    .optional()
    .list(),
  // comments: g.relation(comment).optional().list()

  // Extend models with resolvers
  // https://grafbase.com/docs/edge-gateway/resolvers
  // gravatar: g.url().resolver('user/gravatar')
});

const Project = g.model('Project', {
  title: g.string(),
  description: g.string(),
  category: g.string().search(),
  image: g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
