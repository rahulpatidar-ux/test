/**
 * Calculates the total price after applying a discount.
 * @param {number} price - Original price
 * @param {number} discountPercent - Discount percentage (0-100)
 * @returns {number} Final price after discount
 */
function calculateDiscountedPrice(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount percent must be between 0 and 100');
  }
  return price - (price * discountPercent / 100);
}

/**
 * Formats a number as currency.
 * @param {number} amount - The amount to format
 * @param {string} currencyCode - ISO currency code (e.g. 'USD', 'INR')
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount, currencyCode = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode
  }).format(amount);
}

module.exports = { calculateDiscountedPrice, formatCurrency };
<!-- DocuWriter test -->
