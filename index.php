<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temp Email Block - Advanced Email Validation Tool</title>
    <meta name="description" content="Professional email validation tool to detect and block temporary/disposable email addresses. Protect your platform from spam and fake registrations.">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <!-- Navigation -->
        <nav class="navigation">
            <div class="nav-header">
                <div class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="logo-text">
                        <h1>Temp Email Block</h1>
                        <p>Advanced email validation and filtering</p>
                    </div>
                </div>
            </div>
            
            <div class="nav-tabs">
                <button class="nav-tab active" data-tab="validator">
                    <i class="fas fa-envelope"></i>
                    <span>Email Validator</span>
                </button>
                <button class="nav-tab" data-tab="bulk">
                    <i class="fas fa-users"></i>
                    <span>Bulk Validation</span>
                </button>
                <button class="nav-tab" data-tab="domains">
                    <i class="fas fa-cog"></i>
                    <span>Domain Manager</span>
                </button>
                <button class="nav-tab" data-tab="stats">
                    <i class="fas fa-chart-bar"></i>
                    <span>Statistics</span>
                </button>
            </div>
        </nav>

        <!-- Email Validator Tab -->
        <div id="validator" class="tab-content active">
            <div class="card">
                <h2>Email Validator</h2>
                <form id="email-form" method="POST">
                    <input type="hidden" name="action" value="validate_email">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <div class="input-wrapper">
                            <input type="email" id="email" name="email" placeholder="Enter email address to validate..." required>
                            <div class="validation-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-check"></i>
                        Validate Email
                    </button>
                </form>
                
                <div id="validation-result" class="validation-result" style="display: none;">
                    <!-- Results will be populated here -->
                </div>
            </div>
        </div>

        <!-- Bulk Validator Tab -->
        <div id="bulk" class="tab-content">
            <div class="card">
                <div class="card-header">
                    <h2>Bulk Email Validation</h2>
                    <div class="header-actions">
                        <button class="btn btn-secondary" onclick="document.getElementById('file-upload').click()">
                            <i class="fas fa-upload"></i>
                            Import
                        </button>
                        <button class="btn btn-success" id="export-btn" style="display: none;">
                            <i class="fas fa-download"></i>
                            Export
                        </button>
                        <button class="btn btn-danger" id="clear-btn" style="display: none;">
                            <i class="fas fa-trash"></i>
                            Clear
                        </button>
                    </div>
                </div>
                
                <form id="bulk-form" method="POST">
                    <input type="hidden" name="action" value="validate_bulk">
                    <input type="file" id="file-upload" accept=".txt,.csv" style="display: none;">
                    
                    <div class="form-group">
                        <label for="emails">Email Addresses (one per line, or comma/semicolon separated)</label>
                        <textarea id="emails" name="emails" rows="8" placeholder="example1@domain.com&#10;example2@tempmail.com&#10;example3@gmail.com"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-full">
                        <i class="fas fa-check-double"></i>
                        Validate Emails
                    </button>
                </form>
                
                <div id="bulk-results" class="bulk-results" style="display: none;">
                    <!-- Results will be populated here -->
                </div>
            </div>
        </div>

        <!-- Domain Manager Tab -->
        <div id="domains" class="tab-content">
            <div class="card">
                <div class="card-header">
                    <h2>Domain Management</h2>
                    <div class="header-actions">
                        <button class="btn btn-secondary" onclick="document.getElementById('domain-import').click()">
                            <i class="fas fa-upload"></i>
                            Import
                        </button>
                        <button class="btn btn-success" id="export-domains-btn">
                            <i class="fas fa-download"></i>
                            Export
                        </button>
                    </div>
                </div>
                
                <input type="file" id="domain-import" accept=".txt" style="display: none;">
                
                <div class="stats-grid">
                    <div class="stat-card stat-primary">
                        <i class="fas fa-shield-alt"></i>
                        <div>
                            <p class="stat-number" id="builtin-count">500+</p>
                            <p class="stat-label">Built-in Domains</p>
                        </div>
                    </div>
                    <div class="stat-card stat-success">
                        <i class="fas fa-globe"></i>
                        <div>
                            <p class="stat-number" id="custom-count">0</p>
                            <p class="stat-label">Custom Domains</p>
                        </div>
                    </div>
                    <div class="stat-card stat-warning">
                        <i class="fas fa-shield-alt"></i>
                        <div>
                            <p class="stat-number" id="total-count">500+</p>
                            <p class="stat-label">Total Blocked</p>
                        </div>
                    </div>
                </div>
                
                <form id="domain-form" method="POST">
                    <input type="hidden" name="action" value="add_domain">
                    <div class="form-row">
                        <div class="form-group flex-1">
                            <input type="text" id="new-domain" name="domain" placeholder="Add custom domain (e.g., example.com)">
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-plus"></i>
                            Add Domain
                        </button>
                    </div>
                </form>
                
                <div class="form-group">
                    <div class="input-wrapper">
                        <input type="text" id="domain-search" placeholder="Search domains...">
                        <div class="validation-icon">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
                
                <div class="domain-sections">
                    <div class="domain-section">
                        <h3>Custom Domains</h3>
                        <div id="custom-domains" class="domain-list">
                            <!-- Custom domains will be populated here -->
                        </div>
                    </div>
                    
                    <div class="domain-section">
                        <h3>Built-in Domains</h3>
                        <div id="builtin-domains" class="domain-list builtin-list">
                            <!-- Built-in domains will be populated here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Statistics Tab -->
        <div id="stats" class="tab-content">
            <div class="card">
                <div class="card-header">
                    <h2>Validation Statistics</h2>
                    <div class="header-actions">
                        <button class="btn btn-secondary" id="sample-data-btn">
                            Load Sample Data
                        </button>
                        <button class="btn btn-danger" id="clear-stats-btn">
                            Clear Stats
                        </button>
                    </div>
                </div>
                
                <div id="stats-content">
                    <div class="empty-state">
                        <i class="fas fa-chart-bar"></i>
                        <p>No validation data available yet.</p>
                        <p class="small">Start validating emails to see your statistics here, or load sample data to explore the features.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="assets/js/script.js"></script>
    
    <?php
    // Handle form submissions
    if ($_POST) {
        include 'includes/handlers.php';
    }
    ?>
</body>
</html>