// Tab Management
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tabs
    const tabButtons = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Initialize domain management
    initializeDomainManager();
    
    // Initialize form handlers
    initializeFormHandlers();
    
    // Initialize file upload handlers
    initializeFileHandlers();
    
    // Initialize statistics
    initializeStatistics();
});

// Temporary email providers database
const tempEmailProviders = new Set([
    '10minutemail.com', '10minutemail.net', '20minutemail.com', '30minutemail.com',
    'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org', 'tempmail.net',
    'temp-mail.org', 'yopmail.com', 'maildrop.cc', 'mailinator.com', 'sharklasers.com',
    'grr.la', 'guerrillamailblock.com', 'pokemail.net', 'spam4.me', 'bccto.me',
    'chacuo.net', 'dispostable.com', 'fakeinbox.com', 'mailnesia.com', 'mytrashmail.com',
    'throwaway.email', 'trashmail.com', 'temp-mail.io', 'tempmailo.com', 'tempmail.co',
    'email-fake.com', 'mohmal.com', 'emailondeck.com', 'tempinbox.com', 'minuteinbox.com',
    'emailtemporanee.com', 'tempail.com', 'anonymbox.com', 'deadaddress.com', 'emailias.com',
    'emailsensei.com', 'fakemailgenerator.com', 'fakeemailaddress.com', 'getairmail.com',
    'getnada.com', 'harakirimail.com', 'hide.biz.st', 'hmamail.com', 'imgof.com',
    'incognitomail.com', 'jetable.org', 'koszmail.pl', 'kurzepost.de', 'laoeq.com',
    'lavabit.com', 'lroid.com', 'mailcatch.com', 'maileater.com', 'mailexpire.com',
    'mailforspam.com', 'mailfreeonline.com', 'mailmoat.com', 'mailnull.com', 'mailscrap.com',
    'mailshell.com', 'mailtome.de', 'mailzilla.com', 'makemetheking.com', 'mt2014.com',
    'mytemp.email', 'nada.email', 'netmails.com', 'neverbox.com', 'nodns.xyz',
    'nomail.xl.cx', 'nospam.ze.tc', 'nowmymail.com', 'objectmail.com', 'obobbo.com',
    'odaymail.com', 'ohaaa.de', 'oneoffemail.com', 'onewaymail.com', 'opayq.com',
    'pookmail.com', 'proxymail.eu', 'punycode.ro', 'quickinbox.com', 'rcpt.at',
    'receivemail.org', 'rppkn.com', 'sandelf.de', 'saynotospams.com', 'selfdestructingmail.com',
    'sendspamhere.com', 'shortmail.net', 'sibmail.com', 'sinenomine.email', 'slaskpost.se',
    'smoug.net', 'snakemail.com', 'sneakemail.com', 'snkmail.com', 'sofort-mail.de',
    'soodonims.com', 'spam.la', 'spamavert.com', 'spambob.com', 'spambob.net',
    'spambob.org', 'spambox.us', 'spamcannon.com', 'spamcannon.net', 'spamcon.org',
    'spamcorptastic.com', 'spamcowboy.com', 'spamcowboy.net', 'spamcowboy.org', 'spamday.com',
    'spamex.com', 'spamfree24.com', 'spamfree24.de', 'spamfree24.eu', 'spamfree24.net',
    'spamfree24.org', 'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org', 'spamhole.com',
    'spamify.com', 'spaminator.de', 'spamkill.info', 'spaml.com', 'spaml.de',
    'spammotel.com', 'spamobox.com', 'spamspot.com', 'spamthis.co.uk', 'spamthisplease.com',
    'spamtrail.com', 'speed.1s.fr', 'squizzy.de', 'superrito.com', 'sweetxxx.de',
    'tagyourself.com', 'teewars.org', 'teleworm.com', 'temp.emeraldwebmail.com', 'tempemail.co.za',
    'tempemail.net', 'tempinbox.co.uk', 'tempmail.it', 'tempmail2.com', 'tempmaildemo.com',
    'tempmailer.com', 'tempmailer.de', 'tempmailaddress.com', 'tempthe.net', 'thankyou2010.com',
    'thraml.com', 'tilien.com', 'tmail.ws', 'tmailinator.com', 'tradermail.info',
    'trash2009.com', 'trash2010.com', 'trash2011.com', 'trash-amil.com', 'trashdevil.com',
    'trashemail.de', 'trashmail.at', 'trashmail.de', 'trashmail.me', 'trashmail.net',
    'trashmail.org', 'trashmail.ws', 'trashmailer.com', 'trashymail.com', 'tyldd.com',
    'uggsrock.com', 'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org', 'wetrainbayarea.com',
    'wetrainbayarea.org', 'wh4f.org', 'whyspam.me', 'willselfdestruct.com', 'winemaven.info',
    'wronghead.com', 'wuzup.net', 'wuzupmail.net', 'wwwnew.eu', 'x.ip6.li',
    'xagloo.com', 'xemaps.com', 'xents.com', 'xmaily.com', 'xoxy.net',
    'yapped.net', 'yeah.net', 'yep.it', 'yoggm.com', 'yomail.info',
    'yopmail.fr', 'yopmail.net', 'youmailr.com', 'ypmail.webredirect.org', 'yuurok.com',
    'zehnminutenmail.de', 'zetmail.com', 'zippymail.info', 'zoaxe.com', 'zoemail.org'
]);

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            isTemp: false,
            message: 'Invalid email format'
        };
    }
    
    const domain = email.split('@')[1].toLowerCase();
    const customDomains = getCustomDomains();
    const isTemp = tempEmailProviders.has(domain) || customDomains.has(domain);
    
    return {
        isValid: !isTemp,
        isTemp: isTemp,
        message: isTemp ? `Temporary email detected: ${domain}` : 'Valid email address',
        provider: isTemp ? domain : undefined
    };
}

