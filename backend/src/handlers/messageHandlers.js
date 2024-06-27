const { getConnection } = require('../utils/database');

module.exports.create = async (event) => {
  try {
    const { campaignId, phoneNumber, messageText } = JSON.parse(event.body);
    const conn = await getConnection();
    
    const [result] = await conn.execute(
      'INSERT INTO messages (campaign_id, phone_number, message_text) VALUES (?, ?, ?)',
      [campaignId, phoneNumber, messageText]
    );
    
    return {
      statusCode: 201,
      body: JSON.stringify({ id: result.insertId, campaignId, phoneNumber, messageText }),
    };
  } catch (error) {
    console.error('Error creating message:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating message' }),
    };
  }
};

module.exports.list = async (event) => {
  try {
    const { campaignId } = event.queryStringParameters || {};
    const conn = await getConnection();
    
    let query = 'SELECT * FROM messages';
    const params = [];
    
    if (campaignId) {
      query += ' WHERE campaign_id = ?';
      params.push(campaignId);
    }
    
    const [rows] = await conn.execute(query, params);
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Error listing messages:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error listing messages' }),
    };
  }
};
