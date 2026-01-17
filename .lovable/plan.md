# Plan: Remove Shopping Cart from Navbar

## Objective
Remove the unnecessary shopping cart icon from the navigation bar since Glassology Sydney is a service-based business, not an e-commerce store.

## Changes Required

### File: `src/components/layout/Navbar.tsx`

1. **Remove ShoppingCart import** (line 3)
   - Remove `ShoppingCart` from the lucide-react import

2. **Remove desktop shopping cart button** (lines 69-74)
   - Delete the entire Button component with the cart icon and badge

3. **Remove mobile shopping cart button** (lines 85-90)
   - Delete the shopping cart Button component from the mobile menu area

## Result
The navbar will be cleaner and more appropriate for a service-based business, keeping only the navigation links and the "Call Now" CTA button which is the primary action for customers.