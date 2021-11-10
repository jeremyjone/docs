# JWT

## 什么是 JWT

Jwt，Json Web Token 是一个开放标准（[RFC 7519](https://tools.ietf.org/html/rfc7519)），它定义了一种紧凑且独立的方法，用于在各方之间安全地将信息作为 JSON 对象传输。由于此信息是经过数字签名的，因此可以被验证和信任。可以使用密码（使用 HMAC 算法）或使用 RSA 或 ECDSA 的公钥/私钥对对 JWT 进行签名。

基于 Token 的鉴权机制类似于 http 协议，也是无状态的，它不需要在服务端保留用户的认证信息，这也就意味着基于 Token 认证机制的应用不需要去考虑用户在哪一台设备登录，这为应用扩展提供了便利。

## 什么时候使用 JWT

以下是 JWT 有用的一些情况：

- 授权：这是使用 JWT 最常见的方案。用户登录后，每个后续请求都将包含 JWT，从而允许用户访问该令牌锁允许的路由、服务和资源。单一登录是当今广泛使用 JWT 的一项功能，因为它的开销很小并且可以在不同的域中轻松使用。

- 信息交换：JWT 是在各方之间安全地传输信息的一种好方法。因为可以对 JWT 进行签名，所以您可以确定发件人是他们所说的人。此外，由于签名是使用标头和有效负载计算的，因此还可以验证内容是否被篡改。

## JWT 的结构

JWT 以紧凑的形式将三部分内容由点（.）分隔，其三部分内容分别是：

- 标头
- 有效载荷
- 签名

因此，JWT 通常如下所示：

```text
xxxxx.yyyyy.zzzzz
```

### 标头 Header

标头通常由两部分组成：令牌类型（即 JWT）和所使用的签名算法。

算法通常为：

- HMAC
- SHA256
- RSA

例如：

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

然后，此 JSON 以 Base64Url 编码格式形成 JWT 的第一部分。

### 有效载荷 Payload

JWT 的第二部分是有效载荷，其中包含声明。声明有关实体和其他数据声明。声明有三种类型：注册声明、公共声明以及私有声明。

- [**注册声明**](https://tools.ietf.org/html/rfc7519#section-4.1)：这些是一组非强制性的但建议使用的预定义声明，以提供一组有用的可互操作的声明。包含：

  - iss（发布者）
  - exp（到期时间）
  - sub（主题）
  - aud （受众）

  等。需要注意，声明名称是三个字符，因为 JWT 的含义是紧凑的。

- [**公共声明**](https://tools.ietf.org/html/rfc7519#section-4.2)：这些可以由使用 JWT 的人员随意定义。但为了避免冲突，应在 [IANA JSON Web Token 注册表](https://www.iana.org/assignments/jwt/jwt.xhtml)中定义它们，或将其定义为包含抗冲突名称空间的 URI。

- [**私有声明**](https://tools.ietf.org/html/rfc7519#section-4.3)：这些是自定义声明，旨在在同意使用它们的各方之间共享信息，既不是注册声明也不是公共声明。

有效载荷的示例：

```json
{
  "sub": "1234567890",
  "name": "Jeremy Jone",
  "admin": true
}
```

然后，对此载荷进行 Base64Url 编码，以形成 JWT 的第二部分。

注意：对于已签名的令牌，此信息尽管可以防止篡改，但任何人都可以读取，除非将其加密，否则请勿将机密信息放入其中。

### 签名 Signature

要创建签名部分，您必须获取编码的标头、有效载荷、秘钥和标头中制定算法，并对其进行签名。

例如，如果要使用 HMAC SHA256 算法，则将通过以下方式创建签名：

```text
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  www.jermeyjone.com)
```

签名用于验证消息在此过程中没有更改，并且对于使用私钥进行签名的令牌，它还可以验证 JWT 的发送者是它所说的真实身份。

### 拼在一起

将上述三部分拼在一起，得到一个完整的 JWT：

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkplcmVteSBKb25lIiwiYWRtaW4iOnRydWV9.Vyj5QsI_6T4R5lJH-1uS1lpwDo1uIfosYmrOIdd9L18
```

将其放在 [jwt.io](https://jwt.io) 中进行验证：

![jwt 验证](https://www.jeremyjone.com/wp-content/uploads/2021/03/jwt1.png)

## JWT 如何工作

在身份验证中，当用户使用凭据登录成功时，服务器将返回 JWT。由于 token 是凭据，因此必须格外小心，防止出现安全问题。通常，token 的保留时间不应超过要求的时间。

每当用户想要访问受保护的路由或资源时，user agent 都会发送 JWT，通常使用 Bearer 模式的 Authorization 标头，内容如下：

```text
Authorization: Bearer <token>
```

在某些情况下，这可以是无状态授权机制。服务器的受保护路由将在 Authorization 标头中检查有效的 JWT，如果存在，则将允许用户访问受保护的资源。如果 JWT 包含必要的数据，则可以减少查询数据库以进行某些操作的需求，尽管这种情况并非总是如此。

如果 token 在授权标头中发送，则跨域资源共享（CORS）不会成为问题，因为它不使用 cookie。

## 在 .NET 中使用 JWT

创建一个 web 控制器项目，具体代码可以参考 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.Jwt)

### 安装 Jwt

在 NuGet 中搜索 `Microsoft.AspNetCore.Authentication.JwtBearer` 并安装。

### 生成 token

在控制器添加一个 `GetToken` 的方法：

```csharp
/// <summary>
/// 颁发 token
/// </summary>
/// <returns></returns>
[HttpGet("token")]
public ActionResult GetToken()
{
    // 秘钥，绝对私有的，使用该秘钥可以生成和验证所有 token
    var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("www.jeremyjone.com"));
    // 创建令牌
    var token = new JwtSecurityToken(
        // 发行人
        issuer: "jeremyjone@qq.com",
        // 接收人
        audience: "jeremyjone",
        // 有效时间
        expires: DateTime.UtcNow.AddHours(1),
        // 数字签名，使用指定的加密方式对秘钥进行加密
        signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256),
        // 其他声明，这里可以任意填写
        claims: new Claim[]
        {
            // 角色需要在这里填写
            new Claim(ClaimTypes.Role, "Admin"),
            // 多个角色可以重复写，生成的 JWT 会是一个数组
            new Claim(ClaimTypes.Role, "Super")
        });

    // 写入 token 并生成 JWT
    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
}
```

### 验证 token

在 `Startup.cs` 中的服务添加验证即可：

```csharp
// 注入认证
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    // 需要认证哪些内容，就填写哪些
    .AddJwtBearer(options => options.TokenValidationParameters = new TokenValidationParameters
    {
        // 这里将 audience 的值修改。如果不验证，则通过，需要验证则不通过，可以修改 false 为 true 测试
        ValidateAudience = false,
        ValidAudience = "jeremyjone1", // 应该是 jeremyjone

        // 所有验证内容需要和颁发时的内容一致
        ValidateIssuer = true,
        ValidIssuer = "jeremyjone@qq.com",

        // 尤其是该秘钥字段，该字段属于绝密内容
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("www.jeremyjone.com")),

        // 验证有效期
        ValidateLifetime = true

        // 上面的内容属于建议但不强制验证
        // 还可以添加其他内容
    });
```

### 添加授权

给控制器中的 `Get` 方法添加 `[Authorize]` 属性。

### 测试

可以通过 Postman 进行测试，因为验证中 `ValidAudience` 不匹配，所以不能访问到 `Get` 方法了。