// Form handlers
function initializeFormHandlers() {
    // Single email validation
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            
            if (!email) return;
            
            const result = validateEmail(email);
            displayValidationResult(result);
            
            // Update statistics
            updateStatistics(result);
        });
    }
    
    // Bulk email validation
    const bulkForm = document.getElementById('bulk-form');
    if (bulkForm) {
        bulkForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailsTextarea = document.getElementById('emails');
            const emailsText = emailsTextarea.value.trim();
            
            if (!emailsText) return;
            
            const emails = emailsText.split(/[\n,;]/)
                .map(email => email.trim())
                .filter(email => email);
            
            const results = emails.map(email => ({
                email: email,
                ...validateEmail(email)
            }));
            
            displayBulkResults(results);
            
            // Update statistics
            results.forEach(result => updateStatistics(result));
        });
    }
    
    // Domain management
    const domainForm = document.getElementById('domain-form');
    if (domainForm) {
        domainForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const domainInput = document.getElementById('new-domain');
            const domain = domainInput.value.toLowerCase().trim();
            
            if (!domain) return;
            
            addCustomDomain(domain);
            domainInput.value = '';
        });
    }
    
    // Domain search
    const domainSearch = document.getElementById('domain-search');
    if (domainSearch) {
        domainSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterDomains(searchTerm);
        });
    }
}

// Display validation result
function displayValidationResult(result) {
    const resultDiv = document.getElementById('validation-result');
    
    let className = 'validation-result ';
    if (result.isValid) {
        className += 'valid';
    } else if (result.isTemp) {
        className += 'temp';
    } else {
        className += 'invalid';
    }
    
    let html = `
        <div class="${className}">
            <p><strong>${result.message}</strong></p>
            ${result.provider ? `<p><small>Provider: ${result.provider}</small></p>` : ''}
        </div>
    `;
    
    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
}

