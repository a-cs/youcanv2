import { google } from 'googleapis';

async function getAuthToken() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const auth = new google.auth.GoogleAuth({
    scopes,
    projectId: process.env.GOOGLE_SHEETS_PROJECTID,
    credentials: {
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    },
  });
  const authToken = await auth.getClient();
  return authToken;
}

export default async function GetSheetFromGoogle(sheetName: string) {
  const auth = await getAuthToken();

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: sheetName,
  });

  let sheetValues = response.data.values;
  sheetValues = sheetValues?.slice(1);

  return sheetValues;
}
