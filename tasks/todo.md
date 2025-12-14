# Mobile Menu Auto-Collapse Fix

## Problem
The mobile menu in the Header component doesn't automatically collapse when a user clicks on a link. This results in the menu staying open after navigation, which is a poor user experience.

## Root Cause
The mobile menu links in the Header component don't have any onClick handlers to close the menu when a link is clicked.

## Solution Plan
1. Add onClick handlers to all mobile menu links to close the menu
2. Test the implementation to ensure the menu collapses after clicking any link
3. Add a review section with summary of changes

## Implementation Details
- Modify the Header component to add an onClick handler to all Link components in the mobile menu
- The handler will call setIsMobileMenuOpen(false) to close the menu
- This is a simple, minimal change that only affects the necessary code

## Todo Items
- [ ] Create a todo.md file with the plan
- [ ] Add onClick handlers to all mobile menu links to close the menu
- [ ] Test the implementation to ensure the menu collapses after clicking any link
- [ ] Add a review section to todo.md with summary of changes