const { getConnection } = require('../utils/database');

exports.createCampaign = async (event) => {
  try {
    const { user_id, name, process_date, process_hour, phone_list, message_text } = JSON.parse(event.body);

    // Validación para asegurar que todos los campos requeridos estén presentes
    if (!user_id || !name || !process_date || !process_hour || !phone_list || !message_text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' }),
      };
    }

    const conn = await getConnection();

    const [result] = await conn.execute(
      'INSERT INTO campaigns (user_id, name, process_date, process_hour, process_status, phone_list, message_text) VALUES (?, ?, ?, ?, 1, ?, ?)',
      [user_id, name, process_date, process_hour, phone_list, message_text]
    );

    return {
      statusCode: 201,
      body: JSON.stringify({ id: result.insertId, user_id, name, process_date, process_hour, process_status: 1, phone_list, message_text }),
    };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating campaign' }),
    };
  }
};

exports.listCampaigns = async (event) => {
  try {
    const { startDate, endDate } = event.queryStringParameters || {};
    const conn = await getConnection();

    let query = 'SELECT * FROM campaigns';
    const params = [];

    if (startDate && endDate) {
      query += ' WHERE process_date >= ? AND process_date <= ?';
      params.push(startDate, endDate);
    }

    const [rows] = await conn.execute(query, params);
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Error listing campaigns:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error listing campaigns' }),
    };
  }
};
