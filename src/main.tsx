
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx'
import './index.css'

// Get the publishable key from environment variables
const PUBLISHABLE_KEY = "pk_test_Y2FzdWFsLWRpbmdvLTMxLmNsZXJrLmFjY291bnRzLmRldiQ";

// Log that we're using the provided key
console.log("Using Clerk for authentication");

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
);
