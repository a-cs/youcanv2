import { google } from 'googleapis';

export default async function getAuthToken() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const auth = new google.auth.GoogleAuth({
    scopes,
    projectId: process.env.GOOGLE_SHEETS_PROJECTID,
    credentials: {
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    },
  });
  const authToken = await auth.getClient();
  return authToken;
}
