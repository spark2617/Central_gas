import notifee from '@notifee/react-native';

/**
 * Creates a notification channel for Android.
 * @returns {Promise<string>} The ID of the created channel.
 */
async function createNotificationChannel() {
    return await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });
}

/**
 * Requests the necessary permissions for notifications.
 * @returns {Promise<void>}
 */
async function requestNotificationPermission() {
    await notifee.requestPermission();
}

/**
 * Displays a notification.
 * @param {string} title - The title of the notification.
 * @param {string} body - The body content of the notification.
 */
async function displayNotification(title, body) {
    const channelId = await createNotificationChannel();
    await requestNotificationPermission();

    await notifee.displayNotification({
        title,
        body,
        android: {
            channelId,
            pressAction: {
                id: 'default',
            },
        },
    });
}

/**
 * Cancels a notification by its ID.
 * @param {string} notificationId - The ID of the notification to cancel.
 */
async function cancelNotification(notificationId: string) {
    await notifee.cancelNotification(notificationId);
}

/**
 * Updates an existing notification.
 * @param {string} notificationId - The ID of the notification to update.
 * @param {string} title - The new title of the notification.
 * @param {string} body - The new body content of the notification.
 */
async function updateNotification(notificationId, title, body) {
    const channelId = await createNotificationChannel();

    await notifee.displayNotification({
        id: notificationId, // Use the existing notification ID to update it
        title,
        body,
        android: {
            channelId,
            pressAction: {
                id: 'default',
            },
        },
    });
}

export {
    displayNotification,
    cancelNotification,
    updateNotification,
};
