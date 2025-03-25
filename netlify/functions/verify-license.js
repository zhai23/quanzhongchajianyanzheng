exports.handler = async (event) => {
  // 只处理 POST 请求
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 解析表单数据
  const params = new URLSearchParams(event.body);
  const licenseKey = params.get('license_key');
  const productId = params.get('product_id');
  const incrementUses = params.get('increment_uses_count');

  // 验证许可证密钥
  const isValid = licenseKey === '9144491D-E49B408A-8781C46A-F67BE538';

  if (!isValid) {
    return { statusCode: 401, body: '' }; // 无效密钥不返回内容
  }

  // 有效响应数据结构 (根据需求简化)
  const responseData = {
    success: true,
    uses: 1,
    purchase: {
      product_id: "yI7LmqB8d72Mx_0SHZM-_g==",
      product_name: "Spline Weights Skin Tool (Maya)",
      license_key: licenseKey,
      created_at: new Date().toISOString(),
      ip_country: "Hong Kong"
    }
  };

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(responseData)
  };
};
