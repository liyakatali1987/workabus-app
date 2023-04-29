
const { MongoClient } = require("mongodb");

exports.onExecutePostUserRegistration = async (event, api) => {
    const newUser = {
        email: event.user.email,
        email_verified: event.user.email_verified,
        created_at: event.user.created_at
    };

    const dbString = `mongodb+srv://workabus:${event.secrets.MONGO_PASS}@workabus.cxe9qik.mongodb.net`;

    try {
        const dbString = `mongodb+srv://workabus:${event.secrets.MONGO_PASS}@workabus.cxe9qik.mongodb.net`;
        const client = await MongoClient.connect(dbString);
        const db = client.db('workabusdb');
        const resp = await db.collection('workabus_users').insertOne(newUser);
    }
    catch (err) {
        if (err instanceof MongoServerError && err.code === 11000) {
            console.error("# Duplicate Data Found:\n", err)
            resp = {
                insertedId: null,
                message: "Message expalining the situation."
            }
        }
        else {
            throw new Error(err)
        }
    }

    client.close();
};