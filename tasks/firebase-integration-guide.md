# Firebase Integration Guide

## Overview

This guide explains how the form in the application is now connected to Firebase Firestore to store contact form submissions.

## Changes Made

### 1. Firebase Installation
- Added the Firebase package to the project: `npm install firebase`

### 2. Firebase Configuration
- Created a new configuration file at `src/lib/firebase.ts` with your Firebase project details
- This file initializes the Firebase app and exports the Firestore database instance

### 3. Contact Form Integration
- Updated the ContactForm component (`src/components/home/ContactForm.tsx`) to:
  - Import Firebase Firestore methods and the database instance
  - Replace the simulated form submission with a real submission to Firestore
  - Store form data in a "contacts" collection in Firestore
  - Include a timestamp when the form was submitted

## Form Submission Process

When a user submits the contact form:

1. The form data is collected (name, phone, city, panel type, and budget)
2. A timestamp is added to the data
3. The data is submitted to Firestore in the "contacts" collection
4. The user sees a success message if the submission is successful
5. The form is reset if the submission is successful
6. The user sees an error message if the submission fails

## Viewing Submissions

To view the form submissions:

1. Go to your Firebase Console
2. Select your project "react-app-ed334"
3. Click on "Firestore Database" in the left sidebar
4. You should see a "contacts" collection with your form submissions

## Testing the Form

To test the form:

1. Start the development server with `npm run dev`
2. Navigate to the contact form on your website
3. Fill out the form with test data
4. Submit the form
5. Check your Firebase Firestore console to verify the data was stored

## Troubleshooting

If you encounter issues:

1. Check the browser console for error messages
2. Verify your Firebase configuration is correct
3. Ensure your Firestore database is properly set up in test mode
4. Check that the "contacts" collection is being created in Firestore

## Next Steps

1. Consider adding validation to the form fields
2. Implement email notifications when new form submissions are received
3. Add an admin page to view and manage form submissions