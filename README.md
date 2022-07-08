This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
```bash
1. Go to Infura (a tool for quick access to the Ethereum network) to sign up for an account. Then you can easily get the Project ID in the dashboard. Use Project Id to replace the value at INFURA_PROJECT_ID .env file (using for mint page to calculate total of token ID that have been minted)

2: Go to 'https://drive.google.com/drive/folders/1qmAhj6aT0OKup5qt14mrNmbZtYCRR09F?usp=sharing' download 'baecafeweb' folder. 
Upload 'baecafeweb' folder to your S3 bucket (follow this documentation for detailed setup step by step (included video):
'https://aws.amazon.com/vi/cloudfront/getting-started/S3/').
Replace:  'https://d28u60wydcv7iq.cloudfront.net/baecafeweb' by your CDN URL at src/components/helper.tsx and src/styles/globals.css.

3. Replace: 'https://qkcqhgta6a.execute-api.us-east-1.amazonaws.com/prod' by your API endpoints at src/components/api/axios.ts
4. 'cd' to project
 Run 'yarn' and then run 'yarn dev' to run the development server. 
 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
