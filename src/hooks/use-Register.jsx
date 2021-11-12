// 1. Send register to server
// 2. Check username existed
// 3. Check email existed
// 4. Check phone

import { v4 as uuid_v4 } from "uuid";

const firebaseSrc = "https://project-2532894124166455430-default-rtdb.firebaseio.com/members.json";

export const useRegister = ({ username, email, phone, password }) => {
    const newMember = {
        id: uuid_v4(),
        username: username,
        email: email,
        password: password,
        phone: phone,
    };
    const sendRegister = async (newMember) => {
        const response = await fetch(firebaseSrc, {
            method: 'POST',
            header: "application/json",
            body: JSON.stringify(newMember),
        });

        if (!response.ok) {
            throw new Error("Register failed");
        }
    };

    try {
        sendRegister(newMember);
    } catch (error) {
        console.log(error.message);
    }
};

export default useRegister;
