<?php
// Email validation handlers

// Load temporary email providers
function getTempEmailProviders() {
    return [
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
    ];
}

// Get custom domains from session/file
function getCustomDomains() {
    if (!isset($_SESSION)) {
        session_start();
    }
    
    return isset($_SESSION['custom_domains']) ? $_SESSION['custom_domains'] : [];
}

// Save custom domains to session/file
function saveCustomDomains($domains) {
    if (!isset($_SESSION)) {
        session_start();
    }
    
    $_SESSION['custom_domains'] = $domains;
}

// Validate email function
function validateEmail($email) {
    // Basic email format validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return [
            'isValid' => false,
            'isTemp' => false,
            'message' => 'Invalid email format'
        ];
    }
    
    $domain = strtolower(explode('@', $email)[1]);
    $tempProviders = getTempEmailProviders();
    $customDomains = getCustomDomains();
    
    $isTemp = in_array($domain, $tempProviders) || in_array($domain, $customDomains);
    
    return [
        'isValid' => !$isTemp,
        'isTemp' => $isTemp,
        'message' => $isTemp ? "Temporary email detected: $domain" : 'Valid email address',
        'provider' => $isTemp ? $domain : null
    ];
}

// Handle form submissions
if ($_POST['action'] === 'validate_email') {
    $email = trim($_POST['email']);
    if ($email) {
        $result = validateEmail($email);
        
        // Return JSON response for AJAX
        if (isset($_POST['ajax'])) {
            header('Content-Type: application/json');
            echo json_encode($result);
            exit;
        }
        
        // Store result for display
        $_SESSION['validation_result'] = $result;
        $_SESSION['validated_email'] = $email;
    }
}

if ($_POST['action'] === 'validate_bulk') {
    $emailsText = trim($_POST['emails']);
    if ($emailsText) {
        $emails = array_filter(array_map('trim', preg_split('/[\n,;]/', $emailsText)));
        $results = [];
        
        foreach ($emails as $email) {
            $result = validateEmail($email);
            $result['email'] = $email;
            $results[] = $result;
        }
        
        // Return JSON response for AJAX
        if (isset($_POST['ajax'])) {
            header('Content-Type: application/json');
            echo json_encode($results);
            exit;
        }
        
        // Store results for display
        $_SESSION['bulk_results'] = $results;
    }
}

if ($_POST['action'] === 'add_domain') {
    $domain = strtolower(trim($_POST['domain']));
    if ($domain) {
        $customDomains = getCustomDomains();
        $tempProviders = getTempEmailProviders();
        
        if (!in_array($domain, $tempProviders) && !in_array($domain, $customDomains)) {
            $customDomains[] = $domain;
            saveCustomDomains($customDomains);
        }
        
        // Return JSON response for AJAX
        if (isset($_POST['ajax'])) {
            header('Content-Type: application/json');
            echo json_encode(['success' => true, 'domains' => $customDomains]);
            exit;
        }
    }
}

// Display validation result if available
if (isset($_SESSION['validation_result']) && isset($_SESSION['validated_email'])) {
    $result = $_SESSION['validation_result'];
    $email = $_SESSION['validated_email'];
    
    $className = 'validation-result ';
    if ($result['isValid']) {
        $className .= 'valid';
    } elseif ($result['isTemp']) {
        $className .= 'temp';
    } else {
        $className .= 'invalid';
    }
    
    echo "<script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('email').value = '" . htmlspecialchars($email) . "';
            const resultDiv = document.getElementById('validation-result');
            resultDiv.innerHTML = `
                <div class=\"$className\">
                    <p><strong>" . htmlspecialchars($result['message']) . "</strong></p>
                    " . ($result['provider'] ? "<p><small>Provider: " . htmlspecialchars($result['provider']) . "</small></p>" : "") . "
                </div>
            `;
            resultDiv.style.display = 'block';
        });
    </script>";
    
    // Clear the session data
    unset($_SESSION['validation_result']);
    unset($_SESSION['validated_email']);
}

// Display bulk results if available
if (isset($_SESSION['bulk_results'])) {
    $results = $_SESSION['bulk_results'];
    $validCount = count(array_filter($results, function($r) { return $r['isValid']; }));
    $tempCount = count(array_filter($results, function($r) { return $r['isTemp']; }));
    $totalCount = count($results);
    
    echo "<script>
        document.addEventListener('DOMContentLoaded', function() {
            const results = " . json_encode($results) . ";
            displayBulkResults(results);
        });
    </script>";
    
    // Clear the session data
    unset($_SESSION['bulk_results']);
}
?>