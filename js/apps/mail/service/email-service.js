import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const EMAILS_KEY = 'emails';
_createEmails();

const loggedUser = {
    email: 'user@appsus.com',
    fullName: 'Anna Banana'
}

export const emailService = {
    query,
    getById
}

function query() {
    return storageService.query(EMAILS_KEY);
}

function getById(emailId) {
    return storageService.get(EMAILS_KEY, emailId);
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails =
            [{
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, Kill me please',
                // isRead: false,
                sentAt: 1551133930594,
                from: 'Bill',
                fromEmail: 'bill@gmail.com',
                to: 'Bob',
                status: {
                    isRead: true,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: 'Bolly',
                status: {
                    isRead: false,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: 'Bolly',
                status: {
                    isRead: false,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: 'Bolly',
                status: {
                    isRead: false,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: 'Bolly',
                status: {
                    isRead: false,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: 'Bolly',
                status: {
                    isRead: false,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: 'Bolly',
                status: {
                    isRead: false,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            },
            {
                id: utilService.makeId(4),
                subject: 'Hello',
                body: 'Hi, I want to sleep',
                // isRead: false,
                sentAt: 1551134830594,
                from: 'Molly',
                fromEmail: 'molly@gmail.com',
                to: 'Bolly',
                status: {
                    isRead: false,
                    isStarred: false,
                    isDeleted: false,
                    isSent: false
                },
                folder: '',
            }
            ]
        utilService.saveToStorage(EMAILS_KEY, emails);
    }
}