// Display bulk results
function displayBulkResults(results) {
    const resultsDiv = document.getElementById('bulk-results');
    const validCount = results.filter(r => r.isValid).length;
    const tempCount = results.filter(r => r.isTemp).length;
    const totalCount = results.length;
    
    let html = `
        <div class="results-header">
            <h3>Validation Results</h3>
            <div class="results-stats">
                <span class="stat-valid"><i class="fas fa-check-circle"></i> Valid: ${validCount}</span>
                <span class="stat-temp"><i class="fas fa-times-circle"></i> Temp: ${tempCount}</span>
                <span class="stat-total">Total: ${totalCount}</span>
            </div>
        </div>
        
        <div class="results-table">
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Provider</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    results.forEach(result => {
        let statusClass = 'status-valid';
        let statusText = 'Valid';
        let statusIcon = 'fa-check-circle';
        
        if (!result.isValid) {
            if (result.isTemp) {
                statusClass = 'status-temp';
                statusText = 'Temporary';
                statusIcon = 'fa-exclamation-triangle';
            } else {
                statusClass = 'status-invalid';
                statusText = 'Invalid';
                statusIcon = 'fa-times-circle';
            }
        }
        
        html += `
            <tr>
                <td>${result.email}</td>
                <td class="${statusClass}">
                    <i class="fas ${statusIcon}"></i> ${statusText}
                </td>
                <td>${result.provider || '-'}</td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
    `;
    
    resultsDiv.innerHTML = html;
    resultsDiv.style.display = 'block';
    
    // Show export and clear buttons
    document.getElementById('export-btn').style.display = 'inline-flex';
    document.getElementById('clear-btn').style.display = 'inline-flex';
    
    // Store results for export
    window.bulkResults = results;
}

// Domain management functions
function getCustomDomains() {
    const saved = localStorage.getItem('customTempDomains');
    return saved ? new Set(JSON.parse(saved)) : new Set();
}

function saveCustomDomains(domains) {
    localStorage.setItem('customTempDomains', JSON.stringify([...domains]));
}

function addCustomDomain(domain) {
    const customDomains = getCustomDomains();
    
    if (!tempEmailProviders.has(domain) && !customDomains.has(domain)) {
        customDomains.add(domain);
        saveCustomDomains(customDomains);
        updateDomainDisplay();
        updateDomainCounts();
    }
}

function removeCustomDomain(domain) {
    const customDomains = getCustomDomains();
    customDomains.delete(domain);
    saveCustomDomains(customDomains);
    updateDomainDisplay();
    updateDomainCounts();
}

function initializeDomainManager() {
    updateDomainDisplay();
    updateDomainCounts();
}

function updateDomainDisplay() {
    const customDomains = getCustomDomains();
    const customContainer = document.getElementById('custom-domains');
    const builtinContainer = document.getElementById('builtin-domains');
    
    // Display custom domains
    if (customDomains.size > 0) {
        let customHtml = '';
        [...customDomains].sort().forEach(domain => {
            customHtml += `
                <div class="domain-item custom">
                    <span>${domain}</span>
                    <button class="domain-remove" onclick="removeCustomDomain('${domain}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });
        customContainer.innerHTML = customHtml;
    } else {
        customContainer.innerHTML = '<p class="empty-state">No custom domains added yet.</p>';
    }
    
    // Display built-in domains
    let builtinHtml = '';
    [...tempEmailProviders].sort().forEach(domain => {
        builtinHtml += `<div class="domain-item">${domain}</div>`;
    });
    builtinContainer.innerHTML = builtinHtml;
}

function updateDomainCounts() {
    const customDomains = getCustomDomains();
    document.getElementById('custom-count').textContent = customDomains.size;
    document.getElementById('total-count').textContent = tempEmailProviders.size + customDomains.size;
}

function filterDomains(searchTerm) {
    const domainItems = document.querySelectorAll('.domain-item');
    
    domainItems.forEach(item => {
        const domain = item.textContent.toLowerCase();
        if (domain.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// File handling
function initializeFileHandlers() {
    // Bulk email file upload
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
        fileUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                document.getElementById('emails').value = content;
            };
            reader.readAsText(file);
        });
    }
    
    // Domain import
    const domainImport = document.getElementById('domain-import');
    if (domainImport) {
        domainImport.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                const domains = content.split('\n')
                    .map(d => d.trim().toLowerCase())
                    .filter(d => d && !tempEmailProviders.has(d));
                
                const customDomains = getCustomDomains();
                domains.forEach(domain => customDomains.add(domain));
                saveCustomDomains(customDomains);
                updateDomainDisplay();
                updateDomainCounts();
            };
            reader.readAsText(file);
        });
    }
    
    // Export handlers
    document.getElementById('export-btn')?.addEventListener('click', exportBulkResults);
    document.getElementById('export-domains-btn')?.addEventListener('click', exportDomains);
    document.getElementById('clear-btn')?.addEventListener('click', clearBulkResults);
}

