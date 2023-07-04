const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "615626774498-hhsoe5j6v00krot3dmmfbk4j9226ji9n.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "a31635d3878fd630b883";
GITHUB_CLIENT_SECRET = "88cfdefd3f4ec41a49144ee46485a8af8ae7b829";

FACEBOOK_APP_ID = "2467484906749251";
FACEBOOK_APP_SECRET = "52bff44097e89168355c4a5ff442eea9";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
