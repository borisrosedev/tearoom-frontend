

export default class ApiDataSource {
    static async get({ url, token }: { url: string, token?: string}) {
        try {
            const result = await fetch(url, {
                method: 'GET',
                headers: {
                    "Authorisation": 'Bearer ' + (token ?? '')
                }
            })
            const deserializedData = await result.json()
            return deserializedData
        } catch(err) {
            console.log('Erreur', err)
        }
    }

    static async send({ url , token, data, method }: { url: string, token?: string, data: any, method: string }) {
        try {
            const result = await fetch(url, {
                method: method ?? 'POST',
                headers: {
                    "Authorisation" : 'Bearer ' + (token ?? '')
                },
                body: JSON.stringify(data)
            })
            const deserializedData = await result.json()
            return deserializedData
        } catch(err) {
            console.log('Erreur', err)
        }
    }
}