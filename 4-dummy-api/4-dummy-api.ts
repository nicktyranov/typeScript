/*
Продвинутые типы 

Напишите функцию, которая отправляет запрос на  https://dummyjson.com/users
для получения пользователей и вывода части их данных их в консоль. 

Также нужно: 
 - Обработать ошибку исключения  
 - Использовать enum 


*/

import axios, { AxiosError } from 'axios';

const URL: string = 'https://dummyjson.com/users';

enum ResponseStatus {
    Success = 200,
    Failed = 400,
}

async function getUserData(URL: string) {
    try {
		const response = await axios.get(URL);
        if (response.status === ResponseStatus.Success && "users" in response.data) {
			const users: UserData[] = response.data.users;
			if (Array.isArray(users)) {
				console.log(users.map((user: UserData) => `${user.firstName} ${user.lastName} `));
			}
        } else {
            console.log(`Error: ${response.status}`); 
        }
    } catch (e) {
        if (e instanceof AxiosError) {
            console.error(e);
		} else {
			console.log(`not AxiosError`); 
		}
    }
}

getUserData(URL);

type UserData = {
			"id": number,
			"firstName": string,
			"lastName": string,
			"maidenName": string,
			"age": number,
			"gender": string,
			"email": string,
			"phone": string,
			"username": string,
			"password": string,
			"birthDate": string,
			"image": string,
			"bloodGroup": string,
			"height": number,
			"weight": number,
			"eyeColor": string,
			"hair": {
				"color": string,
				"type": string
			},
			"domain": string,
			"ip": string,
			"address": {
				"address": string,
				"city": string,
				"coordinates": {
					"lat": number,
					"lng": number
				},
				"postalCode": string,
				"state": string
			},
			"macAddress": string,
			"university": string,
			"bank": {
				"cardExpire": string,
				"cardNumber": string,
				"cardType": string,
				"currency": string,
				"iban": string
			},
			"company": {
				"address": {
					"address": string,
					"city": string,
					"coordinates": {
						"lat": number,
						"lng": number
					},
					"postalCode": string,
					"state": string
				},
				"department": string,
				"name": string,
				"title": string
			},
			"ein": string,
			"ssn": string,
			"userAgent": string,
			"crypto": {
				"coin": string,
				"wallet": string,
				"network": string
			}
		}

