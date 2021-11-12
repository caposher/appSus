import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const EMAILS_KEY = 'emails';
const loggedUser = {
    email: 'user@appsus.com',
    fullName: 'Anna'
}
_createEmails();

export const emailService = {
    query,
    getById,
    removeEmail,
    updateEmail,
    sendEmail,
    getEmptyEmail

}
function updateEmail(email) {
    return storageService.put(EMAILS_KEY, email);
}


function removeEmail(emailId) {
    return getById(emailId)
        .then(email => {
            if (email.isDeleted) {
                console.log('deleted', email)
                return storageService.remove(EMAILS_KEY, emailId);
            }
            else {
                email.isDeleted = true;
                console.log('trashed', email)
                return storageService.put(EMAILS_KEY, email)
            }
        })
}



// const criteria = { status: 'inbox/sent/trash/draft', txt: 'puki', // no need to support complex text search isRead: true, // (optional property, if missing: show all) isStared: true, // (optional property, if missing: show all) lables: ['important', 'romantic'] // has any of the labels }
function query() {

    return storageService.query(EMAILS_KEY);
}

function getById(emailId) {
    return storageService.get(EMAILS_KEY, emailId);
}

function sendEmail(email) {
    // email.id = utilService.makeId(4);
    email.from = loggedUser.fullName;
    email.fromEmail = loggedUser.email;
    email.isRead = false;
    email.isSent = true;
    email.isStarred = false;
    email.isDeleted = false;
    email.sentAt = Date.now();
    return storageService.post(EMAILS_KEY, email);
}

function getEmptyEmail() {
    return {
        subject: '',
        body: '',
        // isRead: false,
        sentAt: Date.now(),
        from: '',
        fromEmail: '',
        to: '',
        isRead: false,
        isStarred: false,
        isDeleted: false,
        isSent: false,
        folder: 'inbox',
    }
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails =
            [{
                id: utilService.makeId(4),
                subject: 'New messages from Matan Crispel - Coding Academy and Guy Zohar',
                body: 'You have a new mention in Coding Academy - Sep 21 (codingacademy-sep21.slack.com)',
                // isRead: false,
                sentAt: 1551133930594,
                from: 'Slack',
                fromEmail: 'slack@gmail.com',
                to: loggedUser.fullName,
                isRead: true,
                isStarred: false,
                isDeleted: false,
                isSent: false,
                folder: 'inbox',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: loggedUser.fullName,
                isRead: false,
                isStarred: true,
                isDeleted: false,
                isSent: false,
                folder: 'inbox',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: loggedUser.fullName,
                fromEmail: loggedUser.email,
                to: 'Bolly',
                isRead: false,
                isStarred: false,
                isDeleted: false,
                isSent: true,
                folder: 'sent',
            },
            {
                id: utilService.makeId(4),
                subject: 'Welcome to GitGuardian!',
                body: `Thank you for trusting GitGuardian! We are now able to secure the repositories you grant us access to.
                As shown below, you are currently under our free tier for developers and Open Source. Additionally, you can start a 30-day trial of our Business plan, at any time, to secure your private collaborative repositories.`,
                // isRead: false,
                sentAt: 1551134830594,
                from: 'GitGuardian',
                fromEmail: 'gitGuard@gmail.com',
                to: loggedUser.fullName,
                isRead: true,
                isStarred: true,
                isDeleted: false,
                isSent: false,
                folder: 'inbox',
            },
            {
                id: utilService.makeId(4),
                subject: 'Your Dropbox is lonely. Add some files!',
                body: `Add files to your Dropbox
                Once your files are in Dropbox, they’ll be waiting for you anywhere you install the app—like your computer, phone, or tablet. Your files will also be securely backed up and easy to share, no matter what type of files they are.`,
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: loggedUser.fullName,
                isRead: false,
                isStarred: false,
                isDeleted: false,
                isSent: false,

                folder: 'inbox',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: loggedUser.fullName,
                isRead: false,
                isStarred: false,
                isDeleted: false,
                isSent: false,
                folder: 'inbox',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: loggedUser.fullName,
                fromEmail: loggedUser.email,
                to: 'Bolly',
                isRead: false,
                isStarred: false,
                isDeleted: false,
                isSent: false,

                folder: 'draft',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551189230594,
                from: 'Bob',
                fromEmail: 'bob@gmail.com',
                to: loggedUser.fullName,
                isRead: false,
                isStarred: true,
                isDeleted: false,
                isSent: false,
                folder: 'inbox',
            }
            ]
        utilService.saveToStorage(EMAILS_KEY, emails);
    }
}
