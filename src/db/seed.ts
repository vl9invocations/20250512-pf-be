import query from './connection';
import { faker } from '@faker-js/faker';

interface Participant {
    name: string;
    email: string;
    birthdate: Date;
}

const numberOfParticipants = 20;
const participants: Participant[] = [];

for (let i = 0; i < numberOfParticipants; i++) {
    const participant: Participant = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate(),
    }
    participants.push(participant);
}
async function run() {
    try {
        const sql = `INSERT INTO finale.participants (name, email, birthdate) VALUES ($1, $2, $3)`;
        for (const participant of participants) {
            await query(sql, [participant.name, participant.email, participant.birthdate]);
        }
        console.log('Participants seeded successfully');
    } catch (error) {
        console.error('Error seeding participants', error);
    }
}

run();