declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test' | 'example'
    PORT?: string
    DATABASE_URL: string
    GITHUB_ID: string
    GITHUB_SECRET: string
    NEXTAUTH_SECRET: string
  }
}
