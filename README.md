<img width="1067" height="606" alt="image" src="https://github.com/user-attachments/assets/7f466def-8d28-49f3-8fdd-82971884c1c8" />
<img width="804" height="619" alt="image" src="https://github.com/user-attachments/assets/fac300a6-7860-44b2-9bdc-efed51ef22df" />


# Temp Email Block Tool - HTML/CSS/PHP Version

A comprehensive email validation tool to detect and block temporary/disposable email addresses. Built with pure HTML, CSS, JavaScript, and PHP for maximum compatibility and performance.

## Features

### 🔍 Email Validation
- Real-time email validation against 500+ temporary email providers
- Instant feedback with color-coded results
- Support for custom domain additions

### 📊 Bulk Processing
- Validate multiple emails at once
- Import from CSV/TXT files
- Export results to CSV format
- Progress tracking and statistics

### 🛠️ Domain Management
- Comprehensive database of temporary email providers
- Add/remove custom domains
- Search and filter functionality
- Import/export domain lists

### 📈 Analytics & Statistics
- Validation success rates
- Top temporary email providers
- Historical validation data
- Sample data for testing

## Installation

1. **Upload Files**
   ```bash
   # Upload all files to your web server
   # Ensure PHP 7.0+ is installed
   ```

2. **Set Permissions**
   ```bash
   chmod 755 index.php
   chmod 755 includes/
   chmod 755 api/
   ```

3. **Configure Web Server**
   - Ensure PHP sessions are enabled
   - Set appropriate file permissions
   - Configure URL rewriting if needed

## File Structure

```
temp-email-block/
├── index.php              # Main application file
├── assets/
│   ├── css/
│   │   └── style.css      # All styles and animations
│   └── js/
│       └── script.js      # Client-side functionality
├── includes/
│   └── handlers.php       # Server-side validation logic
├── api/
│   ├── validate.php       # Single email validation API
│   └── validate-bulk.php  # Bulk validation API
└── README.md
```

## Usage

### Single Email Validation
1. Navigate to the "Email Validator" tab
2. Enter an email address
3. Click "Validate Email"
4. View the result with detailed feedback

### Bulk Email Validation
1. Go to "Bulk Validation" tab
2. Enter emails (one per line, or comma/semicolon separated)
3. Or import from a file using the "Import" button
4. Click "Validate Emails"
5. Export results using the "Export" button

### Domain Management
1. Access "Domain Manager" tab
2. View built-in temporary email providers
3. Add custom domains to block
4. Search and filter domains
5. Import/export domain lists

### Statistics
1. Visit "Statistics" tab
2. View validation analytics
3. Load sample data to explore features
4. Clear statistics when needed

## API Endpoints

### Single Email Validation
```php
POST /api/validate.php
Content-Type: application/json

{
    "email": "test@example.com"
}
```

### Bulk Email Validation
```php
POST /api/validate-bulk.php
Content-Type: application/json

{
    "emails": ["email1@domain.com", "email2@tempmail.com"]
}
```

## Customization

### Adding New Temporary Email Providers
Edit `includes/handlers.php` and add domains to the `getTempEmailProviders()` function:

```php
function getTempEmailProviders() {
    return [
        // ... existing domains
        'new-temp-domain.com',
        'another-temp-provider.net'
    ];
}
```

### Styling Customization
Modify `assets/css/style.css` to change:
- Color schemes
- Animations
- Layout and spacing
- Responsive breakpoints

### JavaScript Functionality
Update `assets/js/script.js` to:
- Add new validation rules
- Modify UI interactions
- Extend statistics tracking
- Add new features

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Internet Explorer 11+ (with polyfills)

## Performance Features

- Lightweight vanilla JavaScript (no frameworks)
- CSS animations for smooth interactions
- Local storage for client-side data persistence
- Efficient PHP validation algorithms
- Responsive design for all devices

## Security Features

- Server-side validation
- Input sanitization
- XSS protection
- CSRF protection ready
- Session-based data storage

## License

This project is open source and available under the MIT License.

## Support

For support, feature requests, or bug reports, please create an issue in the project repository.