function exportBulkResults() {
    if (!window.bulkResults) return;
    
    const csv = [
        'Email,Status,Type,Provider',
        ...window.bulkResults.map(r => 
            `${r.email},${r.isValid ? 'Valid' : 'Invalid'},${r.isTemp ? 'Temporary' : 'Regular'},${r.provider || ''}`
        )
    ].join('\n');
    
    downloadFile(csv, 'email-validation-results.csv', 'text/csv');
}

function exportDomains() {
    const customDomains = getCustomDomains();
    const allDomains = [...tempEmailProviders, ...customDomains].sort();
    const content = allDomains.join('\n');
    
    downloadFile(content, 'temp-email-domains.txt', 'text/plain');
}

function clearBulkResults() {
    document.getElementById('bulk-results').style.display = 'none';
    document.getElementById('export-btn').style.display = 'none';
    document.getElementById('clear-btn').style.display = 'none';
    document.getElementById('emails').value = '';
    window.bulkResults = null;
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Statistics
function initializeStatistics() {
    const sampleDataBtn = document.getElementById('sample-data-btn');
    const clearStatsBtn = document.getElementById('clear-stats-btn');
    
    sampleDataBtn?.addEventListener('click', loadSampleData);
    clearStatsBtn?.addEventListener('click', clearStatistics);
    
    updateStatisticsDisplay();
}

function getStatistics() {
    const saved = localStorage.getItem('emailValidationStats');
    return saved ? JSON.parse(saved) : {
        totalValidations: 0,
        validEmails: 0,
        tempEmails: 0,
        invalidEmails: 0,
        topTempProviders: {},
        validationHistory: []
    };
}

function saveStatistics(stats) {
    localStorage.setItem('emailValidationStats', JSON.stringify(stats));
}

function updateStatistics(result) {
    const stats = getStatistics();
    
    stats.totalValidations++;
    
    if (result.isValid) {
        stats.validEmails++;
    } else if (result.isTemp) {
        stats.tempEmails++;
        if (result.provider) {
            stats.topTempProviders[result.provider] = (stats.topTempProviders[result.provider] || 0) + 1;
        }
    } else {
        stats.invalidEmails++;
    }
    
    // Update daily history
    const today = new Date().toISOString().split('T')[0];
    const todayEntry = stats.validationHistory.find(entry => entry.date === today);
    
    if (todayEntry) {
        todayEntry.count++;
    } else {
        stats.validationHistory.push({ date: today, count: 1 });
        // Keep only last 30 days
        stats.validationHistory = stats.validationHistory.slice(-30);
    }
    
    saveStatistics(stats);
    updateStatisticsDisplay();
}

function updateStatisticsDisplay() {
    const stats = getStatistics();
    const statsContent = document.getElementById('stats-content');
    
    if (stats.totalValidations === 0) {
        statsContent.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-chart-bar"></i>
                <p>No validation data available yet.</p>
                <p class="small">Start validating emails to see your statistics here, or load sample data to explore the features.</p>
            </div>
        `;
        return;
    }
    
    const validationRate = Math.round((stats.validEmails / stats.totalValidations) * 100);
    const tempRate = Math.round((stats.tempEmails / stats.totalValidations) * 100);
    
    // Get top providers
    const topProviders = Object.entries(stats.topTempProviders)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);
    
    let html = `
        <div class="stats-grid">
            <div class="stat-card stat-primary">
                <i class="fas fa-chart-bar"></i>
                <div>
                    <p class="stat-number">${stats.totalValidations.toLocaleString()}</p>
                    <p class="stat-label">Total Validations</p>
                </div>
            </div>
            <div class="stat-card stat-success">
                <i class="fas fa-check-circle"></i>
                <div>
                    <p class="stat-number">${stats.validEmails.toLocaleString()}</p>
                    <p class="stat-label">Valid Emails (${validationRate}%)</p>
                </div>
            </div>
            <div class="stat-card stat-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <p class="stat-number">${stats.tempEmails.toLocaleString()}</p>
                    <p class="stat-label">Temp Emails (${tempRate}%)</p>
                </div>
            </div>
            <div class="stat-card" style="background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);">
                <i class="fas fa-times-circle"></i>
                <div>
                    <p class="stat-number">${stats.invalidEmails.toLocaleString()}</p>
                    <p class="stat-label">Invalid Format</p>
                </div>
            </div>
        </div>
        
        <div style="background: #f9fafb; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">Validation Breakdown</h3>
            <div style="margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Valid Emails</span>
                    <span>${validationRate}%</span>
                </div>
                <div style="width: 100%; background: #e5e7eb; border-radius: 9999px; height: 0.75rem;">
                    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); height: 0.75rem; border-radius: 9999px; width: ${validationRate}%; transition: width 0.5s ease;"></div>
                </div>
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Temporary Emails</span>
                    <span>${tempRate}%</span>
                </div>
                <div style="width: 100%; background: #e5e7eb; border-radius: 9999px; height: 0.75rem;">
                    <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); height: 0.75rem; border-radius: 9999px; width: ${tempRate}%; transition: width 0.5s ease;"></div>
                </div>
            </div>
        </div>
    `;
    
    if (topProviders.length > 0) {
        html += `
            <div style="background: #f9fafb; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                <h3 style="margin-bottom: 1rem;">Top Temporary Email Providers</h3>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        `;
        
        topProviders.forEach(([provider, count], index) => {
            const colors = ['#f59e0b', '#9ca3af', '#f97316', '#6b7280'];
            const color = colors[index] || '#6b7280';
            
            html += `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.5rem; height: 1.5rem; border-radius: 50%; background: ${color}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: bold;">
                            ${index + 1}
                        </div>
                        <span style="font-family: 'Courier New', monospace; font-size: 0.875rem;">${provider}</span>
                    </div>
                    <span style="font-weight: 500; color: #6b7280;">${count} detections</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    if (stats.validationHistory.length > 0) {
        const maxCount = Math.max(...stats.validationHistory.map(h => h.count));
        
        html += `
            <div style="background: #f9fafb; border-radius: 0.75rem; padding: 1.5rem;">
                <h3 style="margin-bottom: 1rem;">Recent Validation Activity</h3>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        `;
        
        stats.validationHistory.slice(-5).forEach(entry => {
            const percentage = (entry.count / maxCount) * 100;
            
            html += `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #374151;">${entry.date}</span>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="width: 5rem; background: #e5e7eb; border-radius: 9999px; height: 0.5rem;">
                            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 0.5rem; border-radius: 9999px; width: ${percentage}%;"></div>
                        </div>
                        <span style="font-weight: 500; color: #6b7280; min-width: 3rem; text-align: right;">${entry.count}</span>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    statsContent.innerHTML = html;
}

function loadSampleData() {
    const sampleStats = {
        totalValidations: 1247,
        validEmails: 832,
        tempEmails: 298,
        invalidEmails: 117,
        topTempProviders: {
            '10minutemail.com': 45,
            'tempmail.org': 38,
            'guerrillamail.com': 32,
            'yopmail.com': 28,
            'mailinator.com': 24
        },
        validationHistory: [
            { date: '2024-01-15', count: 234 },
            { date: '2024-01-16', count: 189 },
            { date: '2024-01-17', count: 267 },
            { date: '2024-01-18', count: 198 },
            { date: '2024-01-19', count: 359 }
        ]
    };
    
    saveStatistics(sampleStats);
    updateStatisticsDisplay();
}

function clearStatistics() {
    localStorage.removeItem('emailValidationStats');
    updateStatisticsDisplay();
}