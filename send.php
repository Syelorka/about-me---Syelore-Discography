<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : 'Anonymous';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : 'No Email';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : 'No Message';

    $log = "--- " . date("Y-m-d H:i:s") . " ---\n";
    $log .= "Name: $name\nEmail: $email\nMessage: $message\n\n";

    // Используем LOCK_EX для предотвращения конфликтов записи
    if (file_put_contents('data.txt', $log, FILE_APPEND | LOCK_EX)) {
        header("Location: contact.html?success=1");
        exit();
    } else {
        echo "Ошибка записи. Проверь права папки (chmod 777).";
    }
}
?>