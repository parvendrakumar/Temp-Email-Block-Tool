<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Include the handlers
include '../includes/handlers.php';

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['emails'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Emails array is required']);
    exit;
}

$emails = $input['emails'];
$results = [];

foreach ($emails as $email) {
    $email = trim($email);
    if ($email) {
        $result = validateEmail($email);
        $result['email'] = $email;
        $results[] = $result;
    }
}

echo json_encode($results);
?>